import React from 'react';
import styles from './Style';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { Razorpay } from 'razorpay-checkout';
import Navigation from '../../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';

const List = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.div}>
      <ScrollView>
 
        <View style={styles.container}>
        <TouchableOpacity >
                <View style={styles.evil} onPress={''}>
                  <EvilIcons name={'navicon'} size={32} color={'black'} />
                </View>
              </TouchableOpacity>
          <View style={styles.alignCenter}>
 
            <Text style={styles.headingTop}>Restaurant App
             
            </Text>
              </View>
          
          </View>
      
       

<View style={styles.pics}>

<ImageBackground
    source={{
        uri: 
        'https://png.pngtree.com/png-vector/20190621/ourmid/pngtree-fast-food-poster-design-with-burger-and-fries-character-colorful-png-image_1508356.jpg '			}}

    resizeMode="stretch"
    style={styles.images}>
      <View style={styles.infoContainer}>
      <TouchableOpacity
          onPress={() =>
            navigation.navigate('viewItem')
          }
        >
        <Text style={styles.name}>burger</Text>
        </TouchableOpacity>

      </View>

</ImageBackground>

<ImageBackground
    source={{
        uri: 
        'https://png.pngtree.com/png-clipart/20190906/original/pngtree-ramen-poached-egg-food-simple-and-delicious-japanese-food-png-image_4561643.jpg'			}}

    resizeMode="stretch"
    style={styles.images}>
      <View style={styles.infoContainer}>\
      <TouchableOpacity
          onPress={() =>
            navigation.navigate('viewItem')
          }
        >
        <Text style={styles.name}>Soup</Text>
        </TouchableOpacity>

      </View>
      

</ImageBackground>



</View>
<View style={styles.pics}>

<ImageBackground
    source={{
        uri: 
        'https://png.pngtree.com/png-vector/20190621/ourmid/pngtree-fast-food-poster-design-with-burger-and-fries-character-colorful-png-image_1508356.jpg '			}}

    resizeMode="stretch"
    style={styles.images}>
     
     <TouchableOpacity  onPress={()=>  navigation.navigate ('')}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>burger</Text>
      </View>
      </TouchableOpacity>

</ImageBackground>

<ImageBackground
    source={{
        uri: 
        'https://png.pngtree.com/png-clipart/20190906/original/pngtree-ramen-poached-egg-food-simple-and-delicious-japanese-food-png-image_4561643.jpg'			}}

    resizeMode="stretch"
    style={styles.images}>
       <TouchableOpacity  onPress={()=>  navigation.navigate ('')}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Soup</Text>
      </View>
      </TouchableOpacity>
      

</ImageBackground>



</View>

      </ScrollView>
    </View>

  );
};
export default List;