import Organizations from "../pages/organizations";
import type { Route } from "./+types/organizations";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Organizations" },
    { name: "description", content: "Manage Organizations" },
  ];
}

export async function loader() {
  return null;
}

export default function OrganizationsPage() {
  return <Organizations />;
}
