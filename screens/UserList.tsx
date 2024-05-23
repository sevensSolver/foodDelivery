import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {HomeMainCategories} from '../components/home/HomeMainCategories';
import {HomeRestaurantsList} from '../components/home/HomeRestaurantsList';
import {COLORS, SIZES, icons} from '../constants';
import {CategoryData, RootTabParamList} from '../types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  categoryData,
  initialCurrentLocation,
  restaurantsWithCategories,
} from '../dummy-data';
import {Header} from '../components/common/Header';

type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'UserList'
>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};
const userListData = [
  {
    name: 'Gina David',
    email: 'gina@gmail.com',
    city: 'Mohali',
    country: 'United Kingdom',
    joined: '1 year ago',
    time: 'Jul 04 2004',
    pincode: 'F4 75 WS',
    age: '25',
    img: require('../assets/images/avatar-1.jpg'),
  },
  {
    name: 'Julienne Mark',
    city: 'Menchester',
    email: 'mark@gmail.com',
    country: 'United States',
    joined: '6 month ago',
    time: 'Dec 11 2004',
    pincode: 'KK 1 Street 33',
    age: '33',
    img: require('../assets/images/avatar-2.jpg'),
  },
  {
    name: 'John Stewart',
    email: 'gina@gmail.com',
    city: 'Melbern',
    country: 'German',
    joined: '2 year ago',
    time: 'Aug 22 2005',
    pincode: 'J3 Main Market',
    age: '44',
    img: require('../assets/images/avatar-1.jpg'),
  },
  {
    name: 'Buddy Holly',
    email: 'gina@gmail.com',
    city: 'Devas',
    country: 'Canada',
    joined: '3 year ago',
    time: 'Sep 28 2004',
    pincode: '33 JJ Street',
    age: '54',
    img: require('../assets/images/avatar-2.jpg'),
  },
];

const showList = ({item}: any) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserList')}
        style={styles.listMainViewStyle}>
        <View style={styles.imageStyle}>
          <Image
            style={styles.imageStyleOFlist}
            resizeMode="cover"
            source={require('../assets/images/avatar-1.jpg')}
          />
        </View>

        <View style={styles.dependentName}>
          <Text numberOfLines={2} style={styles.listNameTextStyle}>
            {item?.name}
          </Text>
          <Text numberOfLines={1} style={styles.relationStyle}>
            {item?.email}
          </Text>
        </View>

        <View style={styles.rightViewStyle}>
          <Text numberOfLines={2} style={styles.listNameTextStyle}>
            {item?.time}
          </Text>
          <Image
            style={styles.rightIconStyle}
            resizeMode="contain"
            source={require('../assets/images/right.png')}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.bottomLineStyle} />
    </>
  );
};

export const UserList = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header leftIcon={{}} rightIcon={{}} headerText={'Gina David'} />
      <FlatList
        data={userListData}
        renderItem={({item, index}) => {
          console.log('item>>', item);
          let _img = '';
          if (index % 2 === 0) {
            _img = require('../assets/images/avatar-1.jpg');
          } else {
            _img = require('../assets/images/avatar-2.jpg');
          }
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('UserDetails', {item: item})}
                style={styles.listMainViewStyle}>
                <View style={styles.imageStyle}>
                  <Image
                    style={styles.imageStyleOFlist}
                    resizeMode="cover"
                    source={_img}
                  />
                </View>

                <View style={styles.dependentName}>
                  <Text numberOfLines={2} style={styles.listNameTextStyle}>
                    {item?.name}
                  </Text>
                  <Text numberOfLines={1} style={styles.relationStyle}>
                    {item?.email}
                  </Text>
                  <Text numberOfLines={1} style={styles.relationStyle}>
                    {item?.country}
                  </Text>
                </View>

                <View style={styles.rightViewStyle}>
                  <Text numberOfLines={2} style={styles.listNameTextStyle}>
                    {item?.time}
                  </Text>
                  <Image
                    style={styles.rightIconStyle}
                    resizeMode="contain"
                    source={require('../assets/images/right.png')}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.bottomLineStyle} />
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: COLORS.lightGray4,
  },
  mainViewStyle: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  listMainViewStyle: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#E59866',
    display: 'flex',
    flexDirection: 'row',
    height: 75,
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  imageViewStyle: {
    flex: 0.5,
    // backgroundColor: '#E59866',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.h1,
  },
  imageStyleOFlist: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  imageStyle: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleStyle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'gray',
    zIndex: 1000,
    bottom: 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    right: 120,
  },
  bottomViewStyle: {
    flex: 0.5,
    // backgroundColor: '#239B56',
    paddingHorizontal: SIZES.width * 0.05,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  listStyle: {
    flex: 0.2,
    // backgroundColor: '#C3268C',
    paddingHorizontal: SIZES.width * 0.05,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  detailsViewStyle: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailStyle: {
    flex: 0.8,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  detailTextStyle: {
    color: COLORS.black,
    fontSize: 18,
  },
  bottomLineStyle: {
    backgroundColor: COLORS.secondary,
    height: 1,
    width: 360,
    marginTop: 5,
    alignSelf: 'center',
  },
  dependentName: {
    flex: 0.55,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  listNameTextStyle: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  userNameStyle: {
    flex: 0.6,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // backgroundColor: '#C3268C',
  },
  relationStyle: {
    fontSize: 13,
    color: '#707070',
  },
  rightViewStyle: {
    flex: 0.25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#C3268C',
    flexDirection: 'row',
    paddingRight: 15,
  },
  rightIconStyle: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
});
