/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Card, Divider, Text, useTheme } from 'react-native-paper';
import { type TradeType } from 'core';
import { capitalize } from 'util/string';
import { BookCoverPicture } from 'components/books';
import { ProfilePicture, StyledButton } from 'components/shared';

export interface Props extends HeaderProps, ContentProps {
  id: number;
}

export const BookItem = (props : Props) => {
  const theme = useTheme();
  return (
    <Card mode="contained" style={{...styles.card, backgroundColor: theme.colors.background}}>
      <Header {...props} />
      <Divider style={[styles.divider, {backgroundColor: theme.colors.onSurfaceVariant}]} />
      <Content {...props} />
    </Card>
  );
};

interface HeaderProps {
  user: string;
  avatar: string;
  trade: TradeType;
  onTradeClick: () => void;
}

const Header = ({user, avatar, trade, onTradeClick} : HeaderProps) => {
  const theme = useTheme();
  const variant = trade === 'buy' ? 'primary' : 'secondary';
  return (
    <Card.Title
      title={user}
      titleStyle={[styles.title, { color: theme.colors.onSurface }]}
      subtitle={`wants to ${trade.toLocaleLowerCase()}`}
      subtitleStyle={{color: theme.colors.onSurfaceVariant}}
      style={styles.header}
      left={(props) => <ProfilePicture {...props} uri={avatar} placeholder={user} />}
      right={(props) => (
        <StyledButton {...props} variant={variant} onPress={onTradeClick}>
          {capitalize(trade)}
        </StyledButton>
      )}
    />
  );
};

interface ContentProps {
  book: string;
  image: string;
  author: string;
  onBookClick: () => void;
}

const Content = ({book, image, author, onBookClick} : ContentProps) => {
  const theme = useTheme();
  return (
    <Pressable onPress={onBookClick}>
      <Card.Content style={styles.row}>
        <BookCoverPicture uri={image} />
        <View>
          <Text variant="titleLarge" style={styles.title}>{book}</Text>
          <Text variant="bodyMedium" style={[styles.row, {color: theme.colors.onSurfaceVariant}]}>
            by <Text style={[styles.title, {color: theme.colors.onSurfaceVariant}]}>{author}</Text>
          </Text>
        </View>
      </Card.Content>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
    paddingBottom: 20,
    marginVertical: 20,
  },
  header: {
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
  divider: {
    marginHorizontal: 16,
    marginBottom: 16,
    opacity: 0.5,
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    marginRight: 16,
  },
});

export default BookItem;
