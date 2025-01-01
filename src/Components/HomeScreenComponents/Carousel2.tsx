import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import Animated, {
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

const SRC_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SRC_WIDTH * 0.8;
const SPACING = SRC_WIDTH * 0.01;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.17) / 2;

interface ItemProps {
  index: number;
  scrollX: number;
  imageSource: any;  // Image source
}

function Item({ index, scrollX, imageSource }: ItemProps) {
  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];

  // Interpolation of size based on scrollX
  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolation.CLAMP
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        cardStyle,
        {
          marginLeft: index == 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: index == 2 ? SIDECARD_LENGTH : SPACING,
        },
      ]}
    >
      <Image
        source={imageSource} // Use the image source passed as a prop
        style={{ width: '100%', height: '100%' }}
      />
    </Animated.View>
  );
}

const Carousel2 = () => {
  const [scrollX, setScrollX] = useState(0);

  const DATA = [
    {
      id: '1',
      title: 'First Item',
      image: require('../../Assets/Images/ann1.jpeg'),  // First image
    },
    {
      id: '2',
      title: 'Second Item',
      image: require('../../Assets/Images/ann2.jpeg'),  // Second image
    },
    {
      id: '3',
      title: 'Third Item',
      image: require('../../Assets/Images/ann4.jpeg'),  // Third image
    },
  ];

  const scrollXValue = useSharedValue(0);

  return (
    <View>
      <AnimatedFlatlist
        scrollEventThrottle={16}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING * 7.1}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={'center'}
        data={DATA}
        //@ts-ignore
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          //@ts-ignore
          return <Item index={index} scrollX={scrollX} imageSource={item.image} />;  // Pass the image source
        }}
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          setScrollX(offsetX);
        }}
      />
      
      {/* Dot Indicator */}
      <View style={styles.dotContainer}>
        {DATA.map((_, i) => {
          const inputRange = [
            (i - 1) * (CARD_LENGTH + SPACING),
            i * (CARD_LENGTH + SPACING),
            (i + 1) * (CARD_LENGTH + SPACING),
          ];
          
          const dotScale = interpolate(
            scrollX,
            inputRange,
            [0.8, 1.2, 0.8],
            Extrapolation.CLAMP
          );
          
          const dotStyle = {
            transform: [{ scale: dotScale }],
            backgroundColor: i * (CARD_LENGTH + SPACING) === scrollX ? '#999' : '#999',
          };

          return (
            <Animated.View key={i.toString()} style={[styles.dot, dotStyle]} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 125,
    overflow: 'hidden',
    borderRadius: 30,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#999',
  },
});

export default Carousel2;
