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
const FamilyPartPref = ({ formSubmit }) => {
    const navigation = useNavigation();
    const [familyType, setFamilyType] = useState('');
    const [familyStatus, setFamilyStatus] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [fatherOccupation, setFatherOccupation] = useState('');
    const [motherName, setMotherName] = useState('');
    const [motherOccupation, setMotherOccupation] = useState('');
    const [noOfSisters, setNoOfSisters] = useState('');
    const [noOfBrothers, setNoOfBrothers] = useState('');
    const [star, setStar] = useState('');
    const [highestEducationPartner, setHighestEducationPartner] = useState('');
    const [employmentTypePartner, setEmploymentTypePartner] = useState('');
    const [occupationPartner, setOccupationPartner] = useState('');
    const [annualIncomPartner, setAnnualIncomPartner] = useState('');
    const [countryPartner, setCountryPartner] = useState('');
    const [statePartner, setStatePartner] = useState('');
    const [districtPartner, setDistrictPartner] = useState('');
    const [cityPartner, setCityPartner] = useState('');
    return (
        <View style={styles.div}>
            <View style={styles.container}>
                <View>
                    <View style={styles.arrowleft}>
                        <AntIcon
                            name={'arrowleft'}
                            size={18}
                            color={'#666666'}
                            onPress={() => navigation.navigate('physicalInformation')}
                        />
                    </View>
                    <Text style={styles.headingTop}>
                        Family and Partner{"\n"}Preferences
                        </Text>
                </View>
            </View>
            <View style={styles.physical}>
                <Text style={styles.text}>Family Details</Text>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Family type</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Joint family"
                    vallue={familyType}
                    onChangeText={(familyType) => setFamilyType(familyType)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Family status</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="middle class"
                    value={familyStatus}
                    onChangeText={(familyStatus) => setFamilyStatus(familyStatus)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Father's Name</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Rakesh Patil"
                    value={fatherName}
                    onChangeText={(fatherName) => setFatherName(fatherName)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Father's Occupation</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Farmer"
                    value={fatherOccupation}
                    onChangeText={(fatherOccupation) => setFatherOccupation(fatherOccupation)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Mother's Name</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Diksha Patil"
                    value={motherName}
                    onChangeText={(motherName) => setMotherName(motherName)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Mother's Occupation</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Housewife"
                    value={motherOccupation}
                    onChangeText={(motherOccupation) => setMotherOccupation(motherOccupation)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>No. Of Brothers</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="N/A"
                    value={noOfBrothers}
                    onChangeText={(noOfBrothers) => setNoOfBrothers(noOfBrothers)}
                />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>No. Of Sisters</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="N/A"
                    value={noOfSisters}
                    onChangeText={(noOfSisters) => setNoOfSisters(noOfSisters)}
                />
            </View>
            <View style={styles.physical}>
                <Text style={styles.text}>Partner Preferences</Text>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Star</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Star" 
                    value={star}
                    onChangeText={(star) => setStar(star)}
                    />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Highest Education</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Education" 
                    value={highestEducationPartner}
                    onChangeText={(highestEducationPartner) => setHighestEducationPartner(highestEducationPartner)}
                    />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Employment Type</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Employment" 
                    value={employmentTypePartner}
                    onChangeText={(employmentTypePartner) => setEmploymentTypePartner(employmentTypePartner)}
                    />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Occupation</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Student" 
                    value={occupationPartner}
                    onChangeText={(occupationPartner) => setOccupationPartner(occupationPartner)}
                    />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Annual Income</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="10 lakh and above" 
                    value={annualIncomPartner}
                    onChangeText={(annualIncomPartner) => setAnnualIncomPartner(annualIncomPartner)}/>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Country</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="India" 
                    value={countryPartner   }
                    onChangeText={(countryPartner) => setCountryPartner(countryPartner)}/>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>State</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Telangana"
                    value={statePartner}
                    onChangeText={(statePartner) => setStatePartner(statePartner)}/>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>District</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Hyderabad"
                    value={districtPartner}
                    onChangeText={(districtPartner) => setDistrictPartner(districtPartner)} />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>City</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Sikandrabad"
                    value={cityPartner}
                    onChangeText={(cityPartner) => setCityPartner(cityPartner)} />
            </View>
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => {
                    formSubmit({
                        familyType,
                        familyStatus,
                        fatherName,
                        fatherOccupation,
                        motherName,
                        motherOccupation,
                        noOfSisters,
                        noOfBrothers,
                        star,
                        highestEducationPartner,
                        employmentTypePartner,
                        occupationPartner,
                        annualIncomPartner,
                        countryPartner,
                        statePartner,
                        districtPartner,
                        cityPartner
                    });
                }}>
                <Text style={styles.loginText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
};
export default FamilyPartPref;


