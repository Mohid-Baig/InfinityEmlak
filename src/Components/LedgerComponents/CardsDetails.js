import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TransactionDetails from './TransactionDetails';

const CardsDetails = ({navigation}) => {
    const data = [
        {
          id: 1,
          icon: <MaterialCommunityIcons name="cash-multiple" size={35} color="black"/>,
          title: 'Tot.Amount',
          Number: '15,528,00 PKR',
          NbrText: '#27e677',
          backcolor: '#157B63',
          TitleColor: '#fff'
        },
        {
          id: 2,
          icon: <MaterialCommunityIcons name="account-cash" size={35} color="#000" />,
          title: 'Paid',
          Number: '15,528,00 PKR',
          NbrText: '#000',
          backcolor: 'grey',
          TitleColor: '#fff'
        },
        {
          id: 3,
          icon: <AntDesign name="clockcircleo" size={35} color="orange" />,
          title: 'Pending',
          Number: '15,528,00 PKR',
          NbrText: '#000',
          backcolor: 'orange',
          TitleColor: '#fff'
        },
      ];

  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../Assets/Images/PlainGreen.png')}
        style={styles.image}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewLedger')}
            style={styles.backButton}>
            <AntDesign name="arrowleft" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Ledger</Text>
        </View>
      </ImageBackground>

      <View style={styles.containerAdjustment}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.infoContainer}>
            <Text style={styles.hypermarketText}>
              LG-Hypermarket-1
            </Text>
            <Text style={styles.idText}>
              AAY1075454000
            </Text>
          </View>
          <View style={styles.cardContainer}>
            {data.map((item, index) => (
              <View
                key={item.id}
                style={[styles.card, {backgroundColor: item.backcolor}]}>
                <View style={styles.iconContainer}>
                  {item.icon}
                </View>
                <View >
                <Text style={[styles.cardTitle, {color: item.TitleColor}]}>
                  {item.title}
                </Text>
                <Text style={[styles.cardNumber, {color: item.NbrText}]}>
                  {item.Number}
                </Text>
                </View>
              </View>
            ))}
          </View>
          <Text style={{fontSize:20,color:'#000',fontWeight:'bold'}}>Transaction</Text>
        <View style={{marginTop:10}}>
            <TransactionDetails backcolor={'#16a4dd'} AmountName={'Booking Amount'} />
            <TransactionDetails backcolor={'#0A4A25'}  AmountName={'Installement'}/>
            <TransactionDetails backcolor={'red'}  AmountName={'Booking Amount'} />
            <TransactionDetails backcolor={'purple'}  AmountName={'Installement'}/>
            <TransactionDetails backcolor={'orange'}  AmountName={'Booking Amount'} />
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

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
  infoContainer: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 15,
    marginBottom: 5,
  },
  hypermarketText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '800',
  },
  idText: {
    color: 'grey',
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardContainer: {
    height: 170,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20,
  },
  card: {
    height: 140,
    width: 118,
    borderRadius: 25,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 15,
    marginHorizontal: 5,
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },
  cardTitle: {
    fontSize: 12,

  },
  cardNumber: {
    fontSize: 13,
  },
});

export default CardsDetails;
