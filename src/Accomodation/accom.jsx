import React, { useState } from "react";
import "./accom.css";
const accommodations = [
    {
        name: "Coastal Inn",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/443278023.jpg?k=4f41939b6f01003f1f4df912f0ef43ea54f6446ef79276fde515433d87f32232&o=&hp=1", // Replace with actual image path
        description: "Affordable rates, quality rooms and easy booking process make us a favorite with travellers through out the Maritimes.",
        price: "$120 per night",
        location: "15 Wright St, Sackville, NB E4L 4P8",
        google: "https://coastalinns.com/sackville/"
    },
    {
        name: "Marshlands Inn",
        image: "https://images.squarespace-cdn.com/content/v1/62a5eea7607a1c68fcbeb071/790f069c-8bff-45f4-8d84-2c605a1f8032/288844138_438905427779733_5704428353597586853_n.jpg", // Replace with actual image path
        description: "Many of the sights of Sackville are within walking distance. It is a perfect place to relax, replenish and retire during your stay in Sackville. ",
        location: "55 Bridge Street, Sackville, NB E4L 3N8",
        price: "$103 per night",
        google: "https://marshlandsinn.com/"
    },
    {
        name: "Tantramar Motel",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/29047500.jpg?k=b7aec90af81040e6c456beae84d48f787069a47bd1d0b42cb16bae0acc55abff&o=&hp=1", // Replace with actual image path
        description: "Conveniently located off Highway 2, this New Brunswick motel has simply furnished rooms with cable TV and free Wi-Fi.",
        price: "$129 per night",
        location: "4 Robson Ave, Sackville, NB E4L 4H8",
        google: "https://www.google.com/maps/place/Tantramar+Motel/@45.8966234,-64.4136084,13z/data=!4m11!3m10!1s0x4b5f50f5bed0c3eb:0x885fc9fb15c047f4!5m3!1s2023-03-18!4m1!1i2!8m2!3d45.8958193!4d-64.3497037!15sCgZIb3RlbHNaCCIGaG90ZWxzkgEFbW90ZWzgAQA!16s%2Fg%2F1tqnl6dq?coh=164777&entry=tt"
    },
    {
        name: "Wandlyn Inn",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/dd/ba/96/caption.jpg?w=700&h=-1&s=1",
        description: "Conveniently located near the New Brunswick/Nova Scotia Border",
        price: "$126 per night",
        location: "1539 Southampton Rd, Amherst, NS B4H 3Y4",
        google: "https://wandlyn.ca/"
    },
    {
        name: "Comfort Inn",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/598939110.jpg?k=6c3fa5cd10a25794121cfddf12fc246fcef3f2bed1d991389c811d1db376c8fc&o=&hp=1",
        description: "The Comfort Inn offers welcoming Amherst, NS accommodations complete with friendly staff and plenty of free amenities.",
        price: "$139 per night",
        location: "143 S Albion St, Amherst, NS B4H 2X2",
        google: "https://www.choicehotels.com/en-ca/nova-scotia/amherst/comfort-inn-hotels/cn247"
    },
    {
        name: "Super 8",
        image: "https://images.trvl-media.com/lodging/2000000/1090000/1086600/1086568/ab29b73c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        description: "Eco-friendly hotel by the Anne Murray Centre and Amherst Centre. Just off Trans-Canadian Highway 104 at Exit 4 on Ancestral Drive.",
        price: "$141 per night",
        location: "40 Ancestral Dr, Amherst, NS B4H 4W6",
        google: "https://www.wyndhamhotels.com/super-8/amherst-nova-scotia/super-8-amherst-ns/overview?iata=00093763&cid=PS:uhyvslj08xbvgwl&gad_source=1&gclid=Cj0KCQjwmOm3BhC8ARIsAOSbapXIKrbUCyDx_j0xbtl8uNtGUtj3LqqNhZ4BuRmYT09otYvTdKXAuIkaAo0kEALw_wcB&gclsrc=aw.ds"
    }
        

];

const Accomodation = () => {
    const [selectedAccommodation, setSelectedAccommodation] = useState(accommodations[0]);

    return (
        <section id="accomodation">
            <h1 className="sectionTitle">Accommodation</h1>

            <div className="accom-container">

                <div className="sidebar">
                    {accommodations.map((accom, index) => (
                        <button
                            key={index}
                            className={`sidebar-item ${selectedAccommodation.name === accom.name ? "active" : ""
                                }`}
                            onClick={() => setSelectedAccommodation(accom)}
                        >
                            {accom.name}
                        </button>
                    ))}
                </div>


                <div
                    className="info-section"
                    style={{ backgroundImage: `url(${selectedAccommodation.image})` }}
                >

                    <div className="overlay-box">
                        <h2>{selectedAccommodation.name}</h2>
                        <p>{selectedAccommodation.description}</p>
                        <p>{selectedAccommodation.location}</p>
                        <span className="price">{selectedAccommodation.price}</span><br/><br/>
                        <a href={selectedAccommodation.google }><button className="linkBtn">See More</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accomodation;
