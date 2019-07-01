import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  state = {
    minutes: 10,
    seconds: 5,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState({
          seconds: seconds - 1,
        });
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState({
            minutes: minutes - 1,
            seconds: 59,
          });
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <View style={styles.container}>
        {minutes === 0 && seconds === 0 ? (
          <Text>Terminé!</Text>
        ) : (
          <Text style={styles.text}>
            Temps restant: {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e272e',
  },
  text: {
    color: '#808e9b',
    fontSize: 30,
  },
});
