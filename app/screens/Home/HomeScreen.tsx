import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Pro';
import {styles} from './HomeStyles';
import modules from '../../modules';

type Props = {};

const HomeScreen = (props: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled((previousState: any) => !previousState);

  return (
    <View style={styles.body}>
      <View style={styles.topSearchBox}>
        <AntDesign name="search1" size={20} color={'black'} />
        <View style={{flex: 1}}>
          <Text style={styles.whereToText}>Where to?</Text>
          <Text style={styles.subWhereToText}>
            Anywhere - Anyweek - Add guests
          </Text>
        </View>
        <View>
          <Ionicons name="filter" size={23} color={'black'} />
        </View>
      </View>

      <ScrollView horizontal={true} style={styles.containerScroll}>
        <View style={[styles.topNavBar]}>
          <TouchableOpacity style={styles.textNavBtnStart}>
            <MaterialIcons
              name="local-fire-department"
              size={25}
              color={'black'}
            />
            <Text style={styles.textNavTop}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textNavBtnStart}>
            <FontAwesome name="building-o" size={25} color={'black'} />
            <Text style={styles.textNavTop}>Design</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textNavBtnStart}>
            <MaterialCommunityIcons
              name="eiffel-tower"
              size={25}
              color={'black'}
            />
            <Text style={styles.textNavTop}>Iconic cities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textNavBtnStart}>
            <MaterialIcons name="house" size={25} color={'black'} />
            <Text style={styles.textNavTop}>Cabins</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textNavBtnStart}>
            <MaterialCommunityIcons
              name="waterfall"
              size={25}
              color={'black'}
            />
            <Text style={styles.textNavTop}>Beachfront</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textNavBtnStart}>
            <MaterialCommunityIcons
              name="snowboard"
              size={25}
              color={'black'}
            />
            <Text style={styles.textNavTop}>Surfing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textNavBtnStart}>
            <Foundation name="mountains" size={25} color={'black'} />
            <Text style={styles.textNavTop}>Cave</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textNavBtnStart}>
            <MaterialCommunityIcons
              name="sail-boat"
              size={25}
              color={'black'}
            />
            <Text style={styles.textNavTop}>Boats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textNavBtnStart}>
            <MaterialIcons name="house-siding" size={25} color={'black'} />
            <Text style={styles.textNavTop}>Farm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView>
        <View style={styles.boxToggle}>
          <View style={{flex: 1}}>
            <Text style={styles.boxToggleText1}>Display total price</Text>
            <Text style={styles.boxToggleText2}>
              includes all fees, before taxes
            </Text>
          </View>
          <View style={styles.containerToggle}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <Image source={modules.IMAGE1} style={styles.imageKoh} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={modules.IMAGE1} style={styles.imageKoh} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={modules.IMAGE1} style={styles.imageKoh} />
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.descriptionDetails}>
          <Text style={styles.locationText}>Koh Samui, Thailand</Text>
          <Text style={styles.designerText}>
            Designed by Gary Fell, GFAB Architects
          </Text>
          <Text style={styles.stayingDateText}>5 nights - Mar 26 - 31</Text>
          <Text style={styles.priceTaxText}>
            <Text style={styles.priceNum}>$19,99</Text> total before taxes
          </Text>
        </View>

        <ScrollView horizontal={true}>
          <TouchableOpacity>
            <Image source={modules.IMAGE1} style={styles.imageKoh} />
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.descriptionDetails}>
          <Text style={styles.locationText}>Krong Siem Reap, Cambodia</Text>
          <Text style={styles.designerText}>
            Premier Deluxe Double Pool View {'\n'}1 bed
          </Text>
          <Text style={styles.stayingDateText}>Apr 26 - 31</Text>
          <Text style={styles.priceTaxText}>
            <Text style={styles.priceNum}>$101 night</Text> night total before
            taxes
          </Text>
        </View>

        <TouchableOpacity>
          <Image source={modules.IMAGE1} style={styles.imageKoh} />
        </TouchableOpacity>
        <View style={styles.descriptionDetails}>
          <Text style={styles.locationText}>Bali, Indonasia</Text>
          <Text style={styles.designerText}>
            Wooden House with Pool View in...
          </Text>
          <Text style={styles.stayingDateText}>
            2 Queen Beds for 2 people (1). Private...
          </Text>
          <Text style={styles.priceTaxText}>
            <Text style={styles.priceNum}>$200</Text> night total before taxes
          </Text>
        </View>
      </ScrollView>

      {/* <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.textNavBtnEnd}>
          <AntDesign name="search1" size={23} color={'black'} />
          <Text style={styles.textNavBot}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textNavBtnEnd}>
          <AntDesign name="hearto" size={23} color={'black'} />
          <Text style={styles.textNavBot}>Wishlists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textNavBtnEnd}>
          <FontAwesome5Brands name="airbnb" size={23} color={'black'} />
          <Text style={styles.textNavBot}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textNavBtnEnd}>
          <MaterialCommunityIcons
            name="message-reply-outline"
            size={23}
            color={'black'}
          />
          <Text style={styles.textNavBot}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textNavBtnEnd}>
          <FontAwesome name="user-o" size={23} color={'black'} />
          <Text style={styles.textNavBot}>Profile</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default HomeScreen;
