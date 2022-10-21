import questionMark from "./../images/question-mark.svg.png";
import styles from "./Card.module.scss";
import { CardType } from "./Game";

interface CardProps {
  card: CardType;
  handleClick: (card: CardType) => void;
}

const Card: React.FC<CardProps> = ({ card, handleClick }) => {
  return (
    <div className={styles.container}>
      {card.faceUp ? (
        <img src={card.image} alt={card.name} />
      ) : (
        <img
          className={styles.faceDown}
          onClick={() => handleClick(card)}
          src={questionMark}
          alt="question mark"
        />
      )}
    </div>
  );
};

export default Card;
