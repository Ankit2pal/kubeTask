import React from 'react';
import styles from './Style';
import AntIcon from "react-native-vector-icons/AntDesign";
import { Text, View, TouchableOpacity } from 'react-native';
import OTPField from 'react-native-otp-field';



const OtpScreen = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			 <View style={styles.arrowleft}>
              <AntIcon
                name={'arrowleft'}
                size={18}
                color={'#666666'}
                onPress={() => navigation.navigate('PermanentWorking')}
              />
            </View>
			<Text style={styles.headingOtp}>Enter Verification Code</Text>
			<Text style={styles.headingDown}>Please enter the code  that we have send to you</Text>
			<View style={styles.otp}>
				<OTPField
					length={5}
					value={'12345'}
				/>
			</View>
			<View style={styles.verify}>
				<TouchableOpacity style={styles.loginBtn}
				onPress={() =>  navigation.navigate('bottomtab')}>
					<Text style={styles.loginText}  >Verify</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.resendCode}
			onPress={() => navigation.navigate('')}
			>Resend Code</Text>
		</View>
	)
};


export default OtpScreen;
