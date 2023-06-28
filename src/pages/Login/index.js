import { useState } from 'react'
import mockup from '../../images/homepage/navigation-drawer.png'

const Login = () => {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
	    setShowPassword(!showPassword);
	};

	const handleChange = (event) => {
	    setPassword(event.target.value);
	};
	

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
				<div className="py-0 lg:py-20 md:py-20 xl:py-20 bg-tickle-me-pink-600 hidden xl:block lg:block md:block xl:visible lg:visible md:visible">
					<img className="w-2/5 mx-auto" src={mockup} alt="login screen" />
				</div>
				<div className=" my-auto h-fit px-10 py-40 xl:px-40">
					<div className="">
						<div className="pb-10">
							<h3 className="pb-2 text-kimberly-600 text-center capitalize font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">hello again!</h3>
							<p className="text-center text-base lg:text-xl xl:text-xl text-gray-400">Sign in to continue</p>
						</div>
						<form action="POST" className="">
							<div className="mb-5">
								<label className="xl:text-xl lg:text-xl text-base mb-4 capitalize">email*</label>
								<input 
									onChange={(e) => {setEmail(e.target.value)}}
									className="w-full py-2 px-5 md:px-5 md:py-2 xl:py-3 xl:px-5 border border-tickle-me-pink-600 rounded-md focus:border-tickle-me-pink-600 focus:border-lg"
									type="email" placeholder="Enter your email" />
							</div>
							<div className="mb-10">
								<label className="xl:text-xl lg:text-xl text-base mb-4 capitalize">password*</label>
								<div className="relative">
									<input 
										onChange={handleChange}
										className="w-full py-2 px-5 md:px-5 md:py-2 xl:py-3 xl:px-5 border border-tickle-me-pink-600 rounded-md"
										type={showPassword ? 'text' : 'password'} placeholder="Enter your password" />
									<img 
				                      onClick={handleTogglePassword}
				                      id="showText"
				                      className="cursor-pointer absolute right-3 top-3"
				                      src={
				                          showPassword ? 
				                          'https://img.icons8.com/material-rounded/24/hide.png' 
				                          : 
				                          'https://img.icons8.com/ios-glyphs/24/visible--v1.png'
				                      }
				                    />
			                    </div>
							</div>
							<div>
								<button className="
									w-full
									py-2 px-5 md:px-5 md:py-2 xl:py-3 xl:px-10 text-white capitalize text-base lg:text-xl xl:text-xl border border-tickle-me-pink-600 bg-tickle-me-pink-600 rounded-md shadow-xl
									hover:shadow-none hover:border-tickle-me-pink-600 hover:bg-white hover:text-tickle-me-pink-600 transition
								">login</button>
							</div>
							<div className="mt-10 text-center">
								<p className="text-lg">Don't have an account? 
									<a className="underline text-kimberly-600 font-semibold capitalize" href="/sign-up">sign up</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login