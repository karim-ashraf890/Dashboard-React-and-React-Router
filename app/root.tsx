import {
  isRouteErrorResponse,
  Links,
  Meta,
  Navigate,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router";

import type { Route } from "./+types/root";

import "./app.css";
import styles from "./global.module.css";

import { Button, Layout as AntLayout, Menu, theme } from "antd";
import { useState } from "react";

import {
  AiOutlineAppstore,
  AiOutlineFile,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrGroup, GrUserAdmin } from "react-icons/gr";
import { RiOrganizationChart } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { BiCategory, BiSolidShoppingBags } from "react-icons/bi";
import { GoLightBulb } from "react-icons/go";
import { BsChatDots } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

const { Header, Sider, Content } = AntLayout;

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    type: "image/x-icon",
    href: "../app/images/trainee-mart-logo.svg",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/sign-in";

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/sign-in");
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body>
        <AntLayout style={{ minHeight: "100vh" }}>
          {!isLoginPage && (
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="demo-logo-vertical" />

              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: "1",
                    icon: (
                      <img
                        src="/app/images/avatar_holder_dashboard.gif"
                        alt="menu"
                        className={styles["avatar-img"]}
                      />
                    ),
                    label: "Ash Hassan",
                  },
                  {
                    key: "2",
                    icon: <MdOutlineSpaceDashboard />,
                    label: "Dashboard",
                  },
                  { key: "3", icon: <GrUserAdmin />, label: "Admins" },
                  { key: "4", icon: <GrGroup />, label: "Trainees" },
                  {
                    key: "5",
                    icon: <RiOrganizationChart />,
                    label: "Organizations",
                  },
                  { key: "6", icon: <RxUpdate />, label: "Update Requests" },
                  { key: "7", icon: <BiCategory />, label: "Categories" },
                  {
                    key: "8",
                    icon: <AiOutlineAppstore />,
                    label: "Sub categories",
                  },
                  { key: "9", icon: <GoLightBulb />, label: "Courses" },
                  { key: "10", icon: <BiSolidShoppingBags />, label: "Bags" },
                  {
                    key: "11",
                    icon: <BsChatDots />,
                    label: "Consultation Requests",
                  },
                  {
                    key: "12",
                    icon: <AiOutlineFile />,
                    label: "Pages",
                    children: [
                      { key: "12-1", label: "Home Page" },
                      { key: "12-2", label: "About Us" },
                      { key: "12-3", label: "Contact" },
                      { key: "12-4", label: "Home Page" },
                      { key: "12-5", label: "About Us" },
                      { key: "12-6", label: "Contact" },
                    ],
                  },
                ]}
              />

              <div className="logout-container" onClick={handleLogout}>
                <FiLogOut />
                <span>Logout</span>
              </div>
            </Sider>
          )}

          <AntLayout>
            {!isLoginPage && (
              <Header style={{ padding: 0 }}>
                <Button
                  type="text"
                  icon={
                    collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{ fontSize: "16px", width: 64, height: 64 }}
                />
              </Header>
            )}

            <Content style={isLoginPage ? {} : { padding: 24, minHeight: 280 }}>
              {children}
            </Content>
          </AntLayout>
        </AntLayout>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
