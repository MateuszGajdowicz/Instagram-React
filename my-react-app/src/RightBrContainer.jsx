import RightBar from "./assets/RightBar.jsx"
function RightBarContainer(){
    return(
        <>
        <div className="RightBarContainer">
            <RightBar/>
            <div className="MiddleBar">
                <p style={{color:"grey"}}>Propozycje dla ciebie</p>
                <p style={{fontWeight:"bold"}}>Zobacz wszystkich</p>
            </div>

            <RightBar/>
            <RightBar/>
            <RightBar/>
            <RightBar/>
        </div>

        </>
    );
}
export default RightBarContainer