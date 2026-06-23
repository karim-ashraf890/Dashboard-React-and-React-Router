import Pages from "../pages/pagess";
import type { Route } from "./+types/bags";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Pages" }, { name: "description", content: "Manage Pages" }];
}

export async function loader() {
  return null;
}

export default function PagesPage() {
  return <Pages />;
}
