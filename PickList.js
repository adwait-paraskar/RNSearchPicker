import React from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import PickerRow from "./src/PickerRow";
import SearchBar from "./src/SearchBar";

export default class PickList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data : props.data}
  }

  render() {

    this.indexKey = this.props.indexKey
    this.primaryTextKey = this.props.primaryTextKey
    this.secondaryTextKey = this.props.secondaryTextKey
    this.imageKey = this.props.imageKey

    return (
      <FlatList
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._renderSeparator}
        ListHeaderComponent={this._renderHeader}
        ListFooterComponent={this._renderFooter}
      />
    );
  }

  _keyExtractor = (item, index) =>  item[this.indexKey];

  _renderSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "#CED0CE" }} />;
  };

  _renderHeader = () => {
    return <SearchBar onChangeText={this._filterData} />;
  };

  _renderFooter = () => {
    let backgroundColor = this.props.submitButtonColor ? this.props.submitButtonColor : 'aqua'
    return (
      <TouchableOpacity style={[ pickListStyle.buttonStyle, { backgroundColor: backgroundColor}]}
      onPress = {this._onSubmit}
      >
        <Text style ={pickListStyle.buttonTextStyle}> Submit </Text>
      </TouchableOpacity>
    );
  };

  _onSubmit = () => {
    let checkedIds = []
    this.state.data.forEach(element => {
            if (element.selected) {
                    checkedIds.push(element[this.indexKey])
            }
    })
    this.props.selected(checkedIds)
  };

  _filterData = text => {
    if (text === "") {
      this._setInitialState();
      return
    }

    let filteredlist = this.originalData.filter(item => {
      return (
        item[this.primaryTextKey].includes(text) ||
        item[this.secondaryTextKey].toLowerCase().includes(text)
      );
    });
    this.setState({
      data: filteredlist
    });
  };

  _renderItem = ({ item }) => (
    <PickerRow
      text={item[this.primaryTextKey]}
      subTtle={item[this.secondaryTextKey]}
      image = {item[this.imageKey]}
      onPress={() => this._onPress(item)}
      containerStyle = {this.props.rowContainerStyle}
      imageStyle = {this.props.imageStyle}
      textStyle = {this.props.textStyle}
      subTitleStyle = {this.props.subTitleStyle}
      selected={item.selected}
    />
  );

  _onPress = item => {
      let data = this.state.data
      item.selected = !item.selected
      let index = data.indexOf(item);
      data[index] = item;
      this.setState({
        data:Object.create(data)
      });
  };

  _setInitialState() {
    this.setState({
      data: this.originalData
    });
  }
}

let pickListStyle = StyleSheet.create({
    buttonStyle : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        height:60
    },
    buttonTextStyle : {
        fontSize : 26,
        textAlign: 'center'
    }
})
