import { useState } from "react";
import "./OptionsContainer.css";


function OptionsContainer({hideOptions}){

    return(
        <div className="OptionsContainer">
            <h2 style={{color:"red"}}>Zgłoś</h2>
            <h2 style={{color:"red"}}>Przestań obserwować</h2>
            <h2>Dodaj do ulubionych</h2>
            <h2>Przejdź do posta</h2>
            <h2>Udostępnij...</h2>
            <h2>Kopiuj link</h2>
            <h2>Kod osadzania</h2>
            <h2>Informacje o tym koncie</h2>
            <h2 onClick={hideOptions} style={{border:"0px"}}>Anuluj</h2>
            



        </div>

    );

}
export default OptionsContainer