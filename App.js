import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/Button';
import Scanner from './src/Scanner.js';
import { createStackNavigator, createAppContainer} from 'react-navigation';



class App extends React.Component {
 
  static navigationOptions = {
    title: 'Home'
  }
 
onButtonPress = () => {
  this.props.navigation.navigate('scanner');
}

  render() {
 
    const secret = this.props.navigation.getParam('secret');
 
    return (
      <View style={styles.container}>
      <Text>{secret}</Text>
        <Button 
        title="Scanner"
        onPress={this.onButtonPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  scanner: Scanner
})



export default createAppContainer(Navigation);
