import React, {Component} from 'react';
import {View, ScrollView, Text, Platform} from 'react-native';
import axios from 'axios';

import NewsRow from '../components/NewsRow';
import {Input} from '../components';

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};
export class NewsFeed extends Component {
  state = {search: '', data: [], page: 2};

  componentDidMount() {
    this.fetch(false, '', 0);
    this.fetch(false, '', 1);
  }

  fetch = (search, value, page) => {
    axios
      .get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        params: {
          page,
          q: search ? value : this.state.search,
          'api-key': 'OAD0Qz0csaoDZLpw5ZR74TCeSjynnabJ',
        },
      })
      .then(response => {
        if (search) {
          this.setState({data: response.data.response.docs});
        } else {
          this.setState({
            data: [...this.state.data, ...response.data.response.docs],
          });
        }
      });
  };

  renderNews = () => {
    if (this.state.data)
      return this.state.data.map(news => (
        <NewsRow
          key={news._id}
          news={news}
          onPress={() => {
            this.props.navigation.navigate('NewsPage', {
              news,
            });
          }}
        />
      ));
    return <Text></Text>;
  };
  render() {
    const {search} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 60 : 0}}>
          <Input
            placeholder={'Search...'}
            value={search}
            onSubmitEditing={() => {
              this.setState({data: [], search: ''});
              this.fetch(true, this.state.search, 0);
            }}
            onChangeText={value => {
              this.setState({search: value, page: 1});
            }}
          />
          <ScrollView
            style={styles.container}
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                var page = this.state.page;
                this.fetch(false, '', page);
                page++;
                this.fetch(false, '', page);
                page++;
                this.setState({page});
              }
            }}>
            {this.renderNews()}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
};

export default NewsFeed;
