function Stories(props){
    return(
        <div className="StoryContainer">
            <img className='StoriesImage'src="src/assets/images/Example.png" alt="" />
            <p id="StoryUsername">{props.username}</p>
        

        </div>
    );

}
export default Stories