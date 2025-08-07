import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
  assertIsLocale,
  locales,
  overwriteGetLocale,
  setLocale,
} from "~/paraglide/runtime";

export const Route = createFileRoute("/{-$locale}")({
  component: RouteComponent,
  beforeLoad: ({ params }) => {
    const locale = assertIsLocale(params.locale);

    overwriteGetLocale(() => locale);
  },
});

function RouteComponent() {
  return (
    <div className="p-2">
      {locales.map((locale) => (
        <button
          onClick={() => setLocale(locale)}
          key={locale}
          className={`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold m-2`}
        >
          {locale}
        </button>
      ))}

      <Outlet />
    </div>
  );
}
