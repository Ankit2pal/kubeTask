import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntIcon from "react-native-vector-icons/AntDesign";
import styles from './CreateStyle';
const CreateProfile = ({ registerSubmit }) => {
  const navigation = useNavigation();
  const [creatingFor, setCreatingFor] = useState('');
  // const [gender, setGender] = useState('');
  const [groomName, setGroomName] = useState('');
  const [date, setDate] = useState('');
  const [motherTongue, setMotherTongue] = useState('');
  const [religion, setReligion] = useState('');
  const [caste, setCaste] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [village, setVillage] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  return (
    <ScrollView>
      <View style={styles.div}>
        <View style={styles.container}>
          <View>
            <View style={styles.arrowleft}>
              <AntIcon
                name={'arrowleft'}
                size={18}
                color={'#666666'}
                onPress={() => navigation.navigate('Welcome')}
              />
            </View>
            <Text style={styles.headingTop}>Create Profile</Text>
          </View>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>
            Creating For</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Myself"
            value={creatingFor}
            onChangeText={(creatingFor) => setCreatingFor(creatingFor)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Gender</Text>
          <View style={styles.btnView}>
            <Pressable
              style={[styles.genderButtonSelected, styles.mr10]}
            >
              <Text style={styles.buttonTextSelected}>MALE</Text>
            </Pressable>
            <Pressable style={styles.genderButton}>
              <Text style={styles.buttonText}>FEMALE</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>
            Enter Bride/Groom Name
          </Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Xyz"
            value={groomName}
            onChangeText={(groomName) => setGroomName(groomName)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Date of birth</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="(dd/mm/yyyy)"
            value={date}
            onChangeText={(date) => setDate(date)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Mother Tongue</Text>
          <TextInput style={styles.TextInput}
            placeholder="Hindi"
            value={motherTongue}
            onChangeText={(motherTongue) => setMotherTongue(motherTongue)}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Religion</Text>
          <TextInput style={styles.TextInput}
            placeholder="Hindu"
            value={religion}
            onChangeText={(religion) => setReligion(religion)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Caste</Text>
          <TextInput style={styles.TextInput}
            placeholder="Baniya"
            value={caste}
            onChangeText={(caste) => setCaste(caste)}
          />
        </View>
        <View style={styles.inputView}>
          <Text
            style={styles.inputLabel}>Country</Text>
          <TextInput style={styles.TextInput}
            placeholder="India"
            value={country}
            onChangeText={(country) => setCountry(country)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>State</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Telangana"
            value={state}
            onChangeText={(state) => setState(state)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>District</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Hyderabad"
            value={district}
            onChangeText={(district) => setDistrict(district)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>City</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="test"
            value={city}
            onChangeText={(city) => setCity(city)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Village</Text>
          <TextInput style={styles.TextInput}
            placeholder="Xyz"
            value={village}
            onChangeText={(village) => setVillage(village)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Postal Code</Text>
          <TextInput style={styles.TextInput}
            placeholder='0000'
            value={postalCode}
            onChangeText={(postalCode) => setPostalCode(postalCode)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="9758xxxxxx"
            value={phoneNumber}
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Email ID</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="test@test.com"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="*****"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Re-Enter Password</Text>
          <TextInput
            style={styles.TextInput}
            value={rePassword}
            placeholder="*****"
            secureTextEntry={true}
            onChangeText={(rePassword) => setRePassword(rePassword)}
          />
        </View>
        <TouchableOpacity style={styles.continueBtn}
          onPress={() => {
            registerSubmit({
              creatingFor,
              // gender,
              groomName,
              dateOfBirth: date,
              motherTongue,
              religion,
              caste,
              country,
              state,
              district,
              city,
              village,
              postalCode,
              phoneNumber,
              email,
              password,
            });
          }}>
          <Text style={styles.continueText}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default CreateProfile;



