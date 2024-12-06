import React, { useCallback, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

interface Props {
  uri: string;
  size?: number;
}

export const BookCoverPicture = ({uri, size = 70} : Props) => {
  const [failedToLoadImage, setFailedToLoadImage] = useState(false);

  const handleError = useCallback(() => {
    setFailedToLoadImage(true);
  }, []);

  // TODO: load a default asset on error
  return failedToLoadImage ? (
    <Avatar.Text label="N/A" style={style.image} size={size} />
  ) : (
    <Image source={{uri}} style={style.image} width={size} height={size} onError={handleError}/>
  );
};

const style = StyleSheet.create({
  image: {
    borderRadius: 20,
    marginEnd: 16,
    elevation: 10,
  },
});

export default BookCoverPicture;
