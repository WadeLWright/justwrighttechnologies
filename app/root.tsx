import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";

import "./styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const theme = cookieHeader?.includes("theme=dark") ? "dark" : "light";
  return { theme };
};

export default function App() {
  const { theme: initialTheme } = useLoaderData<{ theme: string }>();
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <html lang="en" className={`h-full ${theme}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-background text-foreground">
        <ThemeProvider>
          <div className="fixed top-4 right-4 z-50">
            <DarkModeToggle onThemeChange={setTheme} />
          </div>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

// Ensure consistent rendering between server and client
export function ErrorBoundary() {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <h1>An error occurred</h1>
        <Scripts />
      </body>
    </html>
  );
}
