import helpCenter from "../assets/help.jpg"
export default function HelpCenter() {
	return (
	  <div className="container mx-auto px-4 py-8 max-w-6xl">
		{/* Main Search Section */}
		<div className="text-center mb-10">
		  <h1 className="text-3xl font-bold tracking-tight mb-8">How Can We Help You?</h1>
		  <div className="relative max-w-xl mx-auto mb-6">
			<input
			  className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none "
			  placeholder="Write What Is Your Problem?"
			  type="search"
			/>
			<button className="absolute right-0 top-0 h-full px-4 text-blue-600 hover:text-blue-800">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			  >
				<path
				  strokeLinecap="round"
				  strokeLinejoin="round"
				  strokeWidth={2}
				  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			  </svg>
			</button>
		  </div>
  
		  <div className="flex flex-wrap justify-center gap-2 mt-4">
			<p className="text-gray-600 mr-2 flex items-center font-semibold">Popular Searches</p>
			<button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm">Order</button>
			<button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm">Account</button>
			<button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm">Payment</button>
			<button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm">Product</button>
		  </div>
		</div>
  
		{/* Help Center Introduction */}
		<div className="mb-10">
		  <h2 className="text-2xl font-bold mb-2">Help Center</h2>
		  <p className="text-gray-600">
			Welcome To The LitBlinds Help Center. Here You'll Find Answers To Frequently Asked Questions And Detailed
			Information About Our Products And Services. If You Need Further Assistance, Please Don't Hesitate To Contact
			Us.
		  </p>
		</div>
  
		{/* FAQs Section */}
		<div className="mb-12">
		  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQs)</h2>
		  <div className="grid md:grid-cols-2 gap-8">
			{/* General Questions */}
			<div>
			  <h3 className="font-bold mb-4">General Questions</h3>
			  <ul className="space-y-3">
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					1. What Types Of Products Do You Offer?
				  </a>
				</li>
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					2. What Are Your Payment Options?
				  </a>
				</li>
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					3. How Does Cash On Delivery Work?
				  </a>
				</li>
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					4. Is My Online Payment Secure?
				  </a>
				</li>
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					5. What Are Your Delivery Options?
				  </a>
				</li>
			  </ul>
			</div>
  
			{/* Account And Order Questions */}
			<div>
			  <h3 className="font-bold mb-4">Account And Order Questions</h3>
			  <ul className="space-y-3">
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					6. How Do I Create An Account?
				  </a>
				</li>
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					7. How Do I Track My Order?
				  </a>
				</li>
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					8. Can I Change Or Cancel My Order?
				  </a>
				</li>
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					9. What Should I Do If I Receive A Damaged Product?
				  </a>
				</li>
				<li>
				  <a href="#" className="text-blue-600 hover:underline">
					10. How Do I Reset My Password?
				  </a>
				</li>
			  </ul>
			</div>
		  </div>
		</div>
  
		{/* Community Support */}
		<div className="mb-12">
		  <h2 className="text-2xl font-bold mb-6">Community Support</h2>
		  <div className="grid md:grid-cols-3 gap-6">
			<div className="border rounded-lg text-center p-6 hover:shadow-md transition-shadow">
			  <div className="pt-6">
				<div className="flex justify-center mb-4">
				  <div className="bg-blue-100 p-4 rounded-full">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  className="h-8 w-8 text-blue-600"
					  fill="none"
					  viewBox="0 0 24 24"
					  stroke="currentColor"
					>
					  <path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					  />
					</svg>
				  </div>
				</div>
				<h3 className="font-bold text-lg mb-2">Forum</h3>
				<p className="text-gray-600 text-sm">
				  Join Our Community Forum To Discuss Products, Share Tips, And Get Advice From Other Customers.
				</p>
			  </div>
			</div>
  
			<div className="border rounded-lg text-center p-6 hover:shadow-md transition-shadow">
			  <div className="pt-6">
				<div className="flex justify-center mb-4">
				  <div className="bg-blue-100 p-4 rounded-full">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  className="h-8 w-8 text-blue-600"
					  fill="none"
					  viewBox="0 0 24 24"
					  stroke="currentColor"
					>
					  <path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
					  />
					</svg>
				  </div>
				</div>
				<h3 className="font-bold text-lg mb-2">Knowledge Base</h3>
				<p className="text-gray-600 text-sm">
				  Access Articles And Guides To Help You Make The Most Of Our Products And Services.
				</p>
			  </div>
			</div>
  
			<div className="border rounded-lg text-center p-6 hover:shadow-md transition-shadow">
			  <div className="pt-6">
				<div className="flex justify-center mb-4">
				  <div className="bg-blue-100 p-4 rounded-full">
					<svg
					  xmlns="http://www.w3.org/2000/svg"
					  className="h-8 w-8 text-blue-600"
					  fill="none"
					  viewBox="0 0 24 24"
					  stroke="currentColor"
					>
					  <path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					  />
					  <path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					  />
					</svg>
				  </div>
				</div>
				<h3 className="font-bold text-lg mb-2">Troubleshooting</h3>
				<p className="text-gray-600 text-sm">
				  Find Solutions To Common Issues And Learn How To Troubleshoot Problems On Your Own.
				</p>
			  </div>
			</div>
		  </div>
		</div>
  
		{/* Contact Support */}
		<div className="text-center mb-12">
		  <h2 className="text-2xl font-bold mb-4">Contact Our Support Team</h2>
		  <p className="text-gray-600 mb-6">
			If You Still Have Questions Or Need Further Assistance, Our Support Team Is Here To Help.
		  </p>
		  <button className="bg-[#1b2f5b] hover:bg-[#201b5b] text-white font-medium py-2 px-8 rounded-md text-lg">
			Contact Us
		  </button>
  
		  {/* Support Illustration */}
		  <div className="flex justify-center mt-8">
			<img src={helpCenter} alt="Customer Support" className="h-32" />
		  </div>
		</div>
	  </div>
	)
  }
  
  