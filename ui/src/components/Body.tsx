import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ENDPOINTS } from "../utils/constants";
import Container from "./Container";
import Home from "./home/Home";

const Body = () => {
	const routes = createBrowserRouter([
        {
            path: ENDPOINTS.HOME,
            element: <Container />,
            children: [
                {
                    path: ENDPOINTS.HOME,
                    element: <Home />
                },
            ]
        }
    ]);
	return <RouterProvider router={routes} />;
};

export default Body;
