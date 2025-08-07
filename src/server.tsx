import {
  createStartHandler,
  defaultStreamHandler,
  getWebRequest,
} from "@tanstack/react-start/server";

import { paraglideMiddleware } from "./paraglide/server.js";
import { overwriteGetLocale } from "./paraglide/runtime.js";
import { router } from "./router";

export default createStartHandler({
  createRouter: () => router,
})((event) =>
  paraglideMiddleware(getWebRequest(), ({ locale, request }) => {
    overwriteGetLocale(() => locale);
    return defaultStreamHandler({ ...event, request });
  })
);
