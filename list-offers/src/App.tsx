import React from 'react';
import Listing from './Listing';
import itemsData from './Data.json';

interface Item {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

const App: React.FC = () => {
  const items = itemsData as Item[];

  return (
    <div className="app">
      <Listing items={items} />
    </div>
  );
}

export default App;