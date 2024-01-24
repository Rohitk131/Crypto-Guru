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
      <h1 className="text-4xl font-bold mb-4 ml-10">Explore all <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500'>Trending Cryptocurrencies</span></h1>
      <div className='m-10'>
        {trendingCryptos.map((crypto, index) => (
          <div key={crypto.item.id} className="bg-white p-4 rounded-2xl shadow-2xl mb-4 flex items-center transition-transform transform hover:scale-105">
            <span className="text-xl font-semibold mr-2">{index + 1}.</span>
            <img src={crypto.item.small} alt={crypto.item.name} className="w-10 h-10 mr-2 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold mb-2">{crypto.item.name}</h2>
              <p className="text-gray-700">
                Symbol: {crypto.item.symbol}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Market Cap Rank: {crypto.item.market_cap_rank}
              </p>
            </div>
            <p className="text-blue-500 ml-auto text-2xl font-semibold" dangerouslySetInnerHTML={{__html: crypto.item.data.price}}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
