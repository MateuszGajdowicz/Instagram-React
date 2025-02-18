import React, { useState, useEffect } from "react";
function MainPage(props){
    const More = '...Więcej';
    const [Description, setDescription]= useState(props.Description);
    const [isExtended, setIsExtended] = useState(false);
    useEffect(()=>{
        if(!isExtended && Description.length>20){
            setDescription(Description.slice(0,20));
        }
        else{
            setDescription(props.Description);

    }}, [props.Description, isExtended]);


        function HandleMore(){
            setIsExtended(true);

        }
        

    return(
        <div className="Container">
            <div className="PostContainer">
                <div className="UpperContainer">
                    <img id ="ProfilePicture"src="src/assets/images/Example.png" alt="" />
                    <h3 id ="UserName">{props.Username}</h3>
                </div>
                <img id="Post" src="src/assets/images/Example.png" alt="" />
                
                <div className="PostFooter">
                    <div className="ActionContainer">
                        <p id="Heart">❤️</p>
                        <p id="Comment">📰</p>
                        <p id="Send">👉</p>
                        <p id="Save">📩</p>
                    </div>
                    <p style={{fontWeight:"bold"}}id ="LikeCount">Liczba polubień: {props.Likes}</p>
                    <p id="Description">
                        <strong>{props.Username}: </strong>{Description} 
                        {Description.length > 20 && !isExtended && (
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