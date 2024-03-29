import { useState } from 'react'
import {Helmet} from "react-helmet";
import axios from "axios"
import {useNavigate, Link} from 'react-router-dom'
import mockup from '../../images/homepage/navigation-drawer.png'

const Register = () => {
	const [data, setData] = useState({
		fullName: "",
		email: "",
		password: ""	
	})
	const [error, setError] = useState("")
	const navigate = useNavigate();

	const handleChange = ({currentTarget: input}) => {
		setData({...data, [input.name]: input.value})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try{
			const url = 'https://express-server-tawny.vercel.app/api/users'
			const { data: res } = await axios.post(url, data)
			navigate("/login")
			console.log(res.message)
		} catch(error) {
			if(error.response && error.response.status >= 400 && error.response.status <= 500) {
				setError(error.response.data.message)
			}
		}		
	}

	return (
		<>
			<Helmet>
		        <title>Grep | Create your Grep account</title>
		        <meta name="description" content="Grep app Register page" />
		    </Helmet>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
				<div className="py-0 lg:py-20 md:py-20 xl:py-20 bg-tickle-me-pink-600 hidden xl:block lg:block md:block xl:visible lg:visible md:visible">
					<img className="w-2/5 mx-auto" src={mockup} alt="login screen" />
				</div>
				<div className=" my-auto h-fit px-10 py-40 xl:px-40">
					<div className="">
						<div className="pb-10">
							<h3 className="pb-2 text-kimberly-600 text-center capitalize font-semibold 
							text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Create an account!</h3>
						</div>
						<form onSubmit={handleSubmit} className="">
							<div className="mb-5">
								<label className="xl:text-xl lg:text-xl text-base mb-4 capitalize">full name*</label>
								<input 
									onChange={handleChange}
									value={data.fullName}
									name="fullName"
									className="w-full py-2 px-5 md:px-5 md:py-2 xl:py-3 xl:px-5 border border-tickle-me-pink-600 rounded-md focus:border-tickle-me-pink-600 focus:border-lg"
									type="text" placeholder="Enter your fullname" />
							</div>
							<div className="mb-5">
								<label className="xl:text-xl lg:text-xl text-base mb-4 capitalize">email*</label>
								<input 
									onChange={handleChange}
									value={data.email}
									name="email"
									className="w-full py-2 px-5 md:px-5 md:py-2 xl:py-3 xl:px-5 border border-tickle-me-pink-600 rounded-md focus:border-tickle-me-pink-600 focus:border-lg"
									type="text" placeholder="Enter your email" />
							</div>
							<div className="mb-10">
								<label className="xl:text-xl lg:text-xl text-base mb-4 capitalize">password*</label>
								<input 
									onChange={handleChange}
									value={data.password}
									name="password"
									className="w-full py-2 px-5 md:px-5 md:py-2 xl:py-3 xl:px-5 border border-tickle-me-pink-600 rounded-md"
									type="password" placeholder="Enter your password" />
							</div>
							{error && <div>{error}</div>}
							<div>
								<button className="
									w-full
									py-2 px-5 md:px-5 md:py-2 xl:py-3 xl:px-10 text-white capitalize text-base lg:text-xl xl:text-xl border border-tickle-me-pink-600 bg-tickle-me-pink-600 rounded-md shadow-xl
									hover:shadow-none hover:border-tickle-me-pink-600 hover:bg-white hover:text-tickle-me-pink-600 transition
								">sign up</button>
							</div>
							<div className="mt-10 text-center">
								<p className="text-lg">Already have an account? 
									<a className="underline text-kimberly-600 font-semibold capitalize" href="/login">log in</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Register