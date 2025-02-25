import { useState } from "react";

import MainPage from "./assets/MainPage.jsx"
import Stories from "./assets/Stories.jsx"
import StoriesContainer from "./assets/StoriesContainer.jsx"
import SideBar from "./assets/SideBar.jsx"
import RightBarContainer from "./assets/RightBarContainer.jsx"
import OptionsContainer from "./assets/OptionsContainer.jsx"
import Relacje from "./assets/Relacje.jsx"
import AddPostContainer from "./assets/AddPostContainer.jsx"
function App(){
  const [AddPostDisplayed, setAddPostDisplayed] = useState(false);
  const [PostList, setPostList] = useState([]);

    



  return (

    <>
    {AddPostDisplayed && <AddPostContainer  disablePost={()=>setAddPostDisplayed(false)} setPostList={setPostList}/>}
    <Relacje/>
    <RightBarContainer/>
    <SideBar enablePost = {setAddPostDisplayed}/>
    <StoriesContainer/>
    <MainPage PostList={PostList} setPostList={setPostList} Description = "" Username="Mateusz" Likes='3456' Comments='57' />
 
    </>
  )
}

export default App
