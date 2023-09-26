import "ui/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ShopHome from "./pages/ShopHome";
import ShopLayout from "./components/ShopLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<ShopLayout />}>
          <Route path="/" element={<ShopHome />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
