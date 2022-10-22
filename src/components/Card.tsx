import questionMark from "./../images/question-mark.svg.png";
import styles from "./Card.module.scss";
import { CardType } from "./../utils/CardSetup";

interface CardProps {
  card: CardType;
  handleClick: (card: CardType) => void;
}

const Card: React.FC<CardProps> = ({ card, handleClick }) => {
  return (
    <div
      className={
        card.faceUp ? `${styles.container} ${styles.flip}` : styles.container
      }
    >
      <img
        className={
          card.faceUp ? `${styles.front} ${styles.flip}` : styles.front
        }
        src={card.image}
        alt={card.name}
      />
      <img
        className={styles.back}
        onClick={() => handleClick(card)}
        src={questionMark}
        alt="question mark"
      />
    </div>
  );
};

export default Card;
