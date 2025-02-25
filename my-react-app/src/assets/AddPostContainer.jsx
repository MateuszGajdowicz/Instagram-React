import { createContext, useState } from "react";
import "./AddPostContainer.css";
import App from "../App.jsx";
function AddPostContainer({disablePost, setPostList}){

    const [image, setImage] = useState();

    function handleImageUpload(event){
        const file = event.target.files[0];
        if(file){
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl)        
        }
    }


    function createPost(){
        let PostValue = document.getElementById("DescriptionInput").value;
        if(PostValue!=""){
            setPostList(p=>[...p, PostValue]);
            document.getElementById("DescriptionInput").value='';
            disablePost();


        }

    }

    return(
        <div className="AddPostContainer">
            <div className="UpContainer">
                <h3 onClick={disablePost}>X</h3>
                <h3>Utwórz nowy post</h3>
                <h3 onClick={createPost} style={{color:"blue"}}>Udostępnij</h3>
            </div>
            <div className="ImgContainer" style={{ backgroundImage: image ? `url(${image})` : "none"}}>
                <img src="" alt="" />
                <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
            <div className="SettingsContainer">
                <div className="Username">
                    <img src="src/assets/images/Example.png" alt="" />
                    <h2>Username</h2>
                </div>
                <input type="text" id="DescriptionInput" placeholder="Dodaj opis" />
                <h4>Dodaj lokalizację</h4>
                <h4>Dodaj współtwóroców</h4>
                <h4>Dostępność</h4>
                <h4>Ustawienia zaawansowane</h4>
            </div>


        </div>
    );

}
export default AddPostContainer