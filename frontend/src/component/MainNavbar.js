import logoUrl from "../assets/img/logo.svg";
import CountdownTimer from "./barElements/CountdownTimer";
import Clock from "./barElements/clock";
import Logo from "./barElements/logo"

export default function MainNavbar() {
    return (
        <div className="main_nav">
            {/* <img src={logo} alt="Vegova logo" className="logo"/> */}
            {/* <div className="logo" style={{backgroundImage:"url("+logo+")"}}></div> */}
            <Logo logoUrl={logoUrl}/>
            <CountdownTimer />
            <Clock />
        </div>
    );
}