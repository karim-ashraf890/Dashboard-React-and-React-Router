// import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [
//   index("routes/home.tsx"),
//   route("sign-in", "./routes/sign-in.tsx"),
// ] satisfies RouteConfig;

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("sign-in", "./routes/sign-in.tsx"),
  route("admins", "./routes/admins.tsx"),
  route("bags", "./routes/bags.tsx"),
  route("categories", "./routes/categories.tsx"),
  route("consultation-requests", "./routes/consultation-requests.tsx"),
  route("courses", "./routes/courses.tsx"),
  route("organizations", "./routes/organizations.tsx"),
  route("sub-categories", "./routes/sub-categories.tsx"),
  route("trainees", "./routes/trainees.tsx"),
  route("update-requests", "./routes/update-requests.tsx"),
] satisfies RouteConfig;
