export default function UnavailableComponent() {
    return (
        <div style={{
            backgroundColor: "#959595",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            fontSize: "30px"
        }}>
            <p className={"text-center align-self-center text-white"}>Content currently UNAVAILABLE <br /> <div style={{fontSize: "15px", textAlign: "center"}}>Please contact your local administrator</div></p>
        </div>
    )
}