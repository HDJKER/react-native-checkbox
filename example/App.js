/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu！',
});
const isIOS = Platform.OS === 'ios';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value0: true,
            value1: false,
            value2: true,
            value3: false,
            value4: false,
            lineWidth: 10,
        };
    }
    renderForIOS() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, `[value: ${this.state.value0}]`),
            React.createElement(CheckBox, { disabled: true, value: this.state.value0, onValueChange: (value) => this.setState({
                    value0: value,
                }) }),
            React.createElement(Text, null, `[value: ${this.state.value4}]`),
            React.createElement(CheckBox, { value: this.state.value4, hideBox: true, onValueChange: (value) => this.setState({
                    value4: value,
                }) }),
            React.createElement(Text, null, `[value: ${this.state.value3}]`),
            React.createElement(CheckBox, { value: this.state.value3, boxType: 'square', onValueChange: (value) => this.setState({
                    value3: value,
                }) }),
            React.createElement(Text, null, `[value: ${this.state.value2}]`),
            React.createElement(CheckBox, { value: this.state.value2, onValueChange: (value) => this.setState({
                    value2: value,
                }), onAnimationDidStop: () => console.log('onAnimationDidStopEvent'), lineWidth: 2, hideBox: false, boxType: 'circle', tintColors: '#9E663C', onCheckColor: '#6F763F', onFillColor: '#4DABEC', onTintColor: '#F4DCF8', animationDuration: 0.5, disabled: false, onAnimationType: 'bounce', offAnimationType: 'stroke' }),
            React.createElement(Button, { onPress: () => this.setState({
                    value2: !this.state.value2,
                }), title: "toggle the value above" })));
    }
    renderForAndroid() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, `[value: ${this.state.value0}]`),
            React.createElement(CheckBox, { disabled: true, value: this.state.value0, onValueChange: (value) => this.setState({
                    value0: value,
                }) }),
            React.createElement(Text, null, `[value: ${this.state.value1}]`),
            React.createElement(CheckBox, { value: this.state.value1, tintColors: { true: '#ff0000' }, onValueChange: (value) => this.setState({
                    value1: value,
                }) }),
            React.createElement(Button, { onPress: () => this.setState({
                    value1: !this.state.value1,
                }), title: "toggle the value above" })));
    }
    renderForWindows() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, "Disabled checkbox"),
            React.createElement(CheckBox, { value: true, disabled: true }),
            React.createElement(Text, null, `[value: ${this.state.value0}]`),
            React.createElement(CheckBox, { value: this.state.value0, onValueChange: (value) => this.setState({
                    value0: value,
                }) }),
            React.createElement(Text, null, `[value: ${this.state.value1}]`),
            React.createElement(CheckBox, { tintColors: 'green', onCheckColor: 'red', onFillColor: 'yellow', onTintColor: '#80F4E8', value: this.state.value1, onValueChange: (value) => this.setState({
                    value1: value,
                }) }),
            React.createElement(Button, { onPress: () => this.setState({
                    value1: !this.state.value1,
                }), title: "toggle the value above" })));
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.welcome }, "Welcome to React Native Checkbox!"),
            isIOS
                ? this.renderForIOS()
                : Platform.OS === 'windows'
                    ? this.renderForWindows()
                    : this.renderForAndroid(),
            React.createElement(Text, { style: styles.instructions }, instructions)));
    }
}
const styles = StyleSheet.create({
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
