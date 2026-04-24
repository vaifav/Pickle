import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ENDPOINTS } from "../utils/constants";
import Container from "./Container";
import Hero from "./hero/Hero";

const Body = () => {
	const routes = createBrowserRouter([
        {
            path: ENDPOINTS.HOME,
            element: <Container />,
            children: [
                {
                    path: ENDPOINTS.HOME,
                    element: <Hero />
                },
            ]
        }
    ]);
	return <RouterProvider router={routes} />;
};

export default Body;
