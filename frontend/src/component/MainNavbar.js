import { useEffect, useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import logo from "../assets/img/logo.svg";
import CONFIG from '../config'
import CountdownTimer from "./CountdownTimer";

export default function MainNavbar() {
    const [clock, setClock] = useState("");

    useEffect(() => {
        setInterval(() => {
            let time = new Date();
            setClock(
                ('0' + time.getHours()).slice(-2)
                + ":" +
                ('0' + time.getMinutes()).slice(-2)
                + ":" +
                ('0' + time.getSeconds()).slice(-2)
            );
        }, 1000);
    });

    return (
        <Navbar style={{ backgroundColor: (CONFIG.darkmode ? "#333333" : "#ffffff") }} expand="lg" className={"shadow"}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} alt="Vegova logo"/>
                </Navbar.Brand>

                <CountdownTimer />

                <Row className="d-flex">
                    <h1 style={{color: (CONFIG.darkmode ? "#ffffff" : "#000000")}}>{clock}</h1>
                </Row>
            </Container>
        </Navbar>
    );
}