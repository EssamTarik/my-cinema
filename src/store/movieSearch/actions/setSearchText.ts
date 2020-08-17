import { SEARCH_TEXT_SET } from '../types'
import { ISetSearchTextAction } from '../models';

export default (text: string): ISetSearchTextAction => ({
  type: SEARCH_TEXT_SET,
  payload: text
})