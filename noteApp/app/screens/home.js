import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default class Home extends Component {
  componentDidMount() {
    this.props.actions.fetchNotes();
  }

  _renderNote(note) {
    return <Text>{note.text}</Text>;
  }
  _renderNotes() {
    const {data, status} = this.props.notes;
    if (status === 'failure') {
      return <Text>{'Error'}</Text>;
    } else if (status == 'loading') {
      return <Text>{'Loading'}</Text>;
    }
    return <View>{data.map(note => this._renderNote(note))}</View>;
  }

  render() {
    return (
      <ScrollView style={styles.container}>{this._renderNotes()}</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginHorizontal: 16,
  },
});
