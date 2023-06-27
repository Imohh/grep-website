import mockup from '../images/homepage/mockup.png'
import corn from '../images/homepage/corn.png'
import deliverytruck from '../images/homepage/delivery-truck.png'
import groceries from '../images/homepage/groceries.png'
import notification from '../images/homepage/notification.png'
import store from '../images/homepage/store.png'
import grapefruit from '../images/homepage/grapefruit.png'
import ge3 from '../images/homepage/ge3.png'
import ge4 from '../images/homepage/ge4.png'
import ge6 from '../images/homepage/ge6.png'
import ge7 from '../images/homepage/ge7.png'
import firstsection from '../images/homepage/first-section.png'
import secondsection from '../images/homepage/second-section.png'
import thirdsection from '../images/homepage/third-section.png'
import grafeman1 from '../images/homepage/grafe_man_1.png'
import grafeman2 from '../images/homepage/grafe_man_2.png'
import googleplay from '../images/homepage/googleplay.png'
import appstore from '../images/homepage/applestore.png'



const Homepage = () => {
	return (
		<>
			{/*HERO SECTION*/}
			<div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 px-5 pb-44 lg:px-10 xl:px-44 mx-auto">
				<div className="mt-10 md:mt-20 lg:mt-44 lg:mx-auto">
					<h1 className="text-xl lg:text-2xl text-tickle-me-pink-600 mb-5">Know the status of your order</h1>
					<h1 className="text-4xl lg:text-6xl font-semibold mb-6 text-port-gore-600">Track your order</h1>
					<p className="text-port-gore-600 mb-14 text-xl lg:text-2xl">Kndly fill in your order ID</p>
					<form className="flex items-center">
					  <input
					    type="text"
					    placeholder="Order ID"
					    className="w-full py-4 px-6 text-xl rounded-l-md border border-r-0 bg-white shadow-xl"
					  />
					  <button className="py-5 px-4 rounded-r-md bg-tickle-me-pink-600 text-white shadow-xl">Search</button>
					</form>
				</div>
				<div className="mt-20 sm:mt-20 md:mt-0 lg:mt-36">
					<div className="bg-kimberly-600  mr-20 h-20 w-20 relative rounded-full"></div>
					<div className="bg-tickle-me-pink-600 xl:float-right ml-20 h-4 w-4 relative rounded-full"></div>
					<div className="
					w-1/2 h-1/2 sm:w-1/3 sm:h-1/3 md:w-1/4 md:h-1/4 xl:w-1/6 xl:h-1/6 
					bg-yellow-500 rounded-full aspect-w-1 aspect-h-1
					p-36 lg:p-64 xl:p-80 relative mx-auto">
						<img className="
							mt-0 h-auto h-fit xl:h-max 
							absolute top-1/2 right-0 xl:-right-12 lg:-right-10 
							transform -translate-y-1/2"
   							src={mockup} alt="grep mockup" 
   						/>
					</div>
					<div className="bg-tickle-me-pink-600 relative float-right ml-20 h-8 w-8 rounded-full"></div>
					
				</div>
			</div>

			{/*SECOND SECCTION*/}
			<div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 py-40 px-10 pb-44 lg:px-10 xl:px-40 mx-auto">
				<div className="pl-0 2xl:pl-44 xl:mt-10">
					<h2 className="text-port-gore-600 text-center md:text-left lg:text-left text-3xl lg:text-5xl xl:text-5xl capitalize pb-5 md:pb-10 font-semibold px-5 lg:px-0 md:px-0">what the grep app does</h2>
					<p className="leading-10 text-port-gore-600 w-full xl:w-10/12 md:text-left lg:text-left text-center text-base lg:text-lg xl:text-lg md:text-xl mb-10">
					We are making you worry less about errands. School can be really stressful, let's help relive some stress 
					by taking care of your errands from food, returning items to friends and many more for just N200.</p>
					<button>about us</button>
				</div>


				<div className="flex sm:mt-10">
				  {/*<img
				    className="float-left mt-10 sm:mt-44 xl:mt-56 lg:mt-44 md:mt-40 
				     w-18 sm:w-10 md:w-18 lg:w-28 xl:w-28 2xl:w-1/2 h-auto md:h-fit lg:h-fit h-screen top-1/2 left-0 xl:left-18 lg:left-12"
				    src={grafeman1}
				    alt="grafe man"
				  />*/}
				  <img
				    className="float-left w-16 sm:w-28 md:w-24 lg:w-28 h-28 mt-20 lg:mt-40 md:mt-28 sm:mt-40"
				    src={grafeman1}
				    alt="grafe man"
				  />
				  <div className="h-fit">
				    <img
				      className="shadow-lg w-full lg:w-full h-fit h-auto mb-5"
				      src={firstsection}
				      alt="first icon"
				    />
				    <img
				      className="shadow-lg w-full h-auto mb-5"
				      src={secondsection}
				      alt="second icon"
				    />
				    <img
				      className="shadow-lg w-full h-auto"
				      src={thirdsection}
				      alt="third icon"
				    />
				  </div>
				  {/*<img
				    className="xl:mt-18 lg:mt-10 w-20 sm:w-28 md:w-18 w-18
				    lg:w-28 xl:w-28 2xl:w-11/12 h-auto md:h-fit lg:h-fit h-screen left-0 xl:left-1 lg:left-1"
				    src={grafeman2}
				    alt="grafe man"
				  />*/}
				  <img
				    className="w-56 float-right h-28 lg:mt-40 md:mt-20 sm:mt-40 mt-20"
				    src={grafeman2}
				    alt="grafe man"
				  />
				</div>
			</div>

			{/*THIRD SECTION*/}
			<div className="overflow-hidden h-screen grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 
				py-40 px-10 pb-44 lg:px-10 xl:px-40 mx-auto
				bg-gradient-to-r from-yellow-200 to-tickle-me-pink-600">
				<div className="-mt-80 -ml-80">
					<img className=" -mt-96 -ml-52" src={ge6} alt="mockup" />
					<img className="object-contain -mt-96" src={ge4} alt="mockup" />
					<img className="object-contain -mt-96 ml-96" src={ge3} alt="mockup" />
				</div>
				<div className="mt-10 py-auto pr-40">
					<h2 className="text-white text-center lg:text-left text-5xl capitalize pb-5 md:pb-10 font-semibold px-5 lg:px-0 md:px-0">
					Get the Grep app for your mobile devices</h2>
					<p className="text-white md:text-left text-center text-lg md:text-xl lg:text-xl xl:text-xl mb-10">Download the Grep app today and let us run those errands for you with in no time. It's free!</p>
					<button className="py-1 px-5 xl:w-56 text-left bg-tickle-me-pink-600 rounded-full mr-5 text-white text-lg">
						<img  className="w-10 pt-2 ml-2 mr-5 float-left " src={googleplay} /><span className="text-xl">Download</span> for Android
					</button>
					<button className="py-1 px-5 xl:w-56 text-left bg-white rounded-full text-tickle-me-pink-600 text-lg">
						<img className="w-10 ml-2 mr-5 pt-2 float-left" src={appstore} /><span className="mt-10"><span className="text-xl">Download</span> for iOS</span>
					</button>
				</div>
			</div>

			{/*FORTH SECTION*/}
			<div className="py-40">
				<h2 className="text-center text-5xl text-port-gore-600 capitalize pb-5 md:pb-10 font-semibold px-5 lg:px-0 md:px-0">why grep errands</h2>
				<p className="text-center text-base sm:text-xl text-port-gore-600 px-5 lg:px-0 md:px-0">Here are some of the reasons why you should use Grep Errands.</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-20 px-10 lg:px-20 md:px-20 sm:px-20">
					<div className="text-center mb-20 text-port-gore-600">
						<img className="mx-auto" src={corn} alt="corn" />
						<h3 className="capitalize text-xl sm:text-2xl py-5 font-semibold">Affordability</h3>
						<p className="text-xl w-full lg:w-11/12 mx-auto">With just N200 you can run errands with ease. We also give free errand after every 5 referral on our app.</p>
					</div>
					<div className="text-center mb-20 text-port-gore-600">
						<img className="mx-auto" src={store} alt="corn" />
						<h3 className="capitalize text-xl sm:text-2xl py-5 font-semibold">you can trust us</h3>
						<p className="text-lg w-full lg:w-11/12 mx-auto">We hire trusted errand persons to run these errands, we know how important trust is when it comes to business.</p>
					</div>
					<div className="text-center mb-20 text-port-gore-600">
						<img className="mx-auto" src={groceries} alt="corn" />
						<h3 className="capitalize text-xl sm:text-2xl py-5 font-semibold">efficient</h3>
						<p className="text-lg w-full lg:w-11/12 mx-auto">We make sure our customer's satisfaction is our goal. With that you can be rest assured that we will always deliver.</p>
					</div>
					<div className="text-center mb-20 text-port-gore-600">
						<img className="mx-auto" src={notification} alt="corn" />
						<h3 className="capitalize text-xl sm:text-2xl py-5 font-semibold">easy to use</h3>
						<p className="text-lg w-full lg:w-11/12 mx-auto">Our app is very straightforward to use, Once our users fill out the form an errand person is ready to attend to the order</p>
					</div>
					<div className="text-center mb-20 text-port-gore-600">
						<img className="mx-auto" src={deliverytruck} alt="corn" />
						<h3 className="capitalize text-xl sm:text-2xl py-5 font-semibold">24/7 support service</h3>
						<p className="text-lg w-full lg:w-11/12 mx-auto">We are always eager to get feedback from our users, Our helpline is active and ready to attend to you.</p>
					</div>
					<div className="text-center mb-20 text-port-gore-600">
						<img className="mx-auto"src={grapefruit} alt="corn" />
						<h3 className="capitalize text-xl sm:text-2xl py-5 font-semibold">customer orders</h3>
						<p className="text-lg w-full lg:w-11/12 mx-auto">I zonked argy-bargy pear shaped gutted mate say cheesed off pukka tickety boo fantastic.</p>
					</div>
				</div>
			</div>

			{/*FIFTH SECTION*/}
			<div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 px-10 pb-44 lg:px-10 xl:px-40 mx-auto">
				<div className="">
					<div className="
					w-1/2 h-1/2 sm:w-1/3 sm:h-1/3 md:w-1/4 md:h-1/4 xl:w-1/6 xl:h-1/6 bg-kimberly-600 rounded-full aspect-w-1 aspect-h-1
					p-36 lg:p-72 relative mx-auto">
						<div className="bg-red-500 mr-40 rounded-full">
							<img className="
								lg:w-2/3 xl:w-10/12 h-auto h-fit lg:h-fit 
								absolute top-1/2 left-0 xl:left-18 lg:left-12 
								transform -translate-y-1/2"
   								src={ge7} alt="grep mockup" 
   							/>
						</div>
					</div>
				</div>
				<div className="my-auto ml-0 lg:ml-20">
					<h2 className="
					mt-28 md:mt-0 capitalize pb-5 md:pb-10 
					px-5 lg:px-0 md:px-0
					lg:text-5xl md:text-3xl text-2xl
					md:text-left lg:text-left text-center font-semibold text-port-gore-600">We are ready to attend to your orders</h2>
					<p className="text-port-gore-600 md:text-left text-center text-lg md:text-xl mb-10">Our errand persons are always happy to receive your orders. 
					You can set reminders and we will be sure to remind you at all times. It's easy and straight forward.</p>
					<button className="mx-auto">get started</button>
				</div>
			</div>

			{/*SIXTH SECTION*/}
			<div className="grid grid-cols-2">
				<div>
					<h2>Join our small community today and start using the Grep app right away!</h2>
					<p>Say goodbye to stress, we are ready to be at your service at all times. 
					We are that junior brother or sister that goes on errands happily! Download the app and see for yourself.</p>
					<button>learn more</button>
				</div>
				<div>

				</div>
			</div>
		</>
	)
}

export default Homepage