import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ProgressBar, useTheme } from 'react-native-paper';
import { useBooksStore } from 'store';
import BookList, { type Item } from './components/BookList';

export const BooksScreen = () => {
  const theme = useTheme();
  const isLoading = useBooksStore(state => state.isLoading);
  const trades = useBooksStore(state => state.trades);
  const fetchTrades = useBooksStore(state => state.fetchTrades);

  const items: Item[] = trades.map(trade => ({
    id: trade.id,
    user: trade.user.name,
    avatar: trade.user.image,
    book: trade.book.title,
    author: trade.book.author,
    image: trade.book.image,
    trade: trade.type,
    onTradeClick: () => console.log('On trade click'),
    onBookClick: () => console.log('On book click'),
  }));

  useEffect(() => {
    fetchTrades();
  }, [fetchTrades]);

  return (
    <View>
      {isLoading && <ProgressBar indeterminate={true} color={theme.colors.primary} />}
      <BookList items={items} />
    </View>
  );
};

export default BooksScreen;
