import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import BookItem, { type Props as Item } from './BookItem';

interface Props {
  items: Item[]
}

export const BookList = ({items} : Props) => {
  const theme = useTheme();
  return (
    <FlatList
      style={{backgroundColor: theme.colors.surface}}
      data={items}
      renderItem={({item}) => <BookItem {...item} />}
      keyExtractor={item => item.id.toString()} />
  );
};

export { type Item };
export default BookList;
