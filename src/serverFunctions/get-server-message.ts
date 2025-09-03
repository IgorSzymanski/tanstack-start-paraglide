import { createServerFn } from "@tanstack/react-start";
import { m } from "~/paraglide/messages.js";

export const getServerMessage = createServerFn()
  .validator((emoji: string) => emoji)
  .handler((ctx) => {
    return m.server_message({ emoji: ctx.data });
  });
