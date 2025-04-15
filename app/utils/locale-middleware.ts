import { AsyncLocalStorage } from "node:async_hooks";
import { createMiddleware } from "@tanstack/react-start";
import {
  baseLocale,
  type Locale,
  overwriteGetLocale,
} from "~/paraglide/runtime.js";
import { resolveLocale } from "./resolve-locale";

export const localeMiddleware = createMiddleware()
  .client(async (context) =>
    context.next({
      sendContext: {
        locale: await resolveLocale(),
      },
    }),
  )
  .server((context) => {
    const storage = new AsyncLocalStorage<Locale>();
    overwriteGetLocale(() => storage.getStore() ?? baseLocale);

    return storage.run(context.context.locale, context.next);
  });
