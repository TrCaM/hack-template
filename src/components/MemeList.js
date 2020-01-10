import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList, List } from 'react-native';
import { Card, Icon, ListItem } from 'react-native-elements';
import { Button, Container } from 'native-base';
import list from './Meme';

export default class MemeList extends Component {
    render() {
        return(
            <Container>
                    <FlatList 
                        data={list}
                        renderItem={({item}) => (
                            <Card
                                image={{ uri: item.url }}
                                imageStyle={{width: 200, height: 200}}
                                containerStyle={{height: 267}}
                                >
                                <Button full danger>
                                    <Icon name='thumb-up' color='white'/>
                                </Button>
                            </Card>
                        )}
                        keyExtractor={ item => item.url }
                    />
            </Container>
        );    
    };
}

const styles = StyleSheet.create({

})