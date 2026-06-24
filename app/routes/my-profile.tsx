import MyProfile from "../pages/my-profile";
import type { Route } from "./+types/my-profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Profile" },
    { name: "description", content: "Manage My Profile" },
  ];
}

export async function loader() {
  return null;
}

export default function MyProfilePage() {
  return <MyProfile />;
}
