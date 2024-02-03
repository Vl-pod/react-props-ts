import React from "react";
import Rating from "./Rating";
import "./App.css";

export default function App() {
  const [rating, setRating] = React.useState(0);

  return (
    <div className="app">
      {/* <h1>Custom Rating Component</h1>

      <div>
        <h3>Readonly</h3>
        <Rating count={5} value={5} />
      </div>

      <div>
        <h3>Half Star</h3>
        <Rating count={5} value={4.5} />
      </div> */}

      <div>
        <Rating
          count={5}
          value={rating}
          edit={true}
          onChange={(value) => setRating(value)}
        />
        <p>
          <b>Value: </b>
          {rating} stars
        </p>
      </div>
    </div>
  );
}
