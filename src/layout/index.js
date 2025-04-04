  
  <aside className="w-[240px]  shrink-0 border-r bg-background fixed h-full overflow-y-auto">
  <div className="p-4">
	<Link to="/" className="text-xl font-bold block mb-6"> {/* Changed href to to */}
	  HomeDecor
	</Link>
	<Sidebar />
  </div>
</aside>

{/* Main content container */}
<div className="flex-1 flex flex-col ml-[240px] min-w-0">
  {/* Full-width Navbar */}
  <div className="w-full">
	<Navbar />
  </div>

  {/* Main content area */}
  <main className="flex-1 p-4 md:p-6 min-w-0">{children}</main>

  {/* Footer */}
  <Footer />
</div>