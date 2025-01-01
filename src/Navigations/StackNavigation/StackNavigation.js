import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BottomTab from '../BottomTab/BottomTab';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';
import MyProperty from '../../Screens/MyProperty/MyProperty';
import MyTicket from '../../Screens/MyTicket/MyTicket';
import ViewLedger from '../../Screens/ViewLedger/ViewLedger';
import History from '../../Screens/History/History';
import PrivacyPolicy from '../../Screens/PrivacyPolicy/PrivacyPolicy';
import CardsDetails from '../../Components/LedgerComponents/CardsDetails';
const Stack= createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='DashBoard' component={BottomTab} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='MyProperty' component={MyProperty} />
      <Stack.Screen name='MyTicket' component={MyTicket} />
      <Stack.Screen name='ViewLedger' component={ViewLedger} />
      <Stack.Screen name='LedgerCardsDetails' component={CardsDetails} />
      <Stack.Screen name='History' component={History} />
      <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})