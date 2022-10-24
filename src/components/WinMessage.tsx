import useWindowSize from "./../utils/useWindowSize"
import Confetti from "react-confetti";

interface WinMessageProps {
  triesCount: number;
  resetGame: () => void;
}

const WinMessage: React.FC<WinMessageProps> = ({ triesCount, resetGame }) => {
    const windowSize = useWindowSize()
  return (
    <>
      <Confetti width={windowSize.width} height={windowSize.height} />
      <div>
        <div>Bravissimo! You won in {triesCount} tries.</div>
        <div>Try a new best score ?</div>
      </div>
      <div className="btn" onClick={resetGame}>play again</div>
    </>
  );
};

export default WinMessage;
