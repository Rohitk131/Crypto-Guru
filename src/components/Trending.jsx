import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trending = () => {
  const [trendingCryptos, setTrendingCryptos] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.coingecko.com/api/v3/search/trending';

    axios.get(apiUrl)
      .then(response => setTrendingCryptos(response.data.coins))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Trending Cryptocurrencies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingCryptos.map(crypto => (
    <div key={crypto.item.id} className="bg-white p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">{crypto.item.name}</h2>
        <p className="text-gray-700">Symbol: {crypto.item.symbol}</p>
        <p className="text-gray-700">Market Cap Rank: {crypto.item.market_cap_rank}</p>
    </div>
    ))}
      </div>
    </div>
  );
};

export default Trending;
