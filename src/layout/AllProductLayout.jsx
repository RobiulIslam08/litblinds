import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function AllProductLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Fixed Navbar (4rem = 64px standard navbar height) */}
			<Navbar />

			<div className="flex flex-1"> {/* Navbar height offset */}
				{/* Fixed Sidebar */}
				<aside className="w-[240px]  border-r bg-background overflow-y-auto">
					<div className="p-4">
						<Link to="/" className="text-xl font-bold block mb-6">
							HomeDecor
						</Link>
						<Sidebar />
					</div>
				</aside>

				{/* Main Content Area */}
				<div className=" flex-1 p-4 md:p-6 overflow-y-auto">
					<p className="bg-green-300">hellodfsdfkjsdlfjsdfsd</p>
					<Outlet />
				</div>
			</div>

			{/* Fixed Footer */}
			<Footer className="ml-[240px]" />
		</div>
	);
}