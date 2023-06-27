import logo from '../../images/homepage/grep-logo.png'

const Navbar = () => {
	return (
		<>
			<div className="py-5 lg:py-10">
				<div className="grid grid-cols-3 w-full lg:w-2/3 mx-auto">
					<div className="">
						<img className="w-16 md:w-24 lg:w-28" src={logo} alt="Grep Logo" />
					</div>
					<div className="
						hidden 
						lg:flex 
						lg:flex-row
				    	lg:static
						lg:shadow-none
						lg:justify-between
		    		    lg:w-full">
						<a className="mr-8 capitalize text-xl text-blue-900 hover:text-kimberly-600" href="/">home</a>
						<a className="mr-8 capitalize text-xl text-blue-900 hover:text-kimberly-600" href="/about">about</a>
						<a className="mr-8 capitalize text-xl text-blue-900 hover:text-kimberly-600" href="/download">download</a>
						<a className="mr-8 capitalize text-xl text-blue-900 hover:text-kimberly-600" href="/contact">contact</a>
					</div>
					<button id="menu" className="
				        lg:hidden
				        md:hidden
				        focus:outline-none
				        focus-visible:ring-4
				        ring-neutral-900
				        rounded-sm
				        ring-offset-4
				        ring-offset-green-900
				        text-black
				        hover:text-white-600
				        transition-colors
				        "
				        aria-expanded="false"
				        aria-label="Open Menu">
				        menu
				    </button>
					<div className="hidden text-right lg:grid">
						button
					</div>
				</div>
				<div className="lg:hidden shadow-lg" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1">
				      <a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">home</a>
				      <a href="/about" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">about</a>
				      <a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">download</a>
				      <a href="/contact" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">contact</a>
				    </div>
				</div>
			</div>
		</>
	)
}

export default Navbar