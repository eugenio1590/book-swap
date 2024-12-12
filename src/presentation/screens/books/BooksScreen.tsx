import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { ProgressBar, useTheme } from 'react-native-paper';
import { useBooksStore } from 'store';
import { TradableBookCard } from 'components/books';

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
      <FlatList
        style={{backgroundColor: theme.colors.surface}}
        data={trades}
        renderItem={({item}) => <TradableBookCard trade={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default BooksScreen;
