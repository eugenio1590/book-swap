import React, { useCallback, useState } from 'react';
import { Avatar } from 'react-native-paper';
import { randomSoftColor } from 'util/color';

interface Props {
  uri: string;
  placeholder: string;
  size?: number;
}

const getInitials = (name: string) => {
  const initials = name.split(' ').map(word => word.charAt(0).toUpperCase());
  return initials.slice(0, 2).join('');
};

export const ProfilePicture = ({ uri, placeholder, ...props } : Props) => {
  const [failedToLoadImage, setFailedToLoadImage] = useState(false);

  const handleError = useCallback(() => {
    setFailedToLoadImage(true);
  }, []);

  return failedToLoadImage ? (
    <Avatar.Text {...props} label={getInitials(placeholder)} style={{backgroundColor: randomSoftColor()}} />
  ) : (
    <Avatar.Image {...props} source={{uri}} onError={handleError} />
  );
};

export default ProfilePicture;
