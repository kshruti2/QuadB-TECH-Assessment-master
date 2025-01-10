import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";
const Card = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShowData(res.data.map(item => item.show));
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="cards">
      {showData.map((show) => (
        <div className="card" key={show.id}>
          <img src={show.image?.medium} alt={show.name} className="card__img" />
          <div className="card__info">
            <span className="card__category">{show.type}</span>
            <h3 className="card__title">{show.name}</h3>
            <a href={`https://www.tvmaze.com/shows/${show.id}`} target="_blank" rel="noopener noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;


