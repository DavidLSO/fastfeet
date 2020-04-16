import * as React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Detail from '~/pages/Deliverie/Detail';
import Problem from '~/pages/Deliverie/Problem';
import Confirm from '~/pages/Deliverie/Confirm';
import ListProblem from '~/pages/Deliverie/ListProblem';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

function DeliverieRoutes({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#7D40E7',
        },
        headerLeftContainerStyle: {marginLeft: 20},
      }}>
      <Stack.Screen
        options={{
          headerTitle: 'Detalhes da encomenda',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TabRoutes', {screen: 'Dashboard'});
              }}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
        name="Detail"
        component={Detail}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Informar problema',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Deliverie', {screen: 'Detail'});
              }}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
        name="Problem"
        component={Problem}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Visualizar problemas',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Deliverie', {screen: 'Detail'});
              }}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
        name="ListProblem"
        component={ListProblem}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Confirmar entrega',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Deliverie', {screen: 'Detail'});
              }}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
        name="Confirm"
        component={Confirm}
      />
    </Stack.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#8d41a8',
        keyboardHidesTabBar: true,
        style: {backgroundColor: '#fff'},
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({color}) => (
            <Icon name="dehaze" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="Deliverie" component={DeliverieRoutes} />
    </Stack.Navigator>
  );
}

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);
  return (
    <NavigationContainer>
      {!signed ? <AuthRoutes /> : <MainRoutes />}
    </NavigationContainer>
  );
}
