import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`}>
    <div className="w-52 shadow-xl hover:shadow-2xl p-8 flex flex-col items-center justify-center rounded-2xl transition-all duration-300 m-4 transform hover:scale-110">
      <img
        src={img}
        className="w-14 h-14 object-contain"
        alt={"Exchange"}
      />
      <h2 className="text-md truncate font-normal">{symbol}</h2>
      <p className="text-center truncate font-semibold text-lg">{name}</p>
      <p className="truncate font-bold text-green-500">{price ? `${currencySymbol}${price}` : "NA"}</p>
    </div>
  </Link>
);

export default CoinCard;
