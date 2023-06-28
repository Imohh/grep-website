import mockup from '../images/homepage/navigation-drawer.png'

const Login = () => {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
				<div className="py-20">
					<img className="xl:w-2/5 mx-auto" src={mockup} alt="login screen" />
				</div>
				<div className="bg-tickle-me-pink-600 h-screen py-20 xl:px-40 my-auto">
					<div>
						<form className="">
							<div className="mb-5">
								<label className="text-xl mb-4 capitalize">email*</label>
								<input 
									className="w-full py-3 px-10"
									type="text" placeholder="Enter your name" />
							</div>
							<div className="mb-5">
								<label className="text-xl mb-4 capitalize">password*</label>
								<input 
									className="w-full py-3 px-10"
									type="text" placeholder="Enter your name" />
							</div>
							<div>
								<button className="
									w-full
									py-3 text-tickle-me-pink-600 capitalize text-xl px-10 border border-tickle-me-pink-600 bg-white rounded-md shadow-xl
									hover:shadow-none hover:border-white hover:bg-tickle-me-pink-600 hover:text-white transition
								">login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login