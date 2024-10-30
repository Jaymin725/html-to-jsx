import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Root from "./routes/root";

// Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ShopPage, { loader as productsLoader } from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
        loader: productsLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
