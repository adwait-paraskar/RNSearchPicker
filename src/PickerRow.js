import React from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class PickerRow extends React.Component {

    render(){

        let text = this.props.text
        let subTitle = this.props.subTitle
        let image = this.props.image
        let onPress = this.props.onPress
        let containerStyle = this.props.containerStyle ? this.props.containerStyle : pickerRowStyle.container
        let imageStyle = this.props.logoStyle ? this.props.logoStyle : pickerRowStyle.logo
        let textStyle = this.props.textStyle ? this.props.textStyle : pickerRowStyle.h1
        let subTitleStyle = this.props.subTitleStyle ? this.props.subTitleStyle : pickerRowStyle.h3
        let selected = this.props.selected
        return (
            <TouchableOpacity
                style={pickerRowStyle.container}
                onPress={onPress}
            >
            {image ? (<View>
                    <Image
                        style={pickerRowStyle.logo}
                        source={{ uri: image }}
                    />
                </View>) : null}
                
    
                <View style={pickerRowStyle.textContainer}>
                {text ? (<Text style={textStyle}>{text}</Text>) : null }    
                {subTitle ? (<Text style={subTitleStyle}>{subTitle}</Text>) : null }    
                </View>
    
                <View style={pickerRowStyle.iconContainer}>
                    {selected ?
                        <Icon name="check-circle" size={25} color="green" />
                        :
                        <Icon name="add-circle-outline" size={25} color="gray" />
                    }
                </View>
            </TouchableOpacity>
        );
    }
}


const pickerRowStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    },
    textContainer: {
        flex: 5,
        padding: 10,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40
    },
    h1: {
        fontSize: 22,
    },
    h3: {
        fontSize: 12,
    },
});
