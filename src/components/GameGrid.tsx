import { useEffect, useState } from "react";
import { ICard } from "../types";
import Card from "./Card";

interface GameGridProps {
  cards: ICard[];
  successCards: Set<string>;
  isShowCards: boolean;
  addSuccessCards: (ids: string[]) => void;
}

const GameGrid: React.FC<GameGridProps> = (props) => {
  const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (selectedCards.size >= 2) {
      const cardsIds: string[] = Array.from(selectedCards);
      const card1 = getCardById(cardsIds[0]);
      const card2 = getCardById(cardsIds[1]);

      if (card1.number !== card2.number) {
        setTimeout(() => {
          setSelectedCards(new Set());
        }, 1500);
      } else {
        props.addSuccessCards([card1.id, card2.id]);
        setSelectedCards(new Set());
      }
    }
  }, [selectedCards]);

  const handleSelectCard = (id: string) => {
    const cards = new Set(selectedCards);
    cards.add(id);
    setSelectedCards(cards);
  };

  const getCardById = (id: string): ICard => {
    return props.cards.find((card) => card.id === id)!;
  };

  return (
    <div className="wrapper">
      {props.cards.map(({ number, id }) => (
        <Card
          isShowCards={props.isShowCards}
          isCardSuccess={props.successCards.has(id)}
          isCardSelected={selectedCards.has(id)}
          number={number}
          id={id}
          key={id}
          clickHandler={handleSelectCard}
        />
      ))}
    </div>
  );
};

export default GameGrid;
