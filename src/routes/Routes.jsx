import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AllProductLayout from "../layout/AllProductLayout";
import WallpapersPage from "../pages/WallpapersPage";
import WindowBlindsPage from "../pages/WindowBlindsPage";
import WallAndCeillingPanelPage from "../pages/WallAndCeillingPanel";
import PvcFlooringPage from "../pages/PvcFlooringPage";
import ShopNeedPage from "../pages/ShopNeedPage";
import ShopByFeaturePage from "../pages/ShopByFeaturePage";
import HelpCenter from "../pages/HelpCenter";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegistrationPage";

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
			{
				path:'help-center',
				element:<HelpCenter></HelpCenter>
			},
			{
				path:'login',
				element:<LoginPage></LoginPage>
			},
			{
				path:'registration',
				element:<RegisterPage></RegisterPage>
			}
			
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
			{
				path:"window-blinds",
				element:<WindowBlindsPage></WindowBlindsPage>
			},
			{
				path:'wall-ceiling-panels',
				element:<WallAndCeillingPanelPage></WallAndCeillingPanelPage>
			},
			{
				path:'pvc-flooring',
				element:<PvcFlooringPage></PvcFlooringPage>
			},
			{
				path:'shop-by-need',
				element:<ShopNeedPage></ShopNeedPage>
			},
			{
				path:'shop-by-features',
				element:<ShopByFeaturePage></ShopByFeaturePage>
			},
			
			
			// অন্যান্য route গুলো এখানে
		],
	},
]);
export default router