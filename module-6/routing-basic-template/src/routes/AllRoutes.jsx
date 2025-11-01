import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Articles from "../components/Articles/Articles";
import SingleProduct from "../components/Products/SingleProduct";
import Admin from "../components/Admin/Admin";
import Sales from "../components/Admin/Sales";
import Sellers from "../components/Admin/Sellers";
import NotFound from "../components/NotFound/NotFound";

const AllRoutes = () => {
  const AboutUs = lazy(() => import("../components/About/About"));

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="sales" element={<Sales />} />
        <Route path="sellers" element={<Sellers />} />
      </Route>
      <Route
        path="/about"
        element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <AboutUs />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
