import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Sign = ({ loginSubmit, wrongPassword }) => {

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.arrowleft}>
              <AntIcon
                name={'arrowleft'}
                size={18}
                color={'#666666'}
                onPress={() => navigation.navigate('LoginFormContainer')}
              />
            </View>
                   <View style={styles.alignCenter}>
                     

          <Text style={styles.headingTop}>SignUp</Text>
        
        </View>
        </ScrollView>

                <View style={styles.Main}>

        <View style={styles.inputView}>
          <TextInput
            autoCapitalize={'none'}
            style={styles.TextInput}
            placeholder="Username"
            onChangeText={(email) => setUsername(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password   "
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ForgotPasswordContainer')
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
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
                    

           
           
          </View>
        </View>
    </>
  );
};
export default Sign;
