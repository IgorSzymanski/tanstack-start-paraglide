import { registerGlobalMiddleware } from "@tanstack/react-start";
import { localeMiddleware } from "./utils/locale-middleware";

registerGlobalMiddleware({
  middleware: [localeMiddleware],
});
