function Stories(props){
    return(
        <div className="StoriesContainer">
            <img className='StoriesImage'src="src/assets/images/Example.png" alt="" />
            <p id="StoryUsername">{props.username}</p>
        

        </div>
    );

}
export default Stories