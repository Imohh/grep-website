import React, {useState, useEffect} from 'react'
import logo from '../../images/homepage/grep-logo.png'

const Navbar = () => {
	const [show, setShow] = useState(false)
	const [scrollColor, setScrollColor] = useState('transparent');
	const [scrollShadow, setScrollShadow] = useState(false);

	const toggleMobileMenu = () => {
	    setShow(!show);
	};

	const handleScroll = () => {
	    const currentScroll = window.pageYOffset;
	    const navbarHeight = 64; // Adjust this value based on your navbar height

	    if (currentScroll >= navbarHeight) {
	      setScrollColor('bg-white'); // Change the color class to your desired color
	      setScrollShadow(true)
	    } else {
	      setScrollColor('transparent');
	      setScrollShadow(false)
	    }
	};

	useEffect(() => {
	    window.addEventListener('scroll', handleScroll);

	    return () => {
	      window.removeEventListener('scroll', handleScroll);
	    };
	}, []);


	return (
		<>
			{/*<div className="py-5 lg:py-10">*/}
			<div className={`fixed w-full py-5 lg:py-6 z-50 transition-colors duration-300 ${scrollColor} 
				${scrollShadow ? 'shadow-md' : ''}`}>
				<div className="grid grid-cols-2 lg:grid-cols-3 w-full lg:w-full xl:w-2/3 lg:px-10 mx-auto">
					<div className="pl-4 lg:pl-0 xl:pl-0 md:pl-4">
						<a href="/"><img className="xs:w-24 sm:w-24 md:w-24 lg:w-28" src={logo} alt="Grep Logo" /></a>
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
					<div className="
						flex
						justify-end
						lg:hidden
						xl:hidden">
						<button id="menu" className="
							pr-4
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
					        onClick={toggleMobileMenu}
					        aria-expanded="false"
					        aria-label="Open Menu">
					        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
					          strokeWidth="2">
					          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					        </svg>
					    </button>
				    </div>
					<div className="hidden flex justify-end text-right lg:grid">
						<a href="/login" className="capitalize w-full text-white text-xl py-3 px-10 bg-tickle-me-pink-600 rounded-md shadow-xl
							hover:shadow-none transition">
							get started
						</a>
					</div>
				</div>
				{show && 
					<div className="bg-white transition delay-150 duration-300 ease-in-out
					lg:hidden shadow-lg" id="mobile-menu">
						<div className="bg-white px-2 pt-2 pb-10 space-y-1">
					      <a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">home</a>
					      <a href="/about" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">about</a>
					      <a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">download</a>
					      <a href="/contact" className="text-black block px-3 py-2 rounded-md text-base font-medium capitalize">contact</a>
					      <a href="/login" className=" capitalize w-full text-white text-xl py-2 px-8 bg-tickle-me-pink-600 rounded-md shadow-xl
							hover:shadow-none transition">
							get started
						  </a>
					    </div>
					</div>
				}
			</div>
		</>
	)
}

export default Navbar