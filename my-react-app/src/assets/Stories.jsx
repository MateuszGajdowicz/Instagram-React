function Stories(props){
    return(
        <div className="StoryContainer">
            <a href=""><img className='StoriesImage'src="src/assets/images/Example.png" alt="" /></a>
            <p id="StoryUsername">{props.username}</p>
        

        </div>
    );

}
export default Stories