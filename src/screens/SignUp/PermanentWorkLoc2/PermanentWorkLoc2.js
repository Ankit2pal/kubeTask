import React, { useState } from 'react';
import styles from './Style';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import AntIcon from "react-native-vector-icons/AntDesign";
const PermanentWorkLoc2 = ({ navigation, route }) => {
    return (
        <View style={styles.div}>
            <View style={styles.container}>
                <View>
                <View style={styles.arrowleft}>
        <AntIcon 
        name={'arrowleft'}
        size={18} 
        color={'#666666'}
        onPress={() => navigation.navigate('PermanentWorking')}
         />
        </View>
                    <Text style={styles.headingTop}>Permanent and Working{"\n"}Location</Text>
                </View>
            </View>
            <View style={styles.physical}>
                <Text style={styles.text}>Work Location</Text>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Address</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Loerm ipsum dolor sit amset." />
              </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Address 2</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Loerm ipsum dolor sit amset." />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>Country</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="India" />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>State</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Meghalaya" />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>District</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="East Godavery" />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputLabel}>City</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Cherrapunji" />
            </View>
            <TouchableOpacity style={styles.loginBtn}
            onPress={() => navigation.navigate('')}>
                <Text style={styles.loginText} >Continue</Text>
            </TouchableOpacity>
        </View>
    )
};
export default PermanentWorkLoc2;


