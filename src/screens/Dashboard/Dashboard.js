import React from 'react';
import { useDispatch } from 'react-redux';
import { resetLoginDetail } from '.././../redux/modules/loginFormSlice';
import {

  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConstantHeader from '../../Commons/Header/ConstantHeader';
import styles from './Style';
const Dashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signOutUser = () => {
    dispatch(resetLoginDetail());
    navigation.navigate('loginFormContainer');
  };

  return (
   <View>
       <ConstantHeader/>
       <View style={styles.display}>

    	<ImageBackground
			source={{
				uri: 
				'https://png.pngtree.com/png-clipart/20220719/original/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_8385663.png'			}}

			resizeMode="stretch"
			style={styles.img}>

		</ImageBackground>
        <View style={styles.name}>

        <Text style={styles.headingMi}>Welcome</Text>

        <Text style={styles.headingMid}>Rajesh</Text>
        </View>
</View>
		<View style={styles.divBar}>

    <Text style={styles.boxDiv}> 
      <Text style={styles.box1}>3</Text>
    <Text style={styles.box2}>7</Text></Text>
 
  
    <View style={styles.Profile}>


        <Text style={styles.view}>View Profile</Text>
        <Text style={styles.balance}>Balance Profile</Text>
        </View>
        		<View style={styles.div}>

        <Text style={styles.viewProfile}>Viewed Profiles</Text>
        <Text style={styles.moreProfile}>More Profiles</Text></View>
        
         
        <View style={styles.pics}>

        <ImageBackground
			source={{
				uri: 
				'https://png.pngtree.com/background/20211215/original/pngtree-yellow-green-aperture-indian-flag-background-picture-image_1454804.jpg'			}}

			resizeMode="stretch"
			style={styles.images2}>

		</ImageBackground>
    <ImageBackground
			source={{
				uri: 
				'https://png.pngtree.com/background/20220726/original/pngtree-luxury-royal-golden-mandala-background-with-borders-for-invitation-card-design-picture-image_1812137.jpg'			}}

			resizeMode="stretch"
			style={styles.images}>

		</ImageBackground>
    

    </View>
    <View style={styles.pic}>
    <ImageBackground
			source={{
				uri: 
				'https://png.pngtree.com/background/20210711/original/pngtree-wallpaper-pattern-gradient-blue-with-moon-and-islamic-ornament-picture-image_1155517.jpg'			}}

			resizeMode="stretch"
			style={styles.images2}>

		</ImageBackground>
    <ImageBackground
			source={{
				uri: 
				'https://png.pngtree.com/background/20220723/original/pngtree-ramadan-kareem-islamic-background-banner-with-ramadhan-lantern-mosque-eid-mubarak-picture-image_1720785.jpg'			}}

			resizeMode="stretch"
			style={styles.images}>

		</ImageBackground>
      </View>
      <View style={styles.alignCenter} >
        <TouchableOpacity style={styles.loginBtn} onPress={() => signOutUser()}>
          <Text
            style={styles.loginText}
            
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    
        </View>
       
     
    </View>
  );
};
export default Dashboard;