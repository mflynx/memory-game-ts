import { useState, useEffect } from "react";
import { instruments } from "./../data/musicCards";
import { getAllCards, CardType } from "./../utils/CardSetup";
import shuffleCards from "./../utils/Shuffle";
import Card from "./Card";
import styles from "./Game.module.scss";

const allCards = getAllCards(instruments);

function Game() {
  const [cards, setCards] = useState<CardType[]>(shuffleCards(allCards));
  const [cardsPicked, setCardsPicked] = useState<CardType[]>([]);
  const [triesCount, setTriesCount] = useState<number>(0);
  const [pairsFound, setPairsFound] = useState<number>(0);

  // console.log(cards);

  const resetGame = () => {
    setCardsPicked([]);
    setTriesCount(0);
    setPairsFound(0);
    setCards(shuffleCards(allCards));
  };

  const flipCard = (cardToFlip: CardType) => {
    const updatedCards = cards.map((card) =>
      card.id === cardToFlip.id ? { ...card, faceUp: !card.faceUp } : card
    );
    setCards(updatedCards);
  };

  const compareCards = (secondPick: CardType) => {
    const cardsMatch = cardsPicked[0].name === secondPick.name;
    if (cardsMatch) {
      setPairsFound(pairsFound + 1);
      setCardsPicked([]);
    } else {
      setTimeout(() => {
        cardsPicked.forEach((card) => flipCard(card));
        setCardsPicked([]);
      }, 1000);
    }
  };

  const handleClick = (selectedCard: CardType) => {
    // allow only 2 cards to be revealed for each try
    if (cardsPicked.length === 2) return;
    flipCard(selectedCard);
    if (cardsPicked.length === 0) {
      setCardsPicked([selectedCard]);
    } else {
      setCardsPicked([...cardsPicked, selectedCard]);
      setTriesCount(triesCount + 1);
      compareCards(selectedCard);
    }
  };

  useEffect(() => {
    // check winner
    if (pairsFound === cards.length / 2) {
      //do smth when winner
      console.log("You won !!! in " + triesCount + " tries");
    }
  }, [pairsFound, cards.length, triesCount]);

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
