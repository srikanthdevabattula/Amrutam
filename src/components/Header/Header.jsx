import { Link } from "react-router-dom";
import logo from '../../assets/image 45.png'
const Header = () => {
	return (
		<header className="w-full h-[94px] sm:h-[50px] esm:h-[40px] px-[104px] lg:px-[50px] md:px-[40px] sm:px-[5px] flex items-center justify-between bg-[#FFF7E2] ">
		<div className="flex items-center gap-[80px] lg:gap-[60px] md:gap-[40px] sm:gap-[15px]">
			<img src={logo} alt="" className="lg:w-[230px] md:w-[170px]  sm:w-[80px]"/>
			<div className="font-Ropa-Sans text-[20px] lg:text-[17px] md:text-[15px] sm:text-[10px] esm:text-[8px] flex gap-[40px] lg:gap-[35px] md:gap-[25px] sm:gap-[15px] esm:gap-[10px]">
				<Link to='/' className="text-[#474747] font-[600]">Home</Link>
				<Link to='/findDoctors' className="text-[#3A643B]  font-bold">Find Doctors</Link>
				<Link className="text-[#474747] font-[600]">About Us</Link>
			</div>
		</div>
		<div className="flex gap-[16px] sm:gap-[7px] esm:gap-[5px]">
			<button className="transition ease-in-out delay-150 border-[1px] border-[#3A643B] text-[#3A643B] font-Roboto font-medium hover:bg-[#3A643B] hover:text-[white] text-[24px] lg:text-[20px] md:text-[16px] sm:text-[10px] esm:text-[8px] rounded-[11px] p-[11px_37px] lg:p-[8px_30px] md:p-[7px_20px] sm:p-[5px_10px] hover:shadow-xl">Login</button>
			<button className=" transition ease-in-out delay-150 bg-[#3A643B] text-[white] font-Roboto font-medium text-[24px] lg:text-[20px] md:text-[16px] sm:text-[10px] esm:text-[8px] rounded-[11px] p-[11px_37px] lg:p-[8px_30px] md:p-[7px_20px] sm:p-[5px_10px] hover:bg-transparent hover:text-[#3A643B] border-[1px] hover:rounded-[11px] hover:shadow-xl border-[#3A643B]">Sign-up</button>
		</div>

		</header>
	);
};

export default Header;
