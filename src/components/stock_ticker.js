import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockTicker = () => {
  const [stockPrices, setStockPrices] = useState([]);

  useEffect(() => {
    // Function to fetch stock prices
    const fetchStockPrices = () => {
      // Replace 'YOUR_API_KEY' with your actual Alpha Vantage API key
      const apiKey = 'YOUR_API_KEY';

      // Make an API call to get the latest stock prices
      axios
        .get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT,GOOGL,AAPL&apikey=${apiKey}`)
        .then((response) => {
          // Extract the stock prices from the response
          const prices = Object.values(response.data['Global Quote']);

          // Check if the prices went up or down since the last check
          const updatedStockPrices = prices.map((stock) => {
            const symbol = stock['01. symbol'];
            const currentPrice = parseFloat(stock['05. price']);
            const previousPrice = parseFloat(stock['08. previous close']);
            const priceColor = currentPrice > previousPrice ? 'green' : 'red';

            return { symbol, price: currentPrice, color: priceColor };
          });

          // Update the stock prices state
          setStockPrices(updatedStockPrices);
        })
        .catch((error) => {
          console.error('Error fetching stock prices:', error);
        });
    };

    // Fetch stock prices initially and get the previous prices
    fetchStockPrices();

    // Fetch stock prices every 5 minutes
    const interval = setInterval(fetchStockPrices, 300000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 0, backgroundColor: '#000', color: '#fff', padding: '10px', zIndex: 4}}>
      <marquee>
        {stockPrices.map((stock, index) => (
          <React.Fragment key={stock.symbol}>
            <span style={{ color: stock.color }}>
              {stock.symbol}: {stock.price}
            </span>
            {index !== stockPrices.length - 1 && <span> ✴ </span>}
          </React.Fragment>
        ))}
      </marquee>
    </div>
  );
};

export default StockTicker;
