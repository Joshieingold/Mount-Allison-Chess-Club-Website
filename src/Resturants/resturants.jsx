import React from "react";
import "./resturants.css"; // Import CSS

const restaurants = [
  {
    name: "Fener's Place",
    rating: "4.9★",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJ0GHS3dsO2zx9rgihDLJfZZ02uNGpFpD7g&s",
  },
  {
    name: "Oh Chicken!",
    rating: "4.7★",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisX3xZXK6oNszJ3FtVz89dDxZ23v4UofkhATxUtWPS7ICPOaHfzqbxgm6h9cdSG2qnxl3Wr4IIa-YtgfDYBYeQmVAW72KRFc9Oq57LMGjU7tEc-NDo3uhyphenhyphenCNAb-4qCFZEN1ZbsUL2bLUE/s2048/216564571_1256446081458442_496283126059981492_n.jpg",
  },
  {
    name: "Song's Chopsticks",
    rating: "4.5★",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/37/c3/9b/photo0jpg.jpg?w=1200&h=-1&s=1",
  },
  {
    name: "Goya's Pizza",
    rating: "4.8★",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7TyaeXlWxqMD6O5ebqRYQq5X3wpyQIMEsQ&s",
  },
  {
    name: "Painted Pony",
    rating: "4.4★",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/4s9cOroFe63MNQ3VSpY75A/348s.jpg",
  },
];

const Restaurants = () => {
  return (
    <section className="restaurants-container">
      <h2 className="title">Restaurants</h2>
      <div className="restaurants-grid">
        {restaurants.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
              <h3 className="restaurant-name">{restaurant.name}</h3>
              <p className="restaurant-rating">{restaurant.rating}</p>
              <a className="learn-more">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
