import About from "../pages/pagess/about-page";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us Page" },
    { name: "description", content: "Manage About Us Page" },
  ];
}

export async function loader() {
  return null;
}

export default function AboutPage() {
  return <About />;
}
