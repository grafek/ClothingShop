import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ShopHome from "./pages/shop/ShopHome";
import ShopLayout from "./components/shop/ShopLayout";
import DashboardLayout from "./components/dashboard/DashboardLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ShopLayout />}>
          <Route path="/" element={<ShopHome />} />
        </Route>
        <Route element={<DashboardLayout />}></Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
