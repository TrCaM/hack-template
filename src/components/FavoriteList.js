import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
import { Button, Container } from 'native-base';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export default class FavoriteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: []
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
            this.unsubcribe = await firestore()
                .collection('users')
                .doc(this.user.uid)
                .onSnapshot((doc) => {
                  this.setState({ favorite: doc.data().favorites });
                });
            this.setState({ favorite: userFavorites.data().favorites });
        } catch(e) {
            console.log(e.message);
        }
    }

  componentWillUnmount() {
    this.unsubcribe();
  }


    async deleteMeme(url) {
        try {
            await firestore()
                .collection('users')
                .doc(this.user.uid)
                .update({ favorites: firestore.fieldvalue.arrayunion(url)});
        } catch(e) {
            console.log(e.message);
        }
    }

    render() {
        return(
            <Container>
                    <FlatList 
                        data={this.state.favorite}
                        renderItem={({item}) => (
                            <Card
                                image={{ uri: item }}
                                imageStyle={{width: 200, height: 200}}
                                containerStyle={{height: 267}}
                                >
                                <Button full danger onPress={() => this.deleleMeme(item)}>
                                    <Icon name='delete' color='white'/>
                                </Button>
                            </Card>
                        )}
                        keyExtractor={ item => item }
                    />
            </Container>
        );    
    };
}

const styles = StyleSheet.create({

})