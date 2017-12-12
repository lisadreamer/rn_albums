import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { imgStyle, headerContentStyle, headerTextStyle, imgContainer, imageStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={imgContainer}>
          <Image style={imgStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    imgStyle: {
      height: 50,
      width: 50
    },
    imgContainer: {
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
};

export default AlbumDetail;
