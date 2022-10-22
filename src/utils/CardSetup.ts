export type CardType = {
    id: string;
    name: string;
    image: string;
    faceUp: boolean;
  };

const getCardName = (fileName: string) => {
  return fileName.split(/\/|\./)[3];
};

export const getAllCards = (cardCollection: string[]): CardType[] =>
  [...cardCollection, ...cardCollection].map((card, i) => ({
    id: "card" + i,
    name: getCardName(card),
    image: card,
    faceUp: false,
  }));
