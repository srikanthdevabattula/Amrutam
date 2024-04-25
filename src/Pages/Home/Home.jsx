import AboutMe from "./components/AboutMe";
import Concerns from "./components/Concerns";
import Date from "./components/Date";
import calender from '../../assets/calender.png'
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import ModeOfSession from "./components/ModeOfSession";
import Specialize from "./components/Specialize";
import WorkExp from "./components/WorkExp";
import "./home.css";
import Time from "./components/Time";
const Home = () => {
	return (
		<section >
			
			<Hero />
			<div className="flex md:flex-col px-[5%] pb-[20px] gap-[40px]">
				<div className="w-[50%] md:w-[100%] space-y-[20px] ">
					<AboutMe/>
					<Specialize/>
					<Concerns/>
					<WorkExp/>
					<Featured/>
				</div>
				<div className="w-[50%]   md:w-[100%] ">
					<div className="space-y-[40px] border-[1px] rounded-[29px] p-[20px]">
					<div className="border-[1px] border-[#E2E2E2] rounded-[15px] p-[10px_20px] flex justify-between">
						<h1 className="font-poppins font-semibold text-[20px] lg:text-[16px] md:text-[14px] sm:text-[11px] esm:text-[9px]">Appointment Fee</h1>
						<h1 className="text-[#3A643B] font-Roboto text-[20px] lg:text-[16px] sm:text-[13px] esm:text-[9px] font-semibold">₹699.00</h1>
					</div>
<ModeOfSession />
<div>
<div className='flex items-center mb-[40px] sm:mb-[20px]'>
            <h1 className='text-[20px] lg:text-[16px] sm:text-[13px] font-bold font-Roboto mr-3'>Pick a Time slot</h1>
            <hr className='flex-1 mr-2 border-[1px] border-[#D4D4D4]'/>
			<img src={calender} alt="img" className="sm:w-[30px]"/>
        </div>
	<div className="border-[1px] flex items-center  p-[20px_50px] lg:p-[20px_30px] sm:p-[20px_30px_10px_30px] esm:p-[20px_30px_0px_30px]  rounded-[21px] "><Date/></div>
					</div>
					<Time/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
