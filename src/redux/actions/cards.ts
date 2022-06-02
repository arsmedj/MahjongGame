import { CardsAction, CardsActionType, ICard } from "../../types";
import { generateId, initRandomNumbersArray, shuffle } from "../../utils";
import { AppDispatch } from "../store";

//Thunks
export const initializeCards = () => (dispatch: AppDispatch) => {
  const cardsNumbers = initRandomNumbersArray();

  const part1: ICard[] = [];
  const part2: ICard[] = [];

  cardsNumbers.map((num) => {
    part1.push({ number: num, id: generateId() });
    part2.push({ number: num, id: generateId() });
  });

  const result = part1.concat(shuffle<ICard>(part2));

  dispatch(InitAC(result));

  setTimeout(() => {
    dispatch(showCardsAc());
  }, 500);

  setTimeout(() => {
    dispatch(hideCardsAc());
  }, 5000);
};

export const addSuccessCards =
  (cardIds: string[]) => (dispatch: AppDispatch) => {
    cardIds.map((id) => dispatch(addSuccessCardAC(id)));
  };

//Action creators
export const addSuccessCardAC = (id: string): CardsAction => ({
  type: CardsActionType.ADD_SUCCESS_CARD,
  payload: id,
});
export const InitAC = (array: ICard[]): CardsAction => ({
  type: CardsActionType.INIT,
  payload: array,
});

export const showCardsAc = (): CardsAction => ({
  type: CardsActionType.TOGGLE_SHOW_CARDS,
  payload: true,
});
export const hideCardsAc = (): CardsAction => ({
  type: CardsActionType.TOGGLE_SHOW_CARDS,
  payload: false,
});
