import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Card, CardSection} from '.';

profileImage = (images) => {
  if (images[0]) {
    return (
      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{
            uri: `https://www.nytimes.com/${images[0].url}`,
          }}
        />
      </CardSection>
    );
  }
  return (
    <CardSection>
      <Image
        style={styles.imageStyle}
        source={{
          uri: `http://dreamstop.com/wp-content/uploads/2013/06/news-dreams.jpg`,
        }}
      />
    </CardSection>
  );
};
const NewsRow = ({news, onPress}) => {
  const {multimedia, headline, abstract} = news;
  const {headerContentStyle, headerTextStyle} = styles;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card>
        {this.profileImage(multimedia)}
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>
              {headline.print_headline
                ? headline.print_headline
                : headline.main}
            </Text>
            <Text>{abstract}</Text>
          </View>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default NewsRow;
