import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			
		]
	},
]);
export default router