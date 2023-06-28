import ge3 from '../images/homepage/ge3.png'
import ge4 from '../images/homepage/ge4.png'
import ge6 from '../images/homepage/ge6.png'
import googleplay from '../images/homepage/googleplay.png'
import appstore from '../images/homepage/applestore.png'

const Download = () => {
	return (
		<>
			<div className="overflow-hidden md:h-96 lg:h-96 md:h-fit 
			grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 
				md:pb-40 md:pt-14 px-10 lg:py-40 lg:pb-96 xl:px-40 mx-auto
				bg-gradient-to-r from-yellow-200 to-tickle-me-pink-600">
				<div className="wow fadeInLeft -mt-20 -ml-20 md:-mt-60 md:ml-20 lg:-mt-72 lg:-ml-96">
					<img className="wow fadeInLeft -mt-72 -ml-20 sm:-mt-72 sm:-ml-20 md:-mt-0 md:-ml-40 lg:-mt-72 lg:-ml-20 xl:-mt-96 xl:-ml-52" src={ge6} alt="mockup" />
					<img className="wow fadeInLeft -mt-72 ml-24 sm:-mt-72 sm:ml-24 md:-mt-36 md:-ml-20 lg:ml-24 lg:-mt-80 xl:-mt-96" src={ge4} alt="mockup" />
					<img className="wow fadeInLeft -mt-72 ml-96 sm:-mt-72 sm:ml-96 md:-mt-52 md:ml-24 lg:-mt-96 lg:ml-96 xl:-mt-96 xl:ml-96" src={ge3} alt="mockup" />
				</div>
				<div className="-mt-72 pb-20 lg:pb-0 md:pb-0 xl:pb-0 md:mt-0 xl:mt-0 lg:mt-0 py-0 lg:py-auto pr-0 lg:pr-18 ">
					<h2 className="wow fadeInRight
						text-white text-center md:text-left lg:text-left text-3xl 
						lg:text-5xl capitalize pb-5 md:pb-10 font-semibold px-5 lg:px-0 md:px-0">
					Get the Grep app for your mobile devices</h2>
					<p className="wow fadeInRight text-white md:text-left text-center text-lg md:text-xl lg:text-xl xl:text-xl mb-10">Download the Grep app today and let us run those errands for you with in no time. It's free!</p>
					<div className="">
						<button className="wow fadeInRight shadow-xl hover:shadow-none transition mb-5 lg:mb-0 xl:mb-0 w-full py-1 px-5 md:w-3/6 lg:w-52 xl:w-56 text-left bg-tickle-me-pink-600 rounded-full mr-5 text-white text-base md:text-base xl:text-lg lg:text-lg">
							<div className="flex justify-center items-center">
								<img  className="w-10 pt-2 ml-2 mr-2 xl:mr-5 lg:mr-5 float-left " src={googleplay} />
								<span className=""><span className="md:text-lg xl:text-xl lg:text-xl">Download</span> for Android</span>
							</div>
						</button>
						<button className="wow fadeInRight shadow-xl hover:shadow-none transition w-full text-center py-1 px-5 md:w-2/5 lg:w-52 xl:w-56 text-left bg-white rounded-full text-tickle-me-pink-600 text-base md:text-base xl:text-lg lg:text-lg">
							<div className="flex justify-center items-center">
								<img className=" w-10 ml-2 mr-5 pt-2 float-left" src={appstore} />
								<span className=""><span className="text-xl">Download</span> for iOS</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Download