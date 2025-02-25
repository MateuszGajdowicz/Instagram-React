import "./Relacje.css"
function Relacje(){
    return(
        <div className="RelacjeContainer">
            <div className="LeftStories">
                <div className="SideStory">
                    <img src="src/assets/images/Example.png" alt="" />
                </div>
                <div className="SideStory">
                    <img src="src/assets/images/Example.png" alt="" />
                </div>
            </div>
            <h1 id="Logo">Instagram</h1>
            <h1 id="X">X</h1>
            <div className="Story">
                <div className="UpContainer">
                    <div className="Timer"></div>
                    <div className="StuffContainer">
                        <img src="src/assets/images/Example.png" alt="" />
                        <p>Usename</p>
                        <p>18 godz.</p>
                        <div className="ps">
                            <p className="Right">🔈</p>
                            <p className="Right">⏯️</p>
                            <p className="Right">...</p>
                        </div>
                    </div>
                </div>
                <div className="BottomContainer">
                    <input type="text" placeholder="Odpowiedz użytkownikowi..." />
                    <h2>❤️</h2>
                    <h2>👉</h2>
                </div>
                


            </div>
            <div className="RightStories">
                <div className="SideStory">
                    <img src="src/assets/images/Example.png" alt="" />
                </div>
                <div className="SideStory">
                    <img src="src/assets/images/Example.png" alt="" />
                </div>
            </div>


        </div>
    );
}
export default Relacje