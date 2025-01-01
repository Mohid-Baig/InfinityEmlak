import { Animated, Dimensions, FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import React, { useRef, useEffect } from 'react';
import Slideritems from '../../Components/SplashScreenComponents/Slideritems';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Repeat the same image multiple times in the array
  const data = new Array(10).fill(require('../../Assets/Images/1.png'));

  useEffect(() => {
    let currentIndex = 0;

    // Set interval for auto-scroll
    const interval = setInterval(() => {
      currentIndex += 1;

      flatListRef.current?.scrollToOffset({
        offset: currentIndex * width,
        animated: true,
      });

      // Reset scroll to the start when reaching the end of the list
      if (currentIndex >= data.length) {
        setTimeout(() => {
          flatListRef.current?.scrollToOffset({
            offset: 0,
            animated: false, // Instantly reset scroll without animation
          });
          currentIndex = 0; // Reset index
        }, 500); // Slight delay to complete scroll before reset
      }
    }, 600); // Adjust this interval for speed of scrolling

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <ImageBackground
      source={require('../../Assets/Images/4.jpg')}
      style={styles.image}>
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Slideritems image={item} />
          )}
          scrollEnabled={false} // Disable manual scrolling
        />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
