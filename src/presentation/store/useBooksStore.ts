import { create } from 'zustand';
import { Trade } from 'core';

interface BooksState {
  isLoading: boolean;
  trades: Trade[];
  fetchTrades: () => void;
}

export const useBooksStore = create<BooksState>()((set) =>({
  isLoading: false,
  trades: [],
  fetchTrades: async () => {
    set({isLoading: true});
    //TODO: remove this delay
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(2000);
    const trades: Trade[] = [
      {
        id: 1,
        type: 'buy',
        user: {
          name: 'Bob Burger',
          image: 'https://avatars.githubusercontent.com/u/1?v=4',
        },
        book: {
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger',
          image: 'http://books.google.com/books/content?id=QVRCrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        },
      },
      {
        id: 2,
        type: 'swap',
        user: {
          name: 'Bob Smith',
          image: 'https://avatars.githubusercontent.com/u/2?v=4',
        },
        book: {
          title: '1984',
          author: 'George Orwell',
          image: 'https://example.com/1984.jpg',
        },
      },
      {
        id: 3,
        type: 'buy',
        user: {
          name: 'Carol Davis',
          image: 'https://avatars.githubusercontent.co/u/3?v=4',
        },
        book: {
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          image: 'http://books.google.com/books/content?id=AYl1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
      },
    ];
    set({trades, isLoading: false});
  },
}));
