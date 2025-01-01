import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const policies = [
  {
    title: 'Personal Data',
    description: 'Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site, such as online chat and message boards.',
  },
  {
    title: 'Personal Information',
    description: 'This includes information you provide when registering for an account, such as your name, email address, phone number, and payment information.',
  },
  {
    title: 'Property Information',
    description: 'Details about properties you list, search for, or express interest in, including location, price, and features.',
  },
  {
    title: 'Usage Data',
    description: 'Information automatically collected when you interact with the App, such as your IP address, device type, operating system, unique device identifiers, and the pages you view.',
  },
  {
    title: 'Location Data',
    description: 'With your consent, we may collect location information from your device to provide location-based services, such as showing properties near you.',
  },
];

const PrivacyPolicy = ({navigation}) => {
  
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../Assets/Images/PlainGreen.png')}
        style={styles.image}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backButton}>
            <AntDesign name="arrowleft" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Privacy Policy</Text>
        </View>
      </ImageBackground>

      <View style={styles.containerAdjustment}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}>
            <View style={styles.PrivacyIconContainer}>
              <View style={{marginLeft:15}}>
              <MaterialCommunityIcons name={'file-document-multiple'} size={60} color={'#0A4A25'} />
              </View>
              <View style={{marginLeft:15}}>
                <Text style={{fontSize:18,color:'#0A4A25',fontWeight:'bold'}}>Terms of Service</Text>
                <Text style={{fontSize:12,color:'#000'}}> Update 05-09-2024</Text>
              </View>
            </View>
            
          <View style={styles.Policycontainer}>
            {policies.map((policy, index) => (
              <View key={index} style={styles.policyItem}>
                <Text style={styles.policyTitle}>• {policy.title}</Text>
                <Text style={styles.policyDescription}>{policy.description}</Text>
              </View>
            ))}
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
    paddingBottom: 20,
  },
  Policycontainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15, // Border radius for smooth edges
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Higher elevation for shadow effect
    marginTop:5
  },
  policyItem: {
    marginBottom: 15,
  },
  policyTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000',
    marginBottom: 5,
  },
  policyDescription: {
    fontSize: 12,
    color: '#000',
  },
  PrivacyIconContainer:{
 height:110,
 width:'100%',
//  backgroundColor:'blue',
 alignItems:'center',
 flexDirection:'row',
 paddingHorizontal:10
  }
});

export default PrivacyPolicy;
