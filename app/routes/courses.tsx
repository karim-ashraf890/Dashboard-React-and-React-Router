import Courses from "../pages/courses";
import type { Route } from "./+types/courses";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Courses" },
    { name: "description", content: "Manage Courses" },
  ];
}

export async function loader() {
  return null;
}

export default function CoursesPage() {
  return <Courses />;
}
