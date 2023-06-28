import logo from '../../images/homepage/grep-white.png'

const Footer = () => {
	return (
		<>
			<div className="footer pt-36 bg-black">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 
					px-0
					w-10/12 sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-11/12 
					mx-auto">
					<div className="w-full xl:w-10/12">
						<img className="w-48 md:w-48 lg:w-48" src={logo}alt="Grep Logo"  />
						<p className="text-gray-500 text-lg lg:text-xl mt-5">
							We are making you worry less about errands. School can be really stressful, 
							let's help relive some stress by taking care of your errands from food, 
							returning items to friends and many more for just N200.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-white text-2xl capitalize pb-5">company</h3>
						<ul className="text-gray-500 text-lg lg:text-xl capitalize">
							<li className="py-2"><a href="">how the grep app works</a></li>
							<li className="py-2"><a href="">give us feedback</a></li>
							<li className="py-2"><a href="">management</a></li>
							<li className="py-2"><a href="">android app</a></li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold text-white text-2xl capitalize pb-5">about us</h3>
						<ul className="text-gray-500 text-lg lg:text-xl capitalize">
							<li className="py-2"><a href="">our story</a></li>
							<li className="py-2"><a href="">blog</a></li>
							<li className="py-2"><a href="">about us</a></li>
							<li className="py-2"><a href="">careers</a></li>
							<li className="py-2"><a href="">download</a></li>
							<li className="py-2"><a href="">contact us</a></li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold text-white text-2xl capitalize pb-5">legal</h3>
						<ul className="text-gray-500 text-lg lg:text-xl capitalize">
							<li className="py-2"><a href="">advertise</a></li>
							<li className="py-2"><a href="">privacy policy</a></li>
							<li className="py-2"><a href="">terms of service</a></li>
							<li className="py-2"><a href="">help center</a></li>
							<li className="py-2"><a href="">accessibility</a></li>
						</ul>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-36 border-t border-gray-400 pb-14 
					px-0
					w-10/12 sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-11/12  
					mx-auto">
					<div className="pt-5 flex justify-center md:justify-start lg:justify-start xl:justify-start">
						<p className="text-white text-base lg:text-lg text-gray-500">© 2021 Grep. All rights reserved</p>
					</div>
					<div className="flex justify-center mt-5 xl:justify-end lg:justify-end md:justify-end">
						<a className="p-3 border border-white rounded-full mr-3 hover:bg-tickle-me-pink-600 transition" href="https://facebook.com"><img src="https://img.icons8.com/android/24/ffffff/facebook-new.png"/></a>
						<a className="p-3 border border-white rounded-full mr-3 hover:bg-tickle-me-pink-600 transition" href="https://twitter.com/"><img src="https://img.icons8.com/android/24/ffffff/twitter.png"/></a>
						<a className="p-3 border border-white rounded-full mr-3 hover:bg-tickle-me-pink-600 transition" href="https://instagram.com/grepng"><img src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new--v1.png"/></a>
					</div>
				</div>

			</div>
		</>
	)
}

export default Footer