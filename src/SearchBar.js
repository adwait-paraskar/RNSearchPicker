import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class SearchBar extends React.Component {
  render() {
    let { onChangeText } = this.props;
    return (
      <View style={{ padding: 2, }}>
        <TextInput style={styles.searchText}
          placeholder={'Type here to search'}
          underlineColorAndroid={'transparent'}
          returnKeyType={'search'}
          multiline={false}
          clearButtonMode={'always'}
          onChangeText={(text) => onChangeText(text)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchText: {
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'cornflowerblue',
    margin: 5,
  },
});
