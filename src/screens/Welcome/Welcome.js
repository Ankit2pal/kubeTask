import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
// import "@fontsource/poppins";
// import "@fontsource/playfair-display";
import styles from './Style';


const Welcome = ({ navigation, Route }) => {
    return (
        <View>
            <ImageBackground
                source={
                    require('../../../public/welcome.jpg')}
                resizeMode="stretch"
                style={styles.img}>
            </ImageBackground>
            <View
                style={styles.divBar}>
                <Text
                    style={styles.headingDown}>
                    Join with us to find{"\n"}perfect match
                </Text>
                <Text
                    style={styles.headingMiddle}>
                    Find Indians Brides & Grooms in
                </Text>
                <Text
                    style={styles.headingMid}>
                    Jodi Bnao Matrimony
                </Text>
                <View style={styles.alignCenter}>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => navigation.navigate('createProfileContainer')}>
                        <Text
                            style={styles.loginText}>
                            Create an account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignIn}>
                    <Text style={styles.pageText}>
                        Already have an account?
                        <Text
                            style={styles.loginPage}
                            onPress={() => {
                                navigation.navigate('loginFormContainer');
                            }}
                        >
                            {' '}
                            Sign In
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Welcome;