import "./Relacje.css"
function Relacje(){
    return(
        <div className="RelacjeContainer">
            <div className="Story">
                <div className="UpContainer">
                    <div className="Timer"></div>
                    <div className="StuffContainer">
                        <img src="src/assets/images/Example.png" alt="" />
                        <p>Usename</p>
                        <p>18 godz.</p>
                        <p className="Right">🔈</p>
                        <p className="Right">⏯️</p>
                        <p className="Right">...</p>
                    </div>
                </div>
                <div className="BottomContainer">
                    <input type="text" placeholder="Odpowiedz użytkownikowi..." />
                    <h2>❤️</h2>
                    <h2>👉</h2>
                </div>

            </div>


        </div>
    );
}
export default Relacje