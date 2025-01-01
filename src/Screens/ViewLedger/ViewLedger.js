import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LedgerCards from '../../Components/LedgerComponents/LedgerCards';

const ViewLedger = ({navigation}) => {
  return (
    <View style={styles.main}>
        <ImageBackground
        source={require('../../Assets/Images/PlainGreen.png')}
        style={styles.image}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backButton}
          >
            <AntDesign name="arrowleft" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Ledger</Text>
        </View>
      </ImageBackground>

      <View style={styles.containerAdjustment}>
        {/* Main ScrollView Section */}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
        >
       <View>
        <LedgerCards />
        <LedgerCards />
        <LedgerCards />
       </View>
        </ScrollView>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    height: 200,
    width: '100%',
  },
  header: {
    height: 30,
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },
  backButton: {
    marginLeft: 15,
  },
  titleContainer: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerAdjustment: {
    marginTop: -100,
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    width: '100%',
    overflow: 'hidden',
  },
  scrollContent: {
    paddingBottom: 100,
  },
})
export default ViewLedger