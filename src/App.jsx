import { useState } from "react";

import "./App.css";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
function App() {
  const [index, setIndex] = useState(0);
  const { name, image, job, text, id } = people[index];

  // console.log(1 % 4);
  // console.log(2 % 4);
  // console.log(3 % 4);
  // console.log(4 % 4);
  // console.log(10 % 4);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // const nextPerson = () => {
  //   setIndex((currentIndex) => {
  //     const newIndex = currentIndex + 1;
  //     if (newIndex > people.length - 1) {
  //       return 0;
  //     }
  //     return newIndex;
  //     //return checkNumber(newIndex);
  //   });
  // };

  // const prevPerson = () => {
  //   setIndex((currentIndex) => {
  //     const newIndex = currentIndex - 1;
  //     if (newIndex < 0) {
  //       return people.length - 1;
  //     }
  //     return newIndex;
  //   });
  // };
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;

      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;

      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    //const newIndex = randomNumber % people.length;
    //setIndex(newIndex);
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div>
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          suprise me
        </button>
      </article>
    </main>
  );
}

export default App;
