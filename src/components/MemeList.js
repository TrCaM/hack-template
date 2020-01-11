import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  List,
} from 'react-native';
import {Card, Icon, ListItem} from 'react-native-elements';
import {Button, Container} from 'native-base';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import list from './Meme';

export default class MemeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: [],
    };
  }

  async componentDidMount() {
    try {
      this.user = auth().currentUser;
      // Create new document if user first sign in
      const userFavorites = await firestore()
        .collection('users')
        .doc(this.user.uid)
        .get();
      if (!userFavorites.exists) {
        await firestore()
          .collection('users')
          .doc(this.user.uid)
          .set({favorites: []});
      }
      const documentSnapshot = await firestore()
        .collection('users')
        .doc('p6aGolLPtCeXjo7anQuM')
        .get();
      this.setState({trending: documentSnapshot.data().favorites});
    } catch (e) {
      console.log(e.message);
    }
  }

  async likeMeme(url) {
    try {
      await firestore()
        .collection('users')
        .doc(this.user.uid)
        .update({favorites: firestore.FieldValue.arrayUnion(url)});
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.trending}
          renderItem={({item}) => (
            <Card
              image={{uri: item}}
              imageStyle={{width: 200, height: 200}}
              containerStyle={{height: 267}}>
              <Button full danger onPress={() => this.likeMeme(item)}>
                <Icon name="thumb-up" color="white" />
              </Button>
            </Card>
          )}
          keyExtractor={item => item}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
