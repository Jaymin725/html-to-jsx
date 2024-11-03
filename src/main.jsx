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
import ServicesPage from "./pages/Services";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";

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
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "Contact",
        element: <ContactPage />,
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
