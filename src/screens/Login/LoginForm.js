import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';
import { ScrollView } from 'react-native-gesture-handler';
import LoginError from '../../Commons/LoginError/LoginError';
const LoginForm = ({ loginSubmit, wrongPassword }) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.alignCenter}>
          
          <Text style={styles.headingTop}>Restaurant App</Text>
        
        </View>
       
        {wrongPassword === true ? (
            <LoginError />
        ) : (
          <></>
        )}
                <View style={styles.Main}>

        <View style={styles.inputView}>
          <TextInput
            autoCapitalize={'none'}
            style={styles.TextInput}
            value={username}
            placeholder="test@test.com"
            onChangeText={(email) => setUsername(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            value={password}
            placeholder="*****"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('forgotPasswordContainer')
          }
        >
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.alignCenter}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              loginSubmit({
                EmailId: username,
                PasswordHash: password,
              });
            }}
          >
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Sign')
                        }
                                style={styles.loginBtnn}>


                      <Text style={styles.loginText}>SignUp</Text>
                  
                                </TouchableOpacity>


          
           
          </View>
        
          </ScrollView>
        </View>
    </>
  );
};
export default LoginForm;
