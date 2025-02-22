import React, { useState, useEffect } from "react";
function MainPage(props){
    const More = '...Więcej';
    const [Description, setDescription]= useState(props.Description);
    const [isExtended, setIsExtended] = useState(false);
    useEffect(()=>{
        if(!isExtended && Description.length>20){
            setDescription(props.Description.slice(0,20));
        }
        else{
            setDescription(props.Description);

    }}, [props.Description, isExtended]);


        function HandleMore(){
            setIsExtended(true);

        }
    const [heart, setHeart] = useState("❤️")
    const [heartVisible, setHeartVisible] = useState(false);

    function ChangeHeart(){
        if(heart==="❤️"){
            setHeart("💗");
            setHeartVisible(true);
            setTimeout(()=>{
                setHeartVisible(false);
            },1500)
            
        }
        else{
            setHeart("❤️");
        }
   
    }

        

    return(
        <div className="Container">
            <div className="PostContainer">
                <div className="UpperContainer">
                    <img id ="ProfilePicture"src="src/assets/images/Example.png" alt="" />
                    <h3  id ="UserName">{props.Username}</h3>
                    <h3 style={{color:"grey", fontWeight:"light"}}>13 min.</h3>
                    <h3 id="Dots">...</h3>
                </div>
                <img id="Post" src="src/assets/images/Example.png" alt="" />
                {heartVisible &&
                <h1 id="heartIcon">💗</h1>}
                <div className="PostFooter">
                    <div className="ActionContainer">
                        <p onClick={()=>ChangeHeart()}id="Heart">{heart}</p>
                        <p id="Comment">📰</p>
                        <p id="Send">👉</p>
                        <p id="Save">📩</p>
                    </div>
                    <p style={{fontWeight:"bold"}}id ="LikeCount">Liczba polubień: {props.Likes}</p>
                    <p id="Description">
                        <strong>{props.Username}: </strong>{Description} 
                        {props.Description.length > 20 && !isExtended && (
                            <span style={{ color: 'blue', cursor: 'pointer' }} onClick={HandleMore}>{More}</span>
                        )}
                        
                    </p>
                    <p style={{color:"grey"}}>Zobacz wszystkie komentarze: {props.Comments}</p>
                    <div className="CommentContainer">
                        <input placeholder="Dodaj komentarz..."id="AddComment" type="text" />
                        <p>Opublikuj</p>
                    </div>

                </div>
            </div>




        </div>

        
    );


}
export default MainPage 