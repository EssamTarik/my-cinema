import { SEARCH_TEXT_SET } from "../types";

export interface ISetSearchTextAction {
  type: typeof SEARCH_TEXT_SET;
  payload: string;
}