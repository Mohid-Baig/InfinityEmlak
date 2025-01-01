import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const CategoriesButtons = ({text, path, font, size, fontType}) => {
  const navigation = useNavigation();
  const renderIcon = () => {
    if (fontType === 'FontAwesome') {
      return <FontAwesome name={font} size={size} color="#157B63" />;
    } else if (fontType === 'AntDesign') {
      return <AntDesign name={font} size={size} color="#157B63" />;
    } else if (fontType === 'MaterialIcons') {
      return <MaterialIcons name={font} size={size} color="#157B63" />;
    }
    return null;
  };

  return (
    <TouchableOpacity
      style={styles.CategoriesBtn}
      onPress={() => {
        navigation.navigate(path);
      }}>
      <View style={styles.categoryText}>
        {renderIcon()}
        <Text style={{color: 'black', fontWeight: '700'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesButtons;

const styles = StyleSheet.create({
  CategoriesBtn: {
    height: 90,
    width: 110,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    height: 250,
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 2,
  },
});
