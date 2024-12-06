export interface Trade {
  type: 'buy' | 'swap';
}

type TradeType = Trade['type'];

export { type TradeType };
export default Trade;
