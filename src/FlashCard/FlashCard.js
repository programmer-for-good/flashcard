import React, { useState,useEffect } from 'react';
import './Flash.css';
import axios from 'axios';






function Flashcard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards,setCards] = useState({});
  const [showDefinition, setShowDefinition] = useState(false);

  // const shuffleCards = () => {
  //   const shuffled = [...cards].sort(() => Math.random() - 0.5);
  //   setCards(shuffled);
  //   setCurrentIndex(0);
  //   setShowDefinition(false);
  // };

  const moveLeft = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
    setShowDefinition(false);
  };

  const moveRight = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
    setShowDefinition(false);
  };

  const handleCardClick = () => {
    setShowDefinition(!showDefinition);
  };

  // const handleInputChange = (event) => {
  //   const index = parseInt(event.target.name);
  //   const { value } = event.target;
  //   const updatedCards = [...cards];
  //   updatedCards[index] = {
  //     term: value.split(':')[0],
  //     definition: value.split(':')[1],
  //   };
  //   setCards(updatedCards);
  // };



  useEffect(() => {
    GetCard(setCards);
    // setCards(getData)
  }, []);

  return (
    <div className="flashcard-container">
      <div className={`flashcard ${showDefinition ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="front">
          <div className="term">{cards[currentIndex]?.Term}</div>
        </div>
        <div className="back">
          <div className="definition">{cards[currentIndex]?.Definition}</div>
        </div>
      </div>
      <div className="controls">
        {/* <button onClick={shuffleCards}>Shuffle Cards</button> */}
        <button onClick={moveLeft}>Left</button>
        <button onClick={moveRight}>Right</button>
      </div>
      {/* <div className="inputs">
        {cards.map((card, index) => (
          <input
            key={index}
            type="text"
            name={index}
            value={`${card.term}:${card.definition}`}
            onChange={handleInputChange}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Flashcard;


function GetCard(setCards) {
  axios.get('http://localhost:8081/cards')
    .then(response => {
      setCards(response.data);
      // return response.data
    })
    .catch(error => {
      console.log(error);
    });
}
// function Flashcard(props) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cards, setCards] = useState(l);
//   const [showDefinition, setShowDefinition] = useState(false);

//   const shuffleCards = () => {
//     const shuffled = [...cards].sort(() => Math.random() - 0.5);
//     setCards(shuffled);
//     setCurrentIndex(0);
//   };

//   const moveLeft = () => {
//     setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
//   };

//   const moveRight = () => {
//     setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
//   };



//   const handleCardClick = () => {
//     setShowDefinition(!showDefinition);
//   };
//   // const handleInputChange = (event) => {
//   //   const index = parseInt(event.target.name);
//   //   const { value } = event.target;
//   //   const updatedCards = [...cards];
//   //   updatedCards[index] = {
//   //     term: value.split(':')[0],
//   //     definition: value.split(':')[1],
//   //   };
//   //   setCards(updatedCards);
//   // };

//   return (
//     <div className="flashcard">

//       <div className={`flashcard ${showDefinition ? 'flipped' : ''}`} onClick={handleCardClick}>
//         <div className="front">
//           <div className="term">{cards[currentIndex].term}</div>
//         </div>
//         <div className="back">
//           <div className="definition">{cards[currentIndex].definition}</div>
//         </div>
//       </div>
//       {/* <div className="term">{cards[currentIndex].term}</div>
//       <div className="definition">{cards[currentIndex].definition}</div> */}
//       <div className="controls">
//         <button onClick={shuffleCards}>Shuffle Cards</button>
//         <button onClick={moveLeft}>Left</button>
//         <button onClick={moveRight}>Right</button>
//       </div>
//       {/* <div className="inputs">
//         {cards.map((card, index) => (
//           <input
//             key={index}
//             type="text"
//             name={index}
//             value={`${card.term}:${card.definition}`}
//             onChange={handleInputChange}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// }

// export default Flashcard;




// import React, { useState } from 'react';
// import './Flash.css';

// function Flashcard(props) {
//   const [isTerm, setIsTerm] = useState(true);

//   const handleClick = () => {
//     setIsTerm(!isTerm);
//   }

//   return (
//     <div className="card" onClick={handleClick}>
//       <h2 className="card-title">{isTerm ? props.word : props.definition}</h2>
//       <p className="card-text">{isTerm ? props.definition : props.word}</p>
//     </div>
//   );
// }

// export default Flashcard;






// import React from 'react';
// import "./Flash.css"

// function Flashcard(props) {
//   return (
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title">{props.term}</h5>
//         <p className="card-text">{props.definition}</p>
//       </div>
//     </div>
//   );
// }

// export default Flashcard;






// // import React from 'react';
// // import { Card, CardContent, Typography } from '@material-ui/core';

// // function Flashcard(props) {
// //   return (
// //     <Card>
// //       <CardContent>
// //         <Typography variant="h5" component="h2">
// //           {props.term}
// //         </Typography>
// //         <Typography color="textSecondary">
// //           {props.definition}
// //         </Typography>
// //       </CardContent>
// //     </Card>
// //   );
// // }

// // export default Flashcard;