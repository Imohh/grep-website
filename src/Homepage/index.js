import mockup from '../images/homepage/mockup.png'
import corn from '../images/homepage/corn.png'
import deliverytruck from '../images/homepage/delivery-truck.png'
import groceries from '../images/homepage/groceries.png'
import notification from '../images/homepage/notification.png'
import store from '../images/homepage/store.png'
import grapefruit from '../images/homepage/grapefruit.png'
import ge7 from '../images/homepage/ge7.png'

const Homepage = () => {
	return (
		<>
			{/*HERO SECTION*/}
			<div className="grid grid-cols-2">
				<div>
					<h1>Know the status of your order</h1>
					<h1>Track your order</h1>
					<p>Kndly fill in your order ID</p>
					<form>
						<input type="text" placeholder="Order ID" />
						<button>search</button>
					</form>
				</div>
				<div>
					<img src={mockup} alt="grep mockup" />
				</div>
			</div>

			{/*SECOND SECCTION*/}
			<div className="grid grid-cols-2">
				<div>
					<h2>what the grep app does</h2>
					<p>
					We are making you worry less about errands. School can be really stressful, let's help relive some stress 
					by taking care of your errands from food, returning items to friends and many more for just N200.</p>
					<button>about us</button>
				</div>
				<div>

				</div>
			</div>

			{/*THIRD SECTION*/}
			<div className="grid grid-cols-2">
				<div>

				</div>
				<div>
					<h2>Get the Grep app fo your mobile devices</h2>
					<p>Download the Grep app today and let us run those errands for you with in no time. It's free!</p>
					<button>Download for Android</button>
					<button>Download for iOS</button>
				</div>
			</div>

			{/*FORTH SECTION*/}
			<div>
				<h2>why grep errands</h2>
				<p>Here are some of the reasons why you should use Grep Errands.</p>
				<div className="grid grid-cols-3">
					<div>
						<img src={corn} alt="corn" />
						<h3>Affordability</h3>
						<p>With just N200 you can run errands with ease. We also give free errand after every 5 referral on our app.</p>
					</div>
					<div>
						<img src={store} alt="corn" />
						<h3>you can trust us</h3>
						<p>We hire trusted errand persons to run these errands, we know how important trust is when it comes to business.</p>
					</div>
					<div>
						<img src={groceries} alt="corn" />
						<h3>efficient</h3>
						<p>We make sure our customer's satisfaction is our goal. With that you can be rest assured that we will always deliver.</p>
					</div>
					<div>
						<img src={notification} alt="corn" />
						<h3>easy to use</h3>
						<p>Our app is very straightforward to use, Once our users fill out the form an errand person is ready to attend to the order</p>
					</div>
					<div>
						<img src={deliverytruck} alt="corn" />
						<h3>24/7 support service</h3>
						<p>We are always eager to get feedback from our users, Our helpline is active and ready to attend to you.</p>
					</div>
					<div>
						<img src={grapefruit} alt="corn" />
						<h3>customer orders</h3>
						<p>I zonked argy-bargy pear shaped gutted mate say cheesed off pukka tickety boo fantastic.</p>
					</div>
				</div>
			</div>

			{/*FIFTH SECTION*/}
			<div className="grid grid-cols-2">
				<div>
					<img src={ge7} alt="grep mockup" />
				</div>
				<div>
					<h2>We are ready to attend to your orders</h2>
					<p>Our errand persons are always happy to receive your orders. 
					You can set reminders and we will be sure to remind you at all times. It's easy and straight forward.</p>
					<button>get started</button>
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