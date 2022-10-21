import drums from "./../images/instruments/drums.png";
import flute from "./../images/instruments/flute.png";
import guitar from "./../images/instruments/guitar.png";
import maracas from "./../images/instruments/maracas.png";
import oboe from "./../images/instruments/oboe.png";
import piano from "./../images/instruments/piano.png";
import saxophone from "./../images/instruments/saxophone.png";
import trumpet from "./../images/instruments/trumpet.png";
import violin from "./../images/instruments/violin.png";
import xylophone from "./../images/instruments/xylophone.png";

import { CardType } from "../components/Game";

const instruments: string[] = [
  drums,
  flute,
  guitar,
  maracas,
  oboe,
  piano,
  saxophone,
  trumpet,
  violin,
  xylophone,
];

const getCardName = (fileName: string) => {
  return fileName.split(/\/|\./)[3];
};

export const allCards: CardType[] = [...instruments, ...instruments].map(
  (card, i) => ({
    id: "card" + i,
    name: getCardName(card),
    image: card,
    faceUp: false,
  })
);