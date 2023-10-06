import MainNavbar from "./component/MainNavbar";
import MainFooter from "./component/MainFooter";
import Screen from "./component/screens";

export default function App() {
	return (
		<div>
			<MainNavbar />
			<Screen />
			<MainFooter />
		</div>
	);
}