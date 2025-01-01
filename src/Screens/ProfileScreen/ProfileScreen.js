import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OnOffSwitch from '../../Components/ProfileScreenComponent/OnOffSwitch';
import ProfileCollapsaible from '../../Components/ProfileScreenComponent/ProfileCollapsaible';

const ProfileScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      icon: <FontAwesome name="phone-square" size={35} color="#b3b3b3" style={styles.icon} />,
      label: 'Phone',
      value: '030256 ******',
    },
    {
      id: 2,
      icon: <MaterialCommunityIcons name="bag-checked" size={37} color="#b3b3b3" style={styles.icon} />,
      label: 'Job',
      value: 'Business',
    },
    {
      id: 3,
      icon: <AntDesign name="user" size={35} color="#b3b3b3" style={styles.icon} />,
      label: 'Nationality',
      value: 'Pakistan',
    },
  ];
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../Assets/Images/ProfileScreenBackground.png')}
        style={styles.image}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backButton}>
            <AntDesign name="arrowleft" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Profile</Text>
        </View>
      </ImageBackground>

      <View style={styles.containerAdjustment}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileInfoContainer}>
            <View style={styles.ProfilePic}>
              <Image
                source={require('../../Assets/Images/BlankProfile.jpeg')}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.profileName}>Muhammad Anwer</Text>
            <Text style={styles.profileEmail}>asadanwer@gmail.com</Text>
          </View>
          <View
            style={{
              height: 35,
              width: '100%',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <View>
              <OnOffSwitch />
            </View>
          </View>
          <View style={{ height: 180, width: '100%' }}>
      {data.map(item => (
        <View key={item.id} style={styles.Details}>
          {item.icon}
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.label}</Text>
            <Text style={styles.number}>{item.value}</Text>
          </View>
        </View>
      ))}
    </View>
    <View style={{marginTop:10}}>
      <ProfileCollapsaible />
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
    marginTop: 0,
    
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerAdjustment: {
    marginTop: -100,
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    width: '100%',
    overflow: 'hidden',
    height: '100%',
  },
  scrollContent: {
    paddingBottom: 300,
  },
  profileInfoContainer: {
    height: 180,
    width: '100%',
    alignItems: 'center',
  },
  ProfilePic: {
    height: 120,
    width: 120,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    overflow: 'hidden',
  },
  profileImage: {
    height: 130,
    width: 130,
  },
  profileName: {
    color: '#000',
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 17,
  },
  profileEmail: {
    color: '#cccccc',
    fontSize: 17,
  },
  Details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
    color:'#cccccc'
  },
  number: {
    fontSize: 15,
    color:'#000'
  },
});

export default ProfileScreen;
