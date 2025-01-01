import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TicketCards from '../../Components/MyTicketComponents/TicketCards';

const MyTicket = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.main}>
      {/* Header Section */}
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
          <Text style={styles.titleText}>My Tickets</Text>
        </View>
      </ImageBackground>

      <View style={styles.containerAdjustment}>
        {/* Main ScrollView Section */}
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.TaskTextandIcon}>
            <Text style={styles.taskTitleText}>Tasks</Text>
            <TouchableOpacity style={styles.iconButton}>
              <Foundation name="indent-more" size={30} color={'#157B63'} />
            </TouchableOpacity>
          </View>
          <View>
            <TicketCards TaskName={'Umer Maqbool'} />
            <TicketCards TaskName={'Umer Maqbool'} /> 
            <TicketCards TaskName={'Umer Maqbool'} />
            <TicketCards TaskName={'Umer Maqbool'} />
          </View>
        </ScrollView>

        <View style={styles.plusIconContainer}>
          <TouchableOpacity style={styles.plusButton} onPress={toggleModal}>
            <AntDesign name="plus" size={30} color={'#0A4A25'} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.ModalContainer}>
            <ScrollView>
              <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <View style={styles.ModalTextContainer}>
                <Text style={styles.ModalText}>Task Name</Text>
                <Text style={[styles.ModalText, styles.descriptionLabel]}>
                  Description :
                </Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter description"
                  value={description}
                  onChangeText={text => setDescription(text)}
                  placeholderTextColor={'#a0a0a0'}
                  multiline={true}
                />
              </View>
              <View style={styles.CreationContainer}>
                <TouchableOpacity style={styles.attachButton}>
                  <Ionicons name="attach" size={30} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.createButton}onPress={toggleModal}>
                  <Text style={styles.createButtonText}>Create</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
  TaskTextandIcon: {
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTitleText: {
    color: '#000',
    fontSize: 25,
    marginLeft: 15,
    fontWeight: '800',
  },
  iconButton: {
    height: 50,
    width: 50,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 15,
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  plusButton: {
    height: 65,
    width: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  modalBackdrop: {
    marginTop: -100,
    flex: 1,
    justifyContent: 'flex-end',
  },
  ModalContainer: {
    height: '79%',
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  ModalTextContainer: {
    height: 60,
    width: '100%',
    marginTop: 10,
  },
  ModalText: {
    color: '#000',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  descriptionLabel: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  input: {
    height: 500,
    width: '95%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    backgroundColor: '#f5f5f5',
    color:'#000'
  },
  CreationContainer: {
    height: 65,
    width: '95%',
    marginTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  attachButton: {
    borderRadius: 5,
    marginRight: 10,
    height: 45,
    width: 40,
    backgroundColor: '#157B63',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    borderRadius: 5,
    marginRight: 10,
    height: 45,
    width: 90,
    backgroundColor: '#157B63',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  closeButton: {
    marginTop: -2,
  },
  closeButtonText: {
    color: '#000',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});

export default MyTicket;
