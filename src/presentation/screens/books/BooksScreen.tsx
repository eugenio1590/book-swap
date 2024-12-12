import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ProgressBar, useTheme } from 'react-native-paper';
import { useBooksStore } from 'store';
import BookList from './components/BookList';

export const BooksScreen = () => {
  const theme = useTheme();
  const isLoading = useBooksStore(state => state.isLoading);
  const trades = useBooksStore(state => state.trades);
  const fetchTrades = useBooksStore(state => state.fetchTrades);

  useEffect(() => {
    fetchTrades();
  }, [fetchTrades]);

  return (
    <View>
      {isLoading && <ProgressBar indeterminate={true} color={theme.colors.primary} />}
      <BookList items={trades} />
    </View>
  );
};

export default BooksScreen;
