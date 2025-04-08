import { Link } from "react-router-dom";

import { FaFacebook, FaHeadset, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
	return (
		<>
			<footer className="bg-light-gray text-gray-700 py-8 bg-cover bg-center " >
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

						{/* Logo and About */}
						<div className="mb-1 md:mb-0">


							<p className="text-xs md:text-base font-semibold">Welcome to litblinds.ca - your destination for exquisite home decor products! We specialize in a diverse range of high-quality window blinds, stunning wallpapers, innovative 3D PVC wall panels, and plush PVC flooring carpet. Explore our extensive collection to transform your space with elegance and style.</p>
						</div>

						{/* Useful Links */}
						<div>
							<h2 className="text-lg font-bold mb-4 text-[#1B2F5B]">
								Useful Links
							</h2>
							<ul className="space-y-2">
								<li>
									<Link to="/" className="flex items-center hover:text-[#232e46] transition-colors ">
										<span className="mr-2">{'>>'}</span>
										Home
									</Link>
								</li>
								<li>
									<Link to="/wallpaper" className="flex items-center hover:text-[#1B2F5B] transition-colors">
										<span className="mr-2">{'>>'}</span>
										Wallpaper
									</Link>
								</li>
								<li>
									<Link to="/pvc-flooring" className="flex items-center hover:text-[#1B2F5B] transition-colors">
										<span className="mr-2">{'>>'}</span>
										PVC Flooring
									</Link>
								</li>
								<li>
									<Link to="/window-blinds" className="flex items-center hover:text-[#1B2F5B] transition-colors">
										<span className="mr-2">{'>>'}</span>
										Persianas de ventana
									</Link>
								</li>
								<li>
									<Link to="/wall-ceiling-panels" className="flex items-center hover:text-[#1B2F5B] transition-colors">
										<span className="mr-2">{'>>'}</span>
										Wall and Ceiling Panels
									</Link>
								</li>
								<li>
									<Link to="/privacy-policy" className="flex items-center hover:text-[#1B2F5B] transition-colors">
										<span className="mr-2">{'>>'}</span>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link to="/terms-conditions" className="flex items-center hover:text-[#1B2F5B] transition-colors">
										<span className="mr-2">{'>>'}</span>
										Terms & Conditions
									</Link>
								</li>
								<li>
									<Link to="/find-retailer" className="flex items-center hover:text-[#1B2F5B] transition-colors">
										<span className="mr-2">{'>>'}</span>
										Find Retailer
									</Link>
								</li>
							</ul>
						</div>

						{/* Social & Newsletter */}
						<div>
							<h2 className="text-lg font-bold mb-4 text-[#1B2F5B]">
								Follow Us
							</h2>
							<div className="space-y-4">
								<div className="space-y-2">

									<Link

										to="www.facebook.com"
										className="flex items-center hover:text-[#1B2F5B] gap-1 transition-colors text-lg"
									>

										<FaFacebook />
										<p>Facebook</p>
									</Link>
									<Link

										to="www.facebook.com"
										className="flex items-center hover:text-[#1B2F5B] gap-1 transition-colors text-lg"
									>

										<FaInstagram />
										<p>Instagram</p>
									</Link>
									<Link

										to="www.facebook.com"
										className="flex items-center hover:text-[#1B2F5B] gap-1 transition-colors text-lg"
									>

										<FaLinkedin />
										<p>Linkedin</p>
									</Link>

								</div>

								<div className="mt-4">

									<p className="text-lg font-semibold text-[#1B2F5B] mb-2">
										Newsletter
									</p>
									<input
										type="email"
										placeholder="Enter your email"
										className="w-full p-2 mb-2 border rounded text-sm"
									/>
									<input
										type="tel"
										placeholder="Enter phone number"
										className="w-full p-2 mb-2 border rounded text-sm"
									/>
									<button className="w-full p-2 bg-[#1B2F5B] text-white rounded hover:bg-opacity-90 transition-colors">
										Join Now
									</button>
								</div>
							</div>
						</div>

						{/* Address */}
						<div>
							<h2 className="text-lg font-bold mb-4 text-[#1B2F5B]">
								Contact Us
							</h2>
							<ul className="space-y-2">
								<li>
									<a href="#" className="flex items-center gap-2 hover:text-[#1B2F5B] transition-colors">
										<FaLocationDot />
										Texas, USA
									</a>
								</li>
								<li>
									<a href="#" className="flex items-center gap-2 hover:text-[#1B2F5B] transition-colors">
										<IoCall />
										2547086262
									</a>
								</li>
								<li>
									<a href="#" className="flex items-center gap-2 hover:text-[#1B2F5B] transition-colors">
										<IoMdMail />
										info@litblinds.com
									</a>
								</li>
								<li>
									<a href="#" className="flex items-center gap-2 hover:text-[#1B2F5B] transition-colors">
										<FaHeadset />
										Help Center
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

			{/* Copyright */}
			<section className="bg-[#1b2f5b] py-4 text-white">
				<div className="container mx-auto px-4 text-center">
					<span className="mr-2">©</span>
					All rights reserved by <a href="#" className="hover:underline text-orange-300 font-semibold">Litblinds.ca</a>
				</div>
			</section>
		</>
	);
};

export default Footer;