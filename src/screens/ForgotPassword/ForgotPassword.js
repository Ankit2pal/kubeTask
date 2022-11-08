import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ConstantHeader from '../../Commons/Header/ConstantHeader';
import AntIcon from "react-native-vector-icons/AntDesign";
import styles from './Style';
const ForgotPassword = ({ forgotPass }) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  return (
    <View style={styles.container}>
      <ConstantHeader />
      <View style={styles.headingContainer}>
        <View style={styles.arrowleft}>
        <AntIcon 
        name={'arrowleft'}
        size={18} 
        color={'#666666'}
        onPress={() => navigation.navigate('loginFormContainer')}
         />
        </View>
       <View>
       <Text style={styles.headingTop}>Forgot Password</Text> 
        </View>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Email ID</Text>
        <TextInput
          style={styles.TextInput}
          value={username}
          placeholder="test@test.com"
          onChangeText={(email) => setUsername(email)}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          forgotPass({
            email: username,
          })
        }
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>
          Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ForgotPassword;
