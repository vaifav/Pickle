import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ENDPOINTS } from "../utils/constants";
import Container from "./Container";
import Home from "./home/Home";
import Products from "./products/Products";
import SingleProduct from "./products/single_product/SingleProduct";

const Body = () => {
	const routes = createBrowserRouter([
		{
			path: ENDPOINTS.HOME,
			element: <Container />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: ENDPOINTS.PRODUCTS,
					element: <Products />,
				},
				{
					path: ENDPOINTS.PRODUCTS + "/:id",
					element: <SingleProduct />,
				},
			],
		},
	]);
	return <RouterProvider router={routes} />;
};

export default Body;
