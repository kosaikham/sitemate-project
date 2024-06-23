/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../../component/SearchBar';
import useNews from '../../hook/useNews';
import NewsCard from '../../component/NewsCard';

function NewsScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {error, loading, news, onLoadNews} = useNews();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: '#F5F5F5',
            paddingHorizontal: 12,
            marginTop: 24,
          }}>
          <SearchBar onSearch={onLoadNews} />
          {news.length > 0 ? (
            news
              .slice(0, 5)
              .map(item => (
                <NewsCard key={item.publishedAt + Math.random()} news={item} />
              ))
          ) : (
            <Text>No news</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NewsScreen;
