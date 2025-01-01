import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Switch} from 'react-native-switch';

const OnOffSwitch = () => {
  const [value, setValue] = useState(true);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text>MyProperty</Text>
    <Switch value={value} onValueChange={() => setValue(!value)} 
      renderActiveText={false}
      renderInActiveText={false}
      barHeight={25}
      circleSize={25}
     backgroundActive='#cccccc'
     backgroundInactive='#cccccc'
     circleActiveColor='blue'
     circleInActiveColor='#4d4d4d'
     switchWidthMultiplier={2}
      />
  </View>
  );
};

export default OnOffSwitch;

