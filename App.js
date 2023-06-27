import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const WaterCalculator = () => {
  const [totalWater, setTotalWater] = useState(0);

  const addWater = (amount) => {
    setTotalWater(totalWater + amount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Água é Saúde
      </Text>

      <Image
        source={require('./assets/ZeGotinha.jpeg')}
        style={styles.image}
      />
      <Text style={styles.textWater}>
        Clique no bõtão abaixo de acordo com a quantidade de ml consumida
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="200ml"
          onPress={() => addWater(200)}
        />

        <View style={styles.buttonSpacer} />

        <Button
          title="500ml"
          onPress={() => addWater(500)}
        />

        <View style={styles.buttonSpacer} />

        <Button
          title="700ml"
          onPress={() => addWater(700)}
        />
      </View>

      <Text style={styles.totalWater}>
        Consumo: {totalWater / 1000} litros
      </Text>
      <Text style={styles.totalWater}>
        Ruan Felipe Silva Negrão
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  totalWater: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 30,
    fontWeight: 'bold'
  },
  textWater: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonSpacer: {
    width: 10,
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold',
    backgroundColor: '#1e90ff',
    color: '#fff',
    textAlign: 'center',
    width: '110%',
    padding: 10,
  },
  image: {
    width: 500,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default WaterCalculator;
