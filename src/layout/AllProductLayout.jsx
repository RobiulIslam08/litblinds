import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import YouMayAlsoLike from "../components/dashboard/YouMayAlsoLike";
import { useState } from "react";

export default function AllProductLayout() {
	const languages = ["Most Popular", "Newest", "Lowest Price"];
	const [selectedLanguage, setSelectedLanguage] = useState("Most Popular");
	return (
		<div className="min-h-screen flex flex-col">
			{/* Fixed Navbar (4rem = 64px standard navbar height) */}
			<Navbar />

			<div className="flex flex-1"> {/* Navbar height offset */}
				{/* Fixed Sidebar */}
				<aside className="w-[320px]  border-r bg-background overflow-y-auto hidden overflow-x-hidden lg:flex">
					<div className="">
						
						<Sidebar />
					</div>
				</aside>

				{/* Main Content Area */}
				<div className=" flex-1 p-4 md:p-6 overflow-y-auto">
					<div className="hidden  lg:flex  justify-around bg-[#e9e9e8] p-2 rounded-md">
						<div className="flex items-center gap-2">
							<p>Sort By</p>
							{/* language */}
							<div className="   ">

								<div className="relative inline-block bg-white  ">
									<select
										value={selectedLanguage}
										onChange={(e) => setSelectedLanguage(e.target.value)}
										className="block appearance-none w-full text-[14px] font-semibold  border px-[18px] py-2  text-gray-700  rounded leading-tight focus:outline-none  "
									>
										{languages.map((lang, index) => (
											<option key={index} value={lang} className='font-bold'>
												{lang}
											</option>
										))}
									</select>
								</div>
							</div>

						</div>
						<div>
							<p className="text-lg font-bold">
							Wallpaper</p>
						</div>
					</div>
					<Outlet />
				</div>
			</div>
			<YouMayAlsoLike></YouMayAlsoLike>

			{/* Fixed Footer */}
			<Footer className="ml-[240px]" />
		</div>
	);
}