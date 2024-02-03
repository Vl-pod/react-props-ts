import React from 'react';

interface ListingProps {
  items: {
    listing_id: number;
    url: string;
    MainImage: {
      url_570xN: string;
    };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
  }[];
}

const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              {item.MainImage && item.MainImage.url_570xN && (
                <img src={item.MainImage.url_570xN} alt={item.title} />
              )}
            </a>
          </div>
          <div className="item-details">
					<p className="item-title">
						{item.title && item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
					</p>
            <p className="item-price">
              {item.currency_code === 'USD'
                ? `$${item.price}`
                : item.currency_code === 'EUR'
                ? `€${item.price}`
                : `${item.price} ${item.currency_code}`}
            </p>
            <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const getQuantityLevel = (quantity: number): string => {
  if (quantity <= 10) {
    return 'level-low';
  } else if (quantity <= 20) {
    return 'level-medium';
  } else {
    return 'level-high';
  }
};

export default Listing;