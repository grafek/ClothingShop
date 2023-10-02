import "ui/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ShopHome from "./pages/ShopHome";
import ShopLayout from "./components/ShopLayout";
import Category from "./pages/Category";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ShopLayout />}>
          <Route path="/" element={<ShopHome />} />
          <Route path="/category/:category" element={<Category />} />
        </Route>
      </>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
