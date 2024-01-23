import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <div className="max-w-screen-xl mx-auto">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="p-8">
            <div className="flex space-x-4">
              <input
                type="radio"
                id="inr"
                name="currency"
                value="inr"
                checked={currency === "inr"}
                onChange={() => setCurrency("inr")}
                className="form-radio"
              />
              <label htmlFor="inr">INR</label>
              <input
                type="radio"
                id="usd"
                name="currency"
                value="usd"
                checked={currency === "usd"}
                onChange={() => setCurrency("usd")}
                className="form-radio"
              />
              <label htmlFor="usd">USD</label>
              <input
                type="radio"
                id="eur"
                name="currency"
                value="eur"
                checked={currency === "eur"}
                onChange={() => setCurrency("eur")}
                className="form-radio"
              />
              <label htmlFor="eur">EUR</label>
            </div>
          </div>

          <div className="flex flex-wrap justify-evenly">
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </div>

          <div className="w-full overflow-x-auto p-8 flex">
            {btns.map((item, index) => (
              <button
                key={index}
                className="bg-black bg-opacity-90 text-white px-4 py-2 rounded"
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Coins;
