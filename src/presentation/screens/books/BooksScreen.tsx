import React from 'react';
import { View } from 'react-native';
import { TradeType } from 'core';
import BookList from './components/BookList';

export const BooksScreen = () => {
  return (
    <View>
      <BookList
        items={[
          {
            id: 1,
            user: 'Bob Burger',
            avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
            book: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            image: 'https://example.com/gatsby.jpg',
            trade: TradeType.buy,
            onTradeClick: () => console.log('On trade click'),
            onBookClick: () => console.log('On book click'),
          },
          {
            id: 2,
            user: 'Bob Smith',
            avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
            book: '1984',
            author: 'George Orwell',
            image: 'https://example.com/1984.jpg',
            trade: TradeType.buy,
            onTradeClick: () => console.log('On trade click'),
            onBookClick: () => console.log('On book click'),
          },
          {
            id: 3,
            user: 'Carol Davis',
            avatar: 'https://avatars.githubusercontent.co/u/3?v=4',
            book: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            image: 'http://books.google.com/books/content?id=AYl1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            trade: TradeType.swap,
            onTradeClick: () => console.log('On trade click'),
            onBookClick: () => console.log('On book click'),
          },
        ]}
      />
    </View>
  );
};

export default BooksScreen;
