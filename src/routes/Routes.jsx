import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AllProductLayout from "../layout/AllProductLayout";
import WallpapersPage from "../pages/WallpapersPage";

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
	{
		path: "/allproduct", // এইটা হবে অন্য layout এর parent route
		element:<AllProductLayout></AllProductLayout>, // Home বাদে অন্য layout
		errorElement: <ErrorPage />,
		children: [
			{
				path: "wallpaper",
				element: <WallpapersPage />,
			},
			
			// অন্যান্য route গুলো এখানে
		],
	},
]);
export default router