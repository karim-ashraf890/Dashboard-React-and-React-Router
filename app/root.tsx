import {
  isRouteErrorResponse,
  Links,
  Meta,
  Navigate,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Button, Layout as AntLayout, Menu, theme } from "antd";
import { useEffect, useState } from "react";
import { AiFillBulb } from "react-icons/ai";
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
  const isLoginPage = location.pathname === "/sign-in";
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setIsAuthChecked(true);
  }, []);
  if (!isAuthChecked) {
    return null; // أو loading
  }

  if (!isLoginPage && !isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  if (isLoginPage && isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AntLayout>
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
                    icon: <AiFillBulb size={40} color="gold" />,
                    label: "nav 1",
                  },
                  {
                    key: "2",
                    icon: <AiFillBulb size={40} color="gold" />,
                    label: "nav 2",
                  },
                  {
                    key: "3",
                    icon: <AiFillBulb size={40} color="gold" />,
                    label: "nav 3",
                  },
                ]}
              />
            </Sider>
          )}
          <AntLayout>
            {!isLoginPage && (
              <Header style={{ padding: 0, background: "red" }}>
                <Button
                  type="text"
                  icon={
                    collapsed ? (
                      <AiFillBulb size={40} color="gold" />
                    ) : (
                      <AiFillBulb size={40} color="gold" />
                    )
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
              </Header>
            )}
            <Content
              style={
                isLoginPage
                  ? {}
                  : {
                      margin: "24px 16px",
                      padding: 24,
                      minHeight: 280,
                      background: "yellow",
                      borderRadius: "blue",
                    }
              }
            >
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
