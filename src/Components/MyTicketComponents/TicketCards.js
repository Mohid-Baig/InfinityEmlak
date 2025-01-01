import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

const TicketCards = ({TaskName}) => {
  return (
    <View style={styles.TaskCards}>
      <View style={styles.headerContainer}>
        <Text style={styles.taskName}>{TaskName}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>24-03-2024</Text>
        </View>
      </View>
      <Text style={styles.infoText}>
        Task No.{'     '}
        <Text style={styles.subInfoText}>00000</Text>
      </Text>
      <Text style={styles.infoText}>
        Task Name.{'     '}
        <Text style={styles.subInfoText}>Testing Task</Text>
      </Text>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Feather name="edit" color={'#fff'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketCards;

const styles = StyleSheet.create({
  TaskCards: {
    height: 167,
    width: '100%',
    backgroundColor: '#fafafa',
    borderRadius: 25,
    padding: 12,
    borderBottomColor: '#0A4A25',
    borderWidth: 0.1,
    borderBottomWidth: 2.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 20,
  },
  headerContainer: {
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskName: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  dateContainer: {
    height: 22,
    width: 90,
    backgroundColor: '#D1F5DD',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  dateText: {
    fontSize: 12,
    color: '#cccccc',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginTop: 3,
  },
  subInfoText: {
    fontSize: 13,
    color: '#cccccc',
  },
  bottomContainer: {
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  statusButton: {
    backgroundColor: '#f0f0f0',
    height: 30,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 25,
    borderBottomColor: '#0A4A25',
    borderWidth: 0.1,
    borderBottomWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  statusText: {
    color: '#000',
  },
  editButton: {
    height: 40,
    width: 40,
    backgroundColor: '#157B63',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 15,
  },
});
