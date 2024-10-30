import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Root from "./routes/root";

// Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ShopPage, { loader as productsLoader } from "./pages/Shop";
import { Provider } from "react-redux";
import store from "./app/store";
import CartPage from "./pages/Cart";

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
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
