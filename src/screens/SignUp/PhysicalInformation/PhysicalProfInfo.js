import React, { useState } from 'react';
import styles from './Style';

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntIcon from "react-native-vector-icons/AntDesign";
const PhysicalProfInfo = ({ formSubmit }) => {
    const navigation = useNavigation();
    const [bodyType, setBodyType] = useState('');
    const [complexion, setComplexion] = useState('');
    const [physicalStatus, setPhysicalStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [highestEducation, setHighestEducation] = useState('');
    const [employeeType, setEmployeeType] = useState('');
    const [occupation, setOccupation] = useState('');
    const [annualIncome, setAnnualIncome] = useState('');

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
                                onPress={() => navigation.navigate('createProfile')}
                            />
                        </View>
                        <Text style={styles.headingTop}>Physical And Professional{"\n"}Information</Text>
                    </View>
                </View>
                <View style={styles.physical}>
                    <Text style={styles.text}>Physical Information</Text>
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Body Type</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Athletic"
                        value={bodyType}
                        onChangeText={(bodyType) => setBodyType(bodyType)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Complexion</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Dark"
                        value={complexion}
                        onChangeText={(complexion) => setComplexion(complexion)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Physical Status</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="N/A"
                        value={physicalStatus}
                        onChangeText={(physicalStatus) => setPhysicalStatus(physicalStatus)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Weight(in kg)</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="70"
                        value={weight}
                        onChangeText={(weight) => setWeight(weight)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Height(in cm)</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="124"
                        value={height}
                        onChangeText={(height) => setHeight(height)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Education</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Engineer"
                        value={highestEducation}
                        onChangeText={(highestEducation) => setHighestEducation(highestEducation)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Occupation</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="farmer"
                        value={occupation}
                        onChangeText={(occupation) => setOccupation(occupation)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Employment Type</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Self Employee"
                        value={employeeType}
                        onChangeText={(employeeType) => setEmployeeType(employeeType)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputLabel}>Annual Income</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="5 lakh and above"
                        value={annualIncome}
                        onChangeText={(annualIncome) => setAnnualIncome(annualIncome)}
                    />
                </View>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        formSubmit({
                            bodyType,
                            complexion,
                            physicalStatus,
                            height,
                            weight,
                            highestEducation,
                            employeeType,
                            occupation,
                            annualIncome,
                        });
                    }}>
                    <Text style={styles.loginText} >Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};
export default PhysicalProfInfo;


