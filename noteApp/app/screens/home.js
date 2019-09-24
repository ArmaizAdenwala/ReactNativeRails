import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.notes.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
