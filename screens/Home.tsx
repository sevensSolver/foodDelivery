import React, {useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {HomeMainCategories} from '../components/home/HomeMainCategories';
import {HomeRestaurantsList} from '../components/home/HomeRestaurantsList';
import {COLORS, icons} from '../constants';
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
  'Home'
>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const benefitsData = [
  {
    id: 0,
    title: 'After Hours Visits',
    subTitle: 'used of your After hour visits benefit.',
    annualLimit: '3',
    usedLimit: '0',
    isExpend: false,
  },
  {
    id: 1,
    title: 'Breathing Device',
    subTitle: 'used of your After hour visits benefit.',
    annualLimit: '3',
    usedLimit: '0',
    isExpend: false,
  },
  {
    id: 2,
    title: 'COVID Antigen Testing',
    subTitle: 'used of your After hour visits benefit.',
    annualLimit: '3',
    usedLimit: '0',
    isExpend: false,
  },
  {
    id: 3,
    title: 'Over Counter Medication',
    subTitle: 'used of your After hour visits benefit.',
    annualLimit: '3',
    usedLimit: '0',
    isExpend: false,
  },
  {
    id: 4,
    title: 'After Hours Visits',
    subTitle: 'used of your After hour visits benefit.',
    annualLimit: '3',
    usedLimit: '0',
    isExpend: false,
  },
];

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [categories, setCategories] = useState(categoryData);
  const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(
    null,
  );
  const [restaurants, setRestaurants] = useState(restaurantsWithCategories);
  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );

  function onSelectCategory(category: CategoryData) {
    const restaurantList = restaurantsWithCategories.filter((restaurant) =>
      restaurant.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }

  // const showRelationList = ({item: any}) => {
  //   console.log('item list >>>', item);
  //   return (
  //     <View style={styles.flatListMainViewStyle}>
  //       <TouchableOpacity
  //         onPress={() => {
  //           navigate('DependantDetail', {
  //             userDetail: item,
  //             getDependent: this.getAllDependentApi,
  //           }),
  //             setDependantDetails(item);
  //         }}
  //         // onPress={() => this.handleAddDependent()}
  //         style={styles.mainViewOFList}>
  //         <View style={styles.imageStyle}>
  //           <Image
  //             style={styles.imageStyleOFlist}
  //             resizeMode="cover"
  //             source={img}
  //             // source={{uri: item?.documents[0]?.url}}
  //           />
  //           {/* {statusIcon} */}
  //           {/* <ActiveSVG
  //           width={17}
  //           style={styles.batch}
           
  //         /> */}
  //         </View>

  //         <View style={styles.dependentName}>
  //           <Text numberOfLines={2} style={styles.listNameTextStyle}>
  //             {item?.name}
  //           </Text>
  //           <Text numberOfLines={1} style={styles.relationStyle}>
  //             {item?.relation}
  //             {/* {item?.type} */}
  //           </Text>

  //           {/* <View
  //             style={{
  //               flex: 0.4,
  //               // backgroundColor:'yellow',
  //             }}>
  //             <Text numberOfLines={1} style={styles.relationStyle}>{item?.relation}</Text> */}
  //           {/* <TouchableOpacity style={styles.editMain}
  //              onPress={()=>this.handleAddDependent(item)}>
  //             <EditIcon fill="red" height={20} width={20} />
  //             <Text style={styles.editText}>{' Edit'}</Text>
  //             </TouchableOpacity> */}

  //           {/* <Text style={styles.memberStyle}>
  //             Member Number: {item?.member_number}
  //           </Text> */}
  //           {/* </View> */}
  //         </View>

  //         <View style={styles.cardRight}>
  //           <View
  //             style={{
  //               ...styles.activeButtonStyle,
  //               backgroundColor: _backgroundStatus,
  //             }}>
  //             <Text
  //               style={[
  //                 styles.activeTextStyle,
  //                 {
  //                   color: _textColor,
  //                   // backgroundColor: _backgroundStatus,
  //                 },
  //               ]}>
  //               {item?.status}
  //             </Text>
  //           </View>
  //           {/* <TouchableOpacity
  //               style={styles.delete}
  //               onPress={() => this.deleteDependent(item?.id)}>
  //               <Delete
  //                 fill={Colors.edenOrange}
  //                 width={Scale(20)}
  //                 height={Scale(20)}
  //               />
  //             </TouchableOpacity> */}
  //         </View>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        leftIcon={icons.nearby}
        rightIcon={icons.basket}
        headerText={currentLocation.streetName}
      />
      <HomeMainCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(category: CategoryData) =>
          onSelectCategory(category)
        }
      />
      {/* <FlatList
        data={benefitsData}
        renderItem={(item: any) => showRelationList(item)}
      /> */}
      <HomeRestaurantsList
        restaurants={restaurants}
        onPress={(item) =>
          navigation.navigate('Restaurant', {
            item,
            currentLocation,
          })
        }
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
});
