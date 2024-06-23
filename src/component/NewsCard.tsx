import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NewsType} from '../api/news';

type Props = {
  news: NewsType;
};

const formatDate = (isoDateString: string) => {
  const date = new Date(isoDateString);

  // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
};

const NewsCard = ({news}: Props) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
      }}>
      <View
        style={{
          height: 168,
          borderRadius: 8,
          //   borderWidth: 1,
          marginBottom: 16,
          overflow: 'hidden',
        }}>
        {news.urlToImage ? (
          <Image
            source={{
              uri: news.urlToImage,
            }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        ) : (
          <Image
            source={require('./../assets/no-image.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        )}
      </View>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 8,
        }}>
        {news.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '300',
          marginBottom: 8,
        }}>
        {news.description}
      </Text>
      <View
        style={{
          padding: 8,
          backgroundColor: '#F5F5F5',
          borderRadius: 12,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 4,
          }}>
          {news.author}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
          }}>
          {formatDate(news.publishedAt)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default NewsCard;
