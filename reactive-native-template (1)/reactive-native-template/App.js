import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	textAlign: 'center', 
	fontWeight: 'bold',
	fontSize: 50,
	backgroundColor: 'pink',width: 300,
  height: 300,
  /*Add the border radius for left right of top and bottom*/
  borderTopLeftRadius:50,
  borderTopRightRadius:50,
  borderBottomRightRadius:50,
  borderBottomLeftRadius:50,
 /*Add font as Times New Roman*/ 
 fontStyle:'Times New Roman',
    /*Add the shadowcolor */
  textShadowColor:'black',
    
  textShadowOffset:{width: 10, height: 10},
    textShadowRadius:8,
    }}>HAPPY BIRTHDAY MY DEAR FRIEND:)</Text>
  
    );
  }
}


