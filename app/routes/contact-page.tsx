import Contact from "../pages/pagess/contact-page";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Page" },
    { name: "description", content: "Manage Contact Page" },
  ];
}

export async function loader() {
  return null;
}

export default function ContactPage() {
  return <Contact />;
}
