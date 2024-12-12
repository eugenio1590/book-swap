import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainNavigatorParams } from 'routes';

export const BookScreen = () => {
  const { params } = useRoute<RouteProp<MainNavigatorParams, 'Book'>>();
  const { book } = params;
  return (
    <View>
      <Text>{book.title}</Text>
    </View>
  );
};

export default BookScreen;
