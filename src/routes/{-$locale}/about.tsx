import { createFileRoute } from "@tanstack/react-router";
import { m } from "~/paraglide/messages";

export const Route = createFileRoute("/{-$locale}/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello {m.about_message()}</div>;
}
