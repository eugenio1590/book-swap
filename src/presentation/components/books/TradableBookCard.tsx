/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Card, Divider, Text, useTheme } from 'react-native-paper';
import { Trade, type TradeType } from 'core';
import { capitalize } from 'util/string';
import { BookCoverPicture } from 'components/books';
import { ProfilePicture } from 'components/profile';
import { StyledButton } from 'components/shared';

interface Props {
  trade: Trade;
}

export const TradableBookCard = ({trade} : Props) => {
  const theme = useTheme();
  const {type, book, user} = trade;
  return (
    <Card mode="contained" style={{...styles.card, backgroundColor: theme.colors.background}}>
      <Header user={user.name} avatar={user.image} trade={type} />
      <Divider style={[styles.divider, {backgroundColor: theme.colors.onSurfaceVariant}]} />
      <Content book={book.title} author={book.author} cover={book.image} />
    </Card>
  );
};

interface HeaderProps {
  user: string;
  avatar: string;
  trade: TradeType;
}

const Header = ({user, avatar, trade} : HeaderProps) => {
  const theme = useTheme();
  const variant = trade === 'buy' ? 'primary' : 'secondary';
  const onTradeClick = () => console.log('On trade click'); // TODO: replace with navigation
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
  cover: string;
  author: string;
}

const Content = ({book, cover, author} : ContentProps) => {
  const theme = useTheme();
  const onBookClick = () => console.log('On book click'); // TODO: replace with navigation
  return (
    <Pressable onPress={onBookClick}>
      <Card.Content style={styles.row}>
        <BookCoverPicture uri={cover} />
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

export default TradableBookCard;
