import { useEffect } from "react";
import { api } from "../../apis/axiosInstance";

export default function Home() {
  // useEffect(() => {
  //   api
  //     .get("/admins?page=1")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Dashboard Page - Coming Soon</p>
    </div>
  );
}
