import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
	const routes = createBrowserRouter([]);
	return <RouterProvider router={routes} />;
};

export default Body;
