import { useState } from "react";
import { Nav, Sidebar, Footer } from "../components";
import { Home } from "./index";

export const Layout = () => {
	const [sider, setSider] = useState(false);

	return (
		<>
			<Nav sider={sider} setSider={setSider} />
			<Sidebar sider={sider} close={() => setSider(false)} />
			<div onClick={() => setSider(false)}>
				<Home />
			</div>
			<Footer onClick={() => setSider(false)} />
		</>
	);
};
