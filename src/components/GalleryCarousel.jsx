import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import "./GalleryCarousel.css";

import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";

function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "dddd",
      description: "Texte werden einerseits durch pragmatische, also situationsbezogene, „textexterne“ Merkmale, andererseits durch sprachliche, „textinterne“ Merkmale bestimmt.[1] In der Sprach- und Kommunikationswissenschaft existieren viele verschiedene Textdefinitionen nebeneinander, die anhand verschiedener Textualitäts­kriterien Texte und „Nicht-Texte“ voneinander trennen. ",
      img: img1,
    },
    {
      title: "dddd",
      description: "Texte werden einerseits durch pragmatische, also situationsbezogene, „textexterne“ Merkmale, andererseits durch sprachliche, „textinterne“ Merkmale bestimmt.[1] In der Sprach- und Kommunikationswissenschaft existieren viele verschiedene Textdefinitionen nebeneinander, die anhand verschiedener Textualitäts­kriterien Texte und „Nicht-Texte“ voneinander trennen. ",
      img: img2,
    },
    {
      title: "dddd",
      description: "Texte werden einerseits durch pragmatische, also situationsbezogene, „textexterne“ Merkmale, andererseits durch sprachliche, „textinterne“ Merkmale bestimmt.[1] In der Sprach- und Kommunikationswissenschaft existieren viele verschiedene Textdefinitionen nebeneinander, die anhand verschiedener Textualitäts­kriterien Texte und „Nicht-Texte“ voneinander trennen. ",
      img: img3,
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  

  return (
    <section className="gallery-carousel-container">
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {/* we use map to grab an item from the array which is created above */}
          {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        </div>
      </div>
    </section>
  );
}

export default GalleryCarousel;
