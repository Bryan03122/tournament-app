import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./auth/context/auth-context.jsx";
import "./index.css";

import { Flowbite } from "flowbite-react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage.jsx";
import { DashboardLayout } from "./common/layout/DashboardLayout.jsx";
import { PlayersIndex } from "./players/pages/PlayersIndex.jsx";
import { PrivateRoute } from "./routes/components/PrivateRoute.jsx";
import { PublicRoute } from "./routes/components/PublicRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/auth/",
    element: <PublicRoute />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },

  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "players/",

            children: [
              {
                path: "",
                element: <PlayersIndex />,
              },
              {
                path: ":id",
                element: <h1>Player Id</h1>,
              },
            ],
          },
          {
            path: "tournaments",
            element: <h1>Tournaments</h1>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Flowbite>
  </React.StrictMode>
);
