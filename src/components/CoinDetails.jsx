import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { server } from "../index";
import Chart from "./Chart";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;
      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;

  return (
    <div className="max-w-screen-xl mx-auto">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="border p-4">
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </div>

          <div className="flex p-4 overflow-x-auto space-x-4">
            {btns.map((i) => (
              <button
                key={i}
                disabled={days === i}
                onClick={() => switchChartStats(i)}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                {i}
              </button>
            ))}
          </div>

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

          <div className="p-16 space-y-4">
            <p className="text-sm opacity-70">
              Last Updated On{" "}
              {new Date(coin.market_data.last_updated).toGMTString()}
            </p>

            <img
              src={coin.image.large}
              className="w-16 h-16 object-contain"
              alt="Coin"
            />

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">{coin.name}</span>
                <span className="text-xl font-bold">
                  {currencySymbol}
                  {coin.market_data.current_price[currency]}
                </span>
                <span className="text-sm">
                  <span
                    className={`${
                      coin.market_data.price_change_percentage_24h > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {coin.market_data.price_change_percentage_24h}%
                  </span>
                  <span className="ml-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`${
                        coin.market_data.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      } h-4 w-4 inline`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.243 7.758a1 1 0 0 1 0-1.414L6.586 3.93a1 1 0 0 1 1.414 0L10 6.586l2.343-2.343a1 1 0 0 1 1.414 0l3.343 3.343a1 1 0 0 1 0 1.414L13.414 14l2.343 2.343a1 1 0 0 1 0 1.414 1 1 0 0 1-1.414 0L10 13.414l-2.343 2.343a1 1 0 0 1-1.414 0L3.243 9.172a1 1 0 0 1 0-1.414z"
                      />
                    </svg>
                  </span>
                </span>
              </div>
              <span className="text-2xl bg-black bg-opacity-80 text-white p-2 rounded">
                #{coin.market_cap_rank}
              </span>
            </div>

            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />

            <div className="w-full p-4">
              <Item title={"Max Supply"} value={coin.market_data.max_supply} />
              <Item
                title={"Circulating Supply"}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={"Market Cap"}
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
              />
              <Item
                title={"All Time Low"}
                value={`${currencySymbol}${coin.market_data.atl[currency]}`}
              />
              <Item
                title={"All Time High"}
                value={`${currencySymbol}${coin.market_data.ath[currency]}`}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Item = ({ title, value }) => (
  <div className="flex justify-between w-full my-4">
    <span className="font-bebas-neue tracking-widest">{title}</span>
    <span>{value}</span>
  </div>
);

const CustomBar = ({ high, low }) => (
  <div className="w-full">
    <div className="h-4 bg-teal-500">
      <div className="h-full bg-teal-300" style={{ width: "50%" }}></div>
    </div>
    <div className="flex justify-between w-full">
      <span className="bg-red-500 text-white px-2">{low}</span>
      <span className="text-sm">24H Range</span>
      <span className="bg-green-500 text-white px-2">{high}</span>
    </div>
  </div>
);

export default CoinDetails;
