import { useState } from "react";
import Card from "./Card";
import { allCards } from "./../data/musicCards";
import styles from "./Game.module.scss";

export type CardType = {
  id: string;
  name: string;
  image: string;
  faceUp: boolean;
};

const shuffleCards = (arr: CardType[]) => {
  //Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements array[i] and array[j]
  }
  return arr;
};

function Game() {
  const [cards, setCards] = useState<CardType[]>(shuffleCards(allCards));
  const [cardsPicked, setCardsPicked] = useState<CardType[]>([]);

  //   console.log(cards);

  const resetGame = () => {
    setCardsPicked([]);
    setCards(shuffleCards(allCards));
  };

  const flipCard = (cardToFlip: CardType) => {
    let updatedCards = cards.map((card) =>
      card.id === cardToFlip.id ? { ...card, faceUp: !card.faceUp } : card
    );
    setCards(updatedCards);
  };

  const handleClick = (selectedCard: CardType) => {
    if (cardsPicked.length === 2) return;
    flipCard(selectedCard);
    if (cardsPicked.length === 0) {
      setCardsPicked([selectedCard]);
    } else {
      setCardsPicked([...cardsPicked, selectedCard]);
      let cardsMatch = cardsPicked[0].name === selectedCard.name;
    //   console.log("cardsMatch :>> ", cardsMatch);

      if (cardsMatch) {
        //do smth if cardsMatch
        //check winner
        setCardsPicked([]);
      } else {
        setTimeout(() => {
          cardsPicked.forEach((card) => flipCard(card));
          setCardsPicked([]);
        }, 1000);
      }
    }
  };

//   console.log("cardsPicked", cardsPicked);

  return (
    <div>
      <button onClick={resetGame}>new game</button>
      <div className={styles.board}>
        <div className={styles.wrapper}>
          {cards.map((card) => (
            <Card key={card.id} card={card} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
