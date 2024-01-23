import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <div className="max-w-screen-xl mx-auto">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap justify-around">
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <div className="w-52 h-52 flex flex-col items-center justify-center shadow-xl p-8 rounded-2xl transition-all duration-300 m-4 hover:shadow-2xl hover:glow transform hover:scale-110">
      <img
        src={img}
        className="w-17 h-17 object-contain mb-2"
        alt={"Exchange"}
      />
      <h2 className="text-md truncate mb-2">{rank}</h2>
      <p className="text-center truncate font-semibold text-lg">{name}</p>
    </div>
  </a>
);


export default Exchanges;
