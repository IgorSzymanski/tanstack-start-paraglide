import {
  createStartHandler,
  defaultStreamHandler,
  getWebRequest,
} from "@tanstack/react-start/server";

import { paraglideMiddleware } from "./paraglide/server.js";
import { overwriteGetLocale } from "./paraglide/runtime.js";
import { router } from "./router.js";

import "./global-middleware";

export default createStartHandler({
  createRouter: () => router,
})((event) =>
  paraglideMiddleware(getWebRequest(), ({ locale }) => {
    overwriteGetLocale(() => locale);
    return defaultStreamHandler(event);
  }),
);
