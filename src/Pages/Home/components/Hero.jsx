import herobg from '../../../assets/image 160.png'
import profile from '../../../assets/Ellipse 727.png'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
const Hero = () => {
	return (
		<section className=" px-[5%] py-[50px] md:py-[30px] sm:py-[20px]">
			<div className='w-[100%]'><img src={herobg} alt="" className='w-[100%] sm:h-[50px] rounded-t-[10px]'/></div>
			<div className='profile'>
				<div className='flex'>
					<img src={profile} alt="" className='profilepic'/>
				<div className='profiledetails'>
					<h1>Dr. Bruce Willis <span><RiVerifiedBadgeFill /></span></h1>
					<p>Gynecologist</p>
					<div className='rating'><span>4.2</span> <FaStar /> <FaStar /> <FaStar /><FaStar /></div>
				</div>
				</div>
				<div>
					<div className='insight'>
						<div className=''>
							<h3>Followers</h3>
							<h1>850</h1>
						</div>
						<div className=''>
							<h3>Following</h3>
							<h1>18K</h1>
						</div>
						<div className=''>
							<h3>Posts</h3>
							<h1>250</h1>
						</div>
					</div>
				</div>
				<div>
					<button className='BAPbtn'>Book an Appointment</button></div>
			</div>
		</section>
	);
};

export default Hero;
