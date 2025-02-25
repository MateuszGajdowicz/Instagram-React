import "./Sidebar.css";
import App from "../App.jsx";
function SideBar({enablePost}){
    return(
        
        <div className="SideBarContainer">
            <h1>Instagram</h1>
            <br />
            <h2> 🏠 Strona Główna</h2>
            <h2>🔍  Szukaj</h2>
            <h2>🧭  Eksploruj</h2>
            <h2>📹  Rolki</h2>
            <h2>📤  Wiadomości</h2>
            <h2>💗  Powiadomienia</h2>
            <h2 onClick={enablePost}>➕  Utwórz</h2>
            <h2>📊  Pulpit</h2>
            <h2>👤  Profil</h2>
            <h2>@ Threads</h2>
            <h2>... Więcej</h2>

        </div>
        

    );

}
export default SideBar