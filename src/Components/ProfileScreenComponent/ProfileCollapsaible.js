import {View, Text, StyleSheet, TouchableOpacity, Animated, KeyboardAvoidingView} from 'react-native';
import React, {useState, useRef} from 'react';
import Collapsible from 'react-native-collapsible';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormLayout from './FormLayout';

const ProfileCollapsaible = () => {
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
        <View style={{marginLeft:100,flexDirection:'row',alignItems:'center'}}>
        <Ionicons name="document-text-outline" size={27} color={'#000'} />
        <Text style={{color: 'black', fontWeight: '800', marginLeft: 5}}>Nominee Details</Text>
        </View>
        <Animated.View
            style={{
              marginLeft: 70,
              transform: [{rotate}], // Apply rotation animation here
            }}>
            <AntDesign name="down" size={15} color={'#000'} />
          </Animated.View>
          
       </View>
       
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} style={{alignItems: 'center'}}>
        <View style={styles.RevealingView}>
         <FormLayout />
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  collapsaible: {
    height: 50,
    width: '100%',
    backgroundColor: '#157B63',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:5
    
  },
  RevealingView: {
    height: 320,
    width: '97%',
    backgroundColor: '#f0f0f0',
    marginTop: 5,
    borderRadius: 10,
    padding: 7,
  },
});

export default ProfileCollapsaible
