import Stories from "./Stories.jsx";
function StoriesContainer(){
    return(

    <>
    <div className="ForYouText">
        <h3>Dla Ciebie</h3>
        <h3>Obserwowani</h3>
    </div>

    <div className="ArrowContainer">
        <button id="left" className="Arrows">{"<"}</button>
        <div className="StoriesContainer">
           
            <Stories username="Jezus"/>
            <Stories username="LMAO"/>
            <Stories username="LMAO"/>
            <Stories username="LMAO"/>
            <Stories username="LMAO"/>
            <Stories username="LMAO"/>
            <Stories username="Jezus"/>
            <Stories username="Jezus"/>
            <Stories username="Jezus"/>

        </div>  
        <button id = "right"className="Arrows">{">"}</button>

    </div>
    </>
    );


}
export default StoriesContainer