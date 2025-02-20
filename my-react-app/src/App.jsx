import MainPage from "./assets/MainPage.jsx"
import Stories from "./assets/Stories.jsx"
import StoriesContainer from "./assets/StoriesContainer.jsx"
import SideBar from "./assets/SideBar.jsx"
import RightBarContainer from "./RightBrContainer.jsx"


function App() {


  return (

    <>
    <RightBarContainer/>
    <SideBar/>
    <StoriesContainer/>
    <MainPage Description = "LOOOOL" Username="Mateusz" Likes='3456' Comments='57'/>
    <MainPage Description = "LOOOOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL" Username="Alicja" Likes='8797' Comments='759'/>
    <MainPage Description = "WTF" Username="Tomek" Likes='12' Comments='12'/>
    <MainPage Description = "SAAAAAAAAAASDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD" Username="Alicja" Likes='8797' Comments='759'/>




    </>
  )
}

export default App
