import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import { TradableBookCard } from 'components/books';
import { Trade } from 'core';

interface Props {
  items: Trade[]
}

export const BookList = ({items} : Props) => {
  const theme = useTheme();
  return (
    <FlatList
      style={{backgroundColor: theme.colors.surface}}
      data={items}
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
      keyExtractor={item => item.id.toString()} />
  );
};

export default BookList;
