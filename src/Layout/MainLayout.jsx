import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
	return (
		<main className="min-w-[320px]">
			<Header />
			<Outlet />
			
		</main>
	);
};

export default MainLayout;
