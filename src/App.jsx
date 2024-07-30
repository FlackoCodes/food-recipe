import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Details from "./pages/Details";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
