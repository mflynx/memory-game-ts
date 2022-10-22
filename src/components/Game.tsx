import { useState } from "react";
import { instruments } from "./../data/musicCards";
import {getAllCards, CardType} from "./../utils/CardSetup"
import shuffleCards from "./../utils/Shuffle"
import Card from "./Card";
import styles from "./Game.module.scss";

const allCards = getAllCards(instruments)

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
