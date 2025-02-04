import React from "react";
import "./hotels.css"; // Import CSS for styling

const hotels = [
  {
    location: "Sackville (NB)",
    name: "Coastal Inn",
    price: 144,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/443278023.jpg?k=4f41939b6f01003f1f4df912f0ef43ea54f6446ef79276fde515433d87f32232&o=&hp=1",
    mapLink: "https://www.google.com/maps?q=Coastal+Inn+Sackville&hl=en",
  },
  {
    location: "Sackville (NB)",
    name: "Marshlands Inn",
    price: 103,
    image: "https://images.squarespace-cdn.com/content/v1/62a5eea7607a1c68fcbeb071/790f069c-8bff-45f4-8d84-2c605a1f8032/288844138_438905427779733_5704428353597586853_n.jpg",
    mapLink: "https://www.google.com/maps?q=Marshlands+Inn+Sackville&hl=en",
  },
  {
    location: "Sackville (NB)",
    name: "Tantramar Motel",
    price: 129,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/29047500.jpg?k=b7aec90af81040e6c456beae84d48f787069a47bd1d0b42cb16bae0acc55abff&o=&hp=1",
    mapLink: "https://www.google.com/maps?q=Tantramar+Motel+Sackville&hl=en",
  },
  {
    location: "Amherst (NS)",
    name: "Wandlyn Inn",
    price: 126,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/dd/ba/96/caption.jpg?w=700&h=-1&s=1",
    mapLink: "https://www.google.com/maps?q=Wandlyn+Inn+Amherst&hl=en",
  },
  {
    location: "Amherst (NS)",
    name: "Comfort Inn",
    price: 139,
    image: "https://www.choicehotels.com/hotelmedia/CA/NS/amherst/CN247/480/CN247ExteriorTemp0001_1.webp",
    mapLink: "https://www.google.com/maps?q=Comfort+Inn+Amherst&hl=en",
  },
  {
    location: "Amherst (NS)",
    name: "Super 8 by Wyndham",
    price: 141,
    image: "https://images.trvl-media.com/lodging/2000000/1090000/1086600/1086568/ab29b73c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    mapLink: "https://goo.gl/maps/isZ6Ed58APbx9ci5A",
  },
];

const HotelsSection = () => {
  return (
    <section className="hotels-section">
      <h2>Accommodation</h2>
      <div className="hotels-grid">
        {hotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p className="hotel-location">{hotel.location}</p>
              <p className="hotel-price">${hotel.price} per night</p>
              <a
                href={hotel.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-link"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelsSection;
