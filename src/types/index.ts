export interface ICard {
  number: number;
  id: string;
}

export interface IInitAction {
  type: typeof CardsActionType.INIT;
  payload: ICard[];
}
export interface IAddSuccessCard {
  type: typeof CardsActionType.ADD_SUCCESS_CARD;
  payload: string;
}
export interface IToggleShowCards {
  type: typeof CardsActionType.TOGGLE_SHOW_CARDS;
  payload: boolean;
}

export enum CardsActionType {
  INIT = "INIT",
  ADD_SUCCESS_CARD = "ADD_SUCCESS_CARD",
  TOGGLE_SHOW_CARDS = "TOGGLE_SHOW_CARDS",
}

export type CardsAction = IInitAction | IAddSuccessCard | IToggleShowCards;

export type AppActions = CardsAction;
