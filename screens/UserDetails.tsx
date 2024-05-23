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
  'UserDetails'
>;

type HomeScreenProps = {
  route: HomeScreenNavigationProp;
  navigation: HomeScreenNavigationProp;
};

export const UserDetails = ({route, navigation}: HomeScreenProps) => {
  const {item} = route.params;

  console.log('props>>', item);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftPress={() => navigation.goBack()}
        leftIcon={icons.back}
        rightIcon={{}}
        headerText={item?.name}
      />
      <ScrollView style={styles.mainViewStyle}>
        <View style={styles.imageViewStyle}>
          <Image
            source={item?.img}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <View style={styles.circleStyle}>
            <Text style={{color: '#fff'}}>{item?.age}</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/download.png')}
              style={styles.downloadIconStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomViewStyle}>
          <View style={styles.bottomLineStyle} />
          <View style={styles.listStyle}>
            {/* <View style={styles.detailsViewStyle}> */}
            <Text style={styles.detailTextStyle}>Email: {'  '}</Text>
            {/* </View>
            <View style={styles.detailStyle}> */}
            <Text style={styles.detailTextStyle}>{item?.email}</Text>
            {/* </View> */}
          </View>

          <View style={styles.listStyle}>
            <Text style={styles.detailTextStyle}>Date Joined: {'  '}</Text>
            <Text style={styles.detailTextStyle}>{item?.joined}</Text>
          </View>

          <View style={styles.listStyle}>
            <Text style={styles.detailTextStyle}>Dob: {'  '}</Text>
            <Text style={styles.detailTextStyle}>{item?.time}</Text>
          </View>

          <Text
            style={{...styles.detailTextStyle, marginLeft: 20, marginTop: 15}}>
            Location
          </Text>
          <View style={styles.bottomLineStyle} />

          <View style={styles.listStyle}>
            <Text style={styles.detailTextStyle}>City: {'  '}</Text>
            <Text style={styles.detailTextStyle}>{item?.city}</Text>
          </View>

          <View style={styles.listStyle}>
            <Text style={styles.detailTextStyle}>State: {'  '}</Text>
            <Text style={styles.detailTextStyle}>Denmark</Text>
          </View>

          <View style={styles.listStyle}>
            <Text style={styles.detailTextStyle}>Country: {'  '}</Text>
            <Text style={styles.detailTextStyle}>{item?.country}</Text>
          </View>

          <View style={styles.listStyle}>
            <Text style={styles.detailTextStyle}>Postcode: {'  '}</Text>
            <Text style={styles.detailTextStyle}>{item?.pincode}</Text>
          </View>
        </View>
      </ScrollView>
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
  imageViewStyle: {
    flex: 0.5,
    // backgroundColor: '#E59866',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.h1,
  },
  imageStyle: {
    width: SIZES.width * 0.4,
    height: SIZES.width * 0.4,
  },
  circleStyle: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'gray',
    zIndex: 1000,
    bottom: 60,
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    right: 120,
  },
  downloadIconStyle: {
    width: 25,
    height: 25,
    marginTop: 20,
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
    backgroundColor: COLORS.black,
    height: 2,
    width: 310,
    marginTop: 5,
    alignSelf: 'center',
  },
});
