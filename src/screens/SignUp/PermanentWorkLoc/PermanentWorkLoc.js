import React, { useState } from 'react';
import styles from './Style';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntIcon from "react-native-vector-icons/AntDesign";
const PermanentWorkLoc = () => {
  const navigation = useNavigation();
  const [permanentAddress, setPermanentAddress] = useState('');
  const [permanentCountry, setPermanentCountry] = useState('');
  const [permanentState, setPermanentState] = useState('');
  const [permanentCity, setPermanentCity] = useState('');
  const [permanentTypeAddress, setPermanentTypeAddress] = useState('');
  const [permanentDistrict, setPermanentDistrict] = useState('');

  return (
    <View style={styles.div}>
      <View style={styles.container}>
        <View>
          <View style={styles.arrowleft}>
            <AntIcon
              name={'arrowleft'}
              size={18}
              color={'#666666'}
              onPress={() => navigation.navigate('family-Information')}
            />
          </View>
          <Text style={styles.headingTop}>Permanent and Working{"\n"}Location</Text>
        </View>
      </View>
      <View style={styles.physical}>
        <Text style={styles.text}>Permanent Location</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Country</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Loerm ipsum dolor sit amset." 
          value={permanentCountry}
          onChangeText={(permanentCountry)=>setPermanentCountry(permanentCountry)}
          />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>State</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Loerm ipsum dolor sit amset." 
          value={permanentState}
          onChangeText={(permanentState)=>setPermanentState(permanentState)}/>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>District</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="India"
          value={permanentDistrict}
          onChangeText={(permanentDistrict)=>setPermanentDistrict(permanentDistrict)} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>City</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Meghalaya" 
          value={permanentCity}
          onChangeText={(permanentCity)=>setPermanentCity(permanentCity)}/>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Address</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="East Godavery" 
          value={permanentAddress}
          onChangeText={(permanentAddress)=>setPermanentAddress(permanentAddress)}/>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>City</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Cherrapunji" />
      </View>
      <View style={styles.physical}>
        <Text style={styles.text}>Working Location</Text>
      </View>
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => navigation.navigate('otpScreen')}>
        <Text style={styles.loginText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
};
export default PermanentWorkLoc;


