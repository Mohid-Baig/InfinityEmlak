import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import HomeCarousel from '../../Components/HomeScreenComponents/HomeCarousel';
import CategoriesButtons from '../../Components/HomeScreenComponents/CategoriesButtons';
import Collapsaible from '../../Components/HomeScreenComponents/Collapsaible';
import Collapsaible2 from '../../Components/HomeScreenComponents/Collapsaible2';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel2 from '../../Components/HomeScreenComponents/Carousel2';

const HomeScreen = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Get the current date
    const date = new Date();

    // Format the date (e.g., "Tuesday, Aug 20, 2024")
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Set the date state
    setCurrentDate(formattedDate);
  }, []); // The empty array ensures this runs only once when the component mounts

  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../Assets/Images/homeheaderbackground.png')}
        style={styles.image}>
        <View style={styles.EmlakLogoContainer}>
          <Image
            style={styles.EmlakLogo}
            source={require('../../Assets/Images/headerFrame.png')}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
              top: 10,
            }}>
            <Ionicons name="settings-outline" color={'#fff'} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderTextName}>
          <Text
            style={{
              color: '#27e677',
              marginBottom: 4,
              fontFamily: 'Inter-Italic-VariableFont_opsz',
            }}>
            Muhammad Anwer
          </Text>

          <View style={styles.welcomeText}>
            <Text style={{fontFamily: 'Lora-MediumItalic', color: '#fff'}}>
              Welcome To
            </Text>
            <Text style={{fontSize: 10}}>{currentDate}</Text>
          </View>
          <Text
            style={{
              fontSize: 17,
              color: '#fff',
              fontFamily: 'Inter_24pt-Bold',
            }}>
            United Actros Developers
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.containerAdjustment}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.childcontainer}>
              <View style={{width: '95%', height: '100%'}}>
                
                <View style={{marginTop:5,backgroundColor:'#fff',height:150,}}>
                  <View style={{marginTop:5}}>
                <Carousel2 />
                </View>
                </View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: '700',
                    fontFamily: 'Roboto-Bold',
                    marginLeft: 15,
                    marginTop: 10,
                  }}>
                  Categories
                </Text>

                <View style={styles.categoriesContainer}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <CategoriesButtons
                      text={'Profile'}
                      path={'Profile'}
                      font={'user-circle'}
                      size={30}
                      fontType={'FontAwesome'}
                    />
                    <CategoriesButtons
                      text={'My Property'}
                      path={'MyProperty'}
                      font={'home'}
                      size={35}
                      fontType={'FontAwesome'}
                    />
                    <CategoriesButtons
                      text={'My Ticket'}
                      path={'MyTicket'}
                      font={'infocirlceo'}
                      size={30}
                      fontType={'AntDesign'}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                    }}>
                    <CategoriesButtons
                      text={'View Ledger'}
                      path={'ViewLedger'}
                      fontType={'MaterialIcons'}
                      size={30}
                      font={'query-stats'}
                    />
                    <CategoriesButtons
                      text={'History'}
                      path={'History'}
                      fontType={'MaterialIcons'}
                      size={35}
                      font={'history'}
                    />
                    <CategoriesButtons
                      text={'Privacy Policy'}
                      path={'PrivacyPolicy'}
                      font={'filetext1'}
                      size={30}
                      fontType={'AntDesign'}
                    />
                  </View>
                </View>
                <View style={{margin: 10, marginTop: 2}}>
                  <Collapsaible />
                  <View style={{marginTop:2}}>
                  <Collapsaible2 />
                  </View>
                </View>
              </View>
            </View>
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
    width: '100%',
    height: 200,
  },
  EmlakLogo: {
    height: 100,
    width: 100,
  },
  EmlakLogoContainer: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
  },
  HeaderTextName: {
    marginTop: 25,
    margin: 20,
  },
  welcomeText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  container: {
    width: '100%',
    backgroundColor: '#E8E8E8',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
  },
  containerAdjustment: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: '23%',
  },
  childcontainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    marginTop: 5,
    alignItems: 'center',
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  categoriesContainer: {
    height: 220,
    width: '100%',
    marginTop: 5,
    padding: 10,
    alignItems: 'center',
  },
});

export default HomeScreen;
