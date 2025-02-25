import React, { useState, useEffect } from "react";
import OptionsContainer from "./OptionsContainer.jsx";
import "./MainPage.css";
function MainPage({ PostList, setPostList, Username, Likes, Comments }){



    const More = '...Więcej';
    const [Description, setDescription]= useState("");
    const [isExtended, setIsExtended] = useState(false);

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
    const [OptionsVisible, setOptionsVisible] = useState(false);
    function displayOptions(){
        setOptionsVisible(prev=>!prev);
      }

        

    return(
        <>
        {/*Input do usuniecia potem */}
 
        {PostList.map((element, index)=>
                <div className="Container" key={index}>
                <div className="PostContainer">
                    <div className="UpperContainer">
                        <img id ="ProfilePicture"src="src/assets/images/Example.png" alt="" />
                        <h3  id ="UserName">{Username}</h3>
                        <h3 style={{color:"grey", fontWeight:"light"}}>13 min.</h3>
                        <h3 onClick={displayOptions} id="Dots">...</h3>
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
                        <p style={{fontWeight:"bold"}}id ="LikeCount">Liczba polubień: {Likes}</p>
                        <p id="Description">
                            <strong>{Username}: </strong>{element} 
                            {Description.length > 20 && !isExtended && (
                                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={HandleMore}>{More}</span>
                            )}
                            
                        </p> 
                        <p style={{color:"grey"}}>Zobacz wszystkie komentarze: {Comments}</p>
                        <div className="CommentContainer">
                            <input placeholder="Dodaj komentarz..."id="AddComment" type="text" />
                            <p>Opublikuj</p>
                        </div>
                        {OptionsVisible && <OptionsContainer hideOptions={()=>setOptionsVisible(false)}/>}
                        
    
                    </div>
                </div>
    
    
    
    
            </div>)}

        </>

        
    );


}
export default MainPage 