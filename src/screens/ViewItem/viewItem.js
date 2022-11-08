import React from 'react';
import styles from './Style';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Razorpay } from 'razorpay-checkout';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import AntIcon from 'react-native-vector-icons/AntDesign';

const viewItem = ({ navigation, Route }) => {
    
  const handlePayment = (key, razorpayOrderId, amount) => {
    const options = {
      key: 'rzp_test_2VfblauoUl6E9W',
      amount: 10000,
      currency: 'INR',
      handler: (res) => {
        console.log(res);
        const payload = {
          packageId: SessionStorageHandler.getKeyFromStorage('activePack'),
          UserId: formDatas.GUID
        };
        dispatch(fetchGeneratePaymentApi(payload));
        console.log(payload);
        setTimeout(() => {
          navigation.navigate('LoginFormContainer');
        }, 2000);
      },
    }
    const rzr = new Razorpay(options);
    rzr.open();
  }   
  
 
  return (
    <View>
        
      <ImageBackground
      
        source={{
          uri: 'https://png.pngtree.com/png-vector/20190621/ourmid/pngtree-fast-food-poster-design-with-burger-and-fries-character-colorful-png-image_1508356.jpg ',
        }}
        resizeMode="stretch"
        style={styles.img}
      >
        <View style={styles.arrowleft}>
              <AntIcon
                name={'arrowleft'}
                size={18}
                color={'#666666'}
                onPress={() => navigation.navigate('Welcome')}
              />
            </View>
      </ImageBackground>
      <View style={styles.divBar}>

        <Text style={styles.headingDown}>Burger</Text>
        <Text style={styles.headingMiddle}>
          $100
        </Text>
    
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={() => handlePayment()}
          >
            Order Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default viewItem;
