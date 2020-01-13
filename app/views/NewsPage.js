import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Share,
} from 'react-native';

export class NewsPage extends Component {
  profileImage = images => {
    if (images[0]) {
      return (
        <Image
          style={styles.imageStyle}
          source={{
            uri: `https://www.nytimes.com/${images[0].url}`,
          }}
        />
      );
    }
    return (
      <Image
        style={styles.imageStyle}
        source={{
          uri: `http://dreamstop.com/wp-content/uploads/2013/06/news-dreams.jpg`,
        }}
      />
    );
  };
  render() {
    const {
      web_url,
      snippet,
      lead_paragraph,
      multimedia,
      headline,
      pub_date,
      document_type,
      byline,
    } = this.props.navigation.getParam('news');
    const {
      container,
      headerTextStyle,
      paragraphTextStyle,
      dateStyle,
      dateViewStyle,
      shareBtnStyle,
      shareTxtStyle,
      bylineTxtStyle
    } = styles;
    const title = headline.print_headline
      ? headline.print_headline
      : headline.main;
    return (
      <ScrollView style={container}>
        {this.profileImage(multimedia)}
        <Text style={headerTextStyle}>{title}</Text>
        <View style={dateViewStyle}>
          <Text style={dateStyle}>{pub_date.substring(0, 10)}</Text>
          <Text style={dateStyle}>{document_type}</Text>
        </View>
        <Text style={paragraphTextStyle}>{snippet}</Text>
        <Text style={paragraphTextStyle}>{lead_paragraph}</Text>
        <View style={dateViewStyle}>
          <Text style={bylineTxtStyle}>{byline.original}</Text>
          <TouchableOpacity
            style={shareBtnStyle}
            onPress={() => {
              Share.share({
                title,
                message: web_url,
              });
            }}>
            <Text style={shareTxtStyle}>Share</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 300,
    width: null,
  },
  headerTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  paragraphTextStyle: {
    fontSize: 18,
    margin: 10,
  },
  dateStyle: {
    marginLeft: 18,
    marginRight: 20,
  },
  dateViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shareBtnStyle: {
    padding: 8,
    backgroundColor: '#0080ff',
    borderRadius: 10,
    margin: 10,
  },
  shareTxtStyle: {
    color: 'white',
    fontSize: 18,
  },
  bylineTxtStyle:{
    fontSize: 12,
    margin: 10,
  }
});

export default NewsPage;
