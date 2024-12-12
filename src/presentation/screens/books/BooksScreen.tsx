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
        renderItem={({item}) => (
          <TradableBookCard
            user={item.user.name}
            avatar={item.user.image}
            book={item.book.title}
            author={item.book.author}
            cover={item.book.image}
            trade={item.type}
            onTradeClick={ () => console.log('On trade click')}
            onBookClick={ () => console.log('On book click')}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default BooksScreen;
