import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

type Props = {
  onSearch: (text: string) => void;
};

const SearchBar = ({onSearch}: Props) => {
  const [value, onChangeValue] = useState('');

  return (
    <View
      style={{
        height: 53,
        flexDirection: 'row',
        flex: 1,
        marginBottom: 20,
      }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeValue}
        value={value}
        placeholder="Search anything"
        keyboardType="web-search"
      />
      <TouchableOpacity
        onPress={() => {
          if (value.trim().length < 0) {
            return;
          }
          onSearch(value);
        }}
        style={styles.searchButton}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
          }}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    width: Dimensions.get('window').width - 24 - 65,
    paddingLeft: 20,
  },
  searchButton: {
    backgroundColor: '#3E3232',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
    borderRadius: 8,
    marginLeft: 5,
  },
});

export default SearchBar;
