import { ICard, CardsAction, CardsActionType } from "../../types";

interface ICardsState {
  items: ICard[];
  successCards: Set<string>;
  isShowCards: boolean;
}

const initialState: ICardsState = {
  items: [],
  successCards: new Set(),
  isShowCards: false,
};

export function stateReducer(
  state = initialState,
  action: CardsAction
): ICardsState {
  switch (action.type) {
    case CardsActionType.INIT: {
      return { ...state, items: action.payload as ICard[] };
    }
    case CardsActionType.ADD_SUCCESS_CARD: {
      return {
        ...state,
        successCards: new Set(state.successCards).add(action.payload as string),
      };
    }
    case CardsActionType.TOGGLE_SHOW_CARDS: {
      return { ...state, isShowCards: action.payload as boolean };
    }
    default:
      return state;
  }
}
