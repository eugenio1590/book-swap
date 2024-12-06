import { User } from './User';
import { Book } from './Book';

export interface Trade {
  id: number;
  type: 'buy' | 'swap';
  user: User;
  book: Book;
}

type TradeType = Trade['type'];

export { type TradeType };
export default Trade;

