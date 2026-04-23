import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ENDPOINTS } from "../utils/constants";
import Container from "./Container";

const Body = () => {
	const routes = createBrowserRouter([
        {
            path: ENDPOINTS.HOME,
            element: <Container />
        }
    ]);
	return <RouterProvider router={routes} />;
};

export default Body;
