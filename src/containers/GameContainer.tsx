import { useEffect } from "react";
import { connect } from "react-redux";
import GameGrid from "../components/GameGrid";
import { addSuccessCards, initializeCards } from "../redux/actions/cards";
import { RootState } from "../redux/store";
import { ICard } from "../types";

interface GameContainerProps {
  cards: ICard[];
  successCards: Set<string>;
  isShowCards: boolean;
  initializeCards: () => void;
  addSuccessCards: (ids: string[]) => void;
}

const GameContainer: React.FC<GameContainerProps> = (props) => {
  useEffect(() => {
    props.initializeCards();
  }, []);

  return (
    <GameGrid
      isShowCards={props.isShowCards}
      successCards={props.successCards}
      cards={props.cards}
      addSuccessCards={props.addSuccessCards}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  cards: state.cards.items,
  successCards: state.cards.successCards,
  isShowCards: state.cards.isShowCards,
});

export default connect(mapStateToProps, { initializeCards, addSuccessCards })(
  GameContainer
);
