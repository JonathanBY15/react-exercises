import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  // Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currIdx => (currIdx === total - 1 ? currIdx : currIdx + 1));
  }

  // Decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currIdx => (currIdx === 0 ? currIdx : currIdx - 1));
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {/* Conditionally hide the left arrow on the first image */}
        <i
          className={`bi bi-arrow-left-circle ${currCardIdx === 0 ? "hidden" : ""}`}
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {/* Conditionally hide the right arrow on the last image */}
        <i
          className={`bi bi-arrow-right-circle ${currCardIdx === total - 1 ? "hidden" : ""}`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
