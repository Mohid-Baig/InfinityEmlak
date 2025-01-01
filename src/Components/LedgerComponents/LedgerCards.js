import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const LedgerCards = () => {
  const navigation= useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <View style={styles.projectInfo}>
          <View style={styles.iconContainer}>
            <Entypo name="documents" size={25} color="white" />
          </View>
          <View style={styles.projectTextContainer}>
            <Text style={styles.projectTitle}>Project Name.</Text>
            <Text style={styles.projectCode}>F19-SBA-05</Text>
          </View>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberLabel}>No. </Text>
          <Text style={styles.number}>0062422</Text>
        </View>
      </View>

      <View style={styles.amountContainer}>
        <View style={styles.amountSection}>
          <Text style={styles.amountLabel}>Rec.Amnt:</Text>
          <Text style={styles.receivedAmount}>0.0056</Text>
        </View>
        <View style={styles.amountSection}>
          <Text style={styles.amountLabel}>Pend.Amnt:</Text>
          <Text style={styles.pendingAmount}>0.0056</Text>
        </View>
        <View style={styles.amountSection}>
          <Text style={styles.totalAmountLabel}>Tot.Amount:</Text>
          <Text style={styles.totalAmount}>15,467,000</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailsButton}>
          <Text style={styles.detailsText}>Details</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton} onPress={()=>navigation.navigate('LedgerCardsDetails')}>
          <AntDesign name="arrowright" color="#fff" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LedgerCards;

const styles = StyleSheet.create({
  main: {
    height: 182,
    width: '100%',
    backgroundColor: '#f7f7f7',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 7,
    marginTop: 15,
  },
  headerContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  projectInfo: {
    flexDirection: 'row',
    marginLeft: 7,
  },
  iconContainer: {
    height: 40,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#157B63',
    borderRadius: 5,
  },
  projectTextContainer: {
    marginLeft: 5,
  },
  projectTitle: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
  },
  projectCode: {
    fontSize: 13,
    color: '#808080',
    fontWeight: 'bold',
    marginTop: 1,
  },
  numberContainer: {
    flexDirection: 'row',
    marginTop: -15,
    alignItems: 'center',
  },
  numberLabel: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
  },
  number: {
    fontSize: 13,
    color: 'grey',
    fontWeight: 'bold',
  },
  amountContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    marginTop: 2,
  },
  amountSection: {
    alignItems: 'center',
  },
  amountLabel: {
    color: '#adadad',
    fontSize: 13,
  },
  receivedAmount: {
    color: '#0A4A25',
    fontSize: 11,
  },
  pendingAmount: {
    color: 'red',
    fontSize: 11,
  },
  totalAmountLabel: {
    color: 'grey',
    fontSize: 13,
    fontWeight: 'bold',
  },
  totalAmount: {
    color: 'blue',
    fontSize: 12,
  },
  detailsContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    marginTop: 2,
  },
  detailsButton: {
    height: 35,
    width: 220,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#157B63',
    borderRadius: 5,
  },
  detailsText: {
    fontSize: 15,
    color: '#0A4A25',
  },
  arrowButton: {
    height: 35,
    width: 37,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#157B63',
    marginLeft: 5,
    borderRadius: 5,
  },
});
