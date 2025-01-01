import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import Collapsible from 'react-native-collapsible';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Collapsaible = () => {
  const [collapsed, setCollapsed] = useState(true);
  const rotateAnim = useRef(new Animated.Value(0)).current; // Initialize animated value

  const toggleExpanded = () => {
    setCollapsed(!collapsed);

    // Animate the rotation from 0 to 180 degrees or vice versa
    Animated.timing(rotateAnim, {
      toValue: collapsed ? 1 : 0, // 1 for expanded, 0 for collapsed
      duration: 300, // Animation duration in milliseconds
      useNativeDriver: true, // Enable native driver for better performance
    }).start();
  };

  // Interpolate the rotation value from 0 (down) to 180 degrees (up)
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View>
      <TouchableOpacity onPress={toggleExpanded}>
        <View style={styles.collapsaible}>
          <View
            style={{
              height: 35,
              width: 45,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
            }}>
            <Ionicons name="cash-outline" size={30} color={'#0A4A25'} />
          </View>
          <Text style={{color: 'black', fontWeight: '800', marginLeft: 5}}>
            Due Payments
          </Text>

          <Animated.View
            style={{
              marginLeft: 157,
              transform: [{rotate}], // Apply rotation animation here
            }}>
            <AntDesign name="down" size={15} color={'#000'} />
          </Animated.View>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} style={{alignItems: 'center'}}>
        <View style={styles.RevealingView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: '500'}}>
              Form No.{' '}
              <Text style={{fontSize: 12, color: '#cccccc'}}>0000</Text>
            </Text>
            <Text style={{fontSize: 14, color: 'black', fontWeight: '500'}}>
              Amount.{' '}
              <Text style={{fontSize: 12, color: 'blue'}}>PKR 600,000</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 7,
            }}>
            <Text style={{fontSize: 14, color: 'black', fontWeight: '500'}}>
              Project.{' '}
              <Text style={{fontSize: 12, color: '#cccccc'}}>Kawait Mall</Text>
            </Text>
            <Text style={{fontSize: 14, color: 'black', fontWeight: '500'}}>
              Due Date.{' '}
              <Text style={{fontSize: 12, color: '#cccccc'}}>21-04-2024</Text>
            </Text>
          </View>
          <View style={{alignItems:'flex-end',marginRight:17,marginTop:7}}>
            <TouchableOpacity style={styles.ArrowIcon}>
            <AntDesign name="arrowright" size={25} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  collapsaible: {
    height: 50,
    width: '100%',
    backgroundColor: '#F2FDF6',
    borderLeftWidth: 5,
    borderLeftColor: '#0A4A25',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:0.2,
    borderColor:'#157B63',
    marginTop:5
  },
  RevealingView: {
    height: 95,
    width: '97%',
    backgroundColor: '#fafafa',
    marginTop: 5,
    borderRadius: 10,
    padding: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom:5
  },
  ArrowIcon:{
    height:25,
    width:45,
    backgroundColor:'#3d46f5',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15
  }
});

export default Collapsaible;
