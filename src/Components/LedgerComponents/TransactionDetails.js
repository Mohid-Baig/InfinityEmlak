import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TransactionDetails = ({backcolor,AmountName}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.topBox, {backgroundColor: backcolor}]}></View>
      <View style={styles.detailBox}>
        <View style={styles.bookingRow}>
          <Text style={styles.bookingText}>{AmountName}</Text>
          <View style={styles.calendarRow}>
            <View style={styles.calendarIcon}>
              <AntDesign name="calendar" size={25} color="#0A4A25" />
            </View>
            <Text style={styles.dateText}>Mar,24</Text>
          </View>
        </View>
        <View style={styles.amountRow}>
          <View style={styles.amountItem}>
            <Text style={styles.amountTitle}>Due Amount</Text>
            <Text style={[styles.amountValue, {color: 'red'}]}>75,000.00</Text>
          </View>
          <View style={styles.amountItem}>
            <Text style={styles.amountTitle}>Rec.Amount</Text>
            <Text style={[styles.amountValue, {color: '#16a4dd'}]}>75,000.00</Text>
          </View>
          <View style={styles.amountItem}>
            <Text style={styles.amountTitle}>Bal.Amount</Text>
            <Text style={[styles.amountValue, {color: 'green'}]}>75,000.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  topBox: {
    height: 50,
    width: 60,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  detailBox: {
    height: 105,
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    borderTopLeftRadius:0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: -48,
    marginLeft: 2,
  },
  bookingRow: {
    height: 40,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor:'pink'
  },
  bookingText: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
  },
  calendarRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  dateText: {
    fontSize: 17,
    color: '#000',
    marginLeft: 5,
  },
  amountRow: {
    marginTop: 0,
    height: 50,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor:'blue'
  },
  amountItem: {
    alignItems: 'center',
  },
  amountTitle: {
    fontSize: 15,
    color: 'grey',
  },
  amountValue: {
    fontSize: 13,
    fontFamily: 'Lora-MediumItalic',
  },
});
