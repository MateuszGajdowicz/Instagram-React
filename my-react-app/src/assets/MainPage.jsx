function MainPage(props){
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
                        <strong>{props.Username}: </strong>loremloremLorem ipsum dolor sit amlorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus sunt, velit magnam atque ab architecto, vero pariatur laudantium qui labore culpa similique sequi impedit, earum enim rerum quidem fugiat.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a inventore quidem quia doloremque. Consequatur sunt amet similique dolore qui. Facere mollitia eius minima odio saepe numquam earum culpa voluptate? et consectetur adipisicing elit. Explicabo, voluptatem et beatae ducimus molestias iusto. Quam mollitia dolor molestiae sed nobis, maiores, nihil adipisci facilis enim unde iusto quas tenetur.
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