import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    this.props.actions.fetchNotes();
  }

  _createNote = () => {
    const {text} = this.state;
    const note = {text};
    this.props.actions.createNote(note);
    this.setState({text: ''});
  };

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

  _renderCreateForm() {
    return (
      <View>
        <TextInput
          style={styles.textfield}
          placeholder={'Text'}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Button title="Create" onPress={this._createNote} />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this._renderNotes()}
        {this._renderCreateForm()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    marginHorizontal: 16,
  },
  textfield: {
    backgroundColor: '#eee',
    padding: 16,
    marginTop: 8,
  },
});
