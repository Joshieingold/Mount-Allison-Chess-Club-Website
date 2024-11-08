import "./resturants.css";

const Resturants = () => {
    return (    
        <div className="resturantContainer">
            <h1 className="title">Resturants</h1>
            <div className="cardContainer">
                <div className="resturantCard">
                    <h3 className="resturantName">Fener's Place</h3>
                    <img className="resturantImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJ0GHS3dsO2zx9rgihDLJfZZ02uNGpFpD7g&s"></img>
                    <p className="rating">4.9★</p>
                    <button className="learnMoreButton">Learn More!</button>
                </div>
                <div className="resturantCard">
                    <h3 className="resturantName">Oh Chicken!</h3>
                    <img className="resturantImg" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisX3xZXK6oNszJ3FtVz89dDxZ23v4UofkhATxUtWPS7ICPOaHfzqbxgm6h9cdSG2qnxl3Wr4IIa-YtgfDYBYeQmVAW72KRFc9Oq57LMGjU7tEc-NDo3uhyphenhyphenCNAb-4qCFZEN1ZbsUL2bLUE/s2048/216564571_1256446081458442_496283126059981492_n.jpg"></img>
                    <p className="rating">4.7★</p>
                    <button className="learnMoreButton">Learn More!</button>
                </div>
                <div className="resturantCard">
                    <h3 className="resturantName">Song's Chopsticks</h3>
                    <img className="resturantImg" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/37/c3/9b/photo0jpg.jpg?w=1200&h=-1&s=1"></img>
                    <p className="rating">4.5★</p>
                    <button className="learnMoreButton">Learn More!</button>
                </div>
                <div className="resturantCard">
                    <h3 className="resturantName">Goya's Pizza</h3>
                    <img className="resturantImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7TyaeXlWxqMD6O5ebqRYQq5X3wpyQIMEsQ&s"></img>
                    <p className="rating">4.8★</p>
                    <button className="learnMoreButton">Learn More!</button>
                </div>
                <div className="resturantCard">
                    <h3 className="resturantName">Painted Pony</h3>
                    <img className="resturantImg" src="https://s3-media0.fl.yelpcdn.com/bphoto/4s9cOroFe63MNQ3VSpY75A/348s.jpg"></img>
                    <p className="rating">4.4★</p>
                    <button className="learnMoreButton">Learn More!</button>
                </div>
            </div>

        </div>
    );
};

export default Resturants;