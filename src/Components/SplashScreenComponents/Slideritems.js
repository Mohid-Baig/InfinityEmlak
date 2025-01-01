import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const Slideritems = ({ image, index, currentIndex }) => {
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = currentIndex;
  }, [currentIndex]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animation.value == index ? withSpring(2) : withSpring(1), // Scale horizontally but not height
        },
      ],
    };
  });

  return (
    <View style={{justifyContent:'flex-end',marginBottom:-70}}>
    <Animated.View style={[styles.container, animatedStyle]}>
      <Image source={image} style={styles.image} />
    </Animated.View>
    </View>
  );
};

export default Slideritems;

const styles = StyleSheet.create({
  container: {
    width,  // Full screen width
    height: 550,  // Set a fixed height for consistency
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  image: {
    width: '50%',  // Set width to allow some space for scaling
    height: '100%', // Keep the height fixed
    resizeMode: 'contain',  // Ensure the images are contained properly
  },
});
