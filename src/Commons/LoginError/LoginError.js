import React from 'react';
import {Text,
StyleSheet,
View,
Image } from 'react-native';

const styles = StyleSheet.create({
    login_error: {
        fontSize: 15,
        color: '#FE3F46',
        fontFamily: 'Poppins',
        textAlign: 'center',
      },
      errorWrapper: {
        borderColor: '#FE3F46',
        borderWidth: 1,
        borderRadius: 5,
        margin: '5%',
        padding: '5%',
        alignItems: 'center',
        height: '20%',
      },
      errorImage: {
        marginTop: '5%',
        marginBottom: '5%',
        width: 25,
        height: 25,
      },

});

const LoginError = () => {
  return (
    <View style={styles.errorWrapper}>
    <Image
      style={styles.errorImage}
      source={require('../../../public/Vector.png')}
    />
    <Text style={styles.login_error}>
              Oops, something went wrong. Please try again later.
            </Text>
  </View>
  );
};
export default LoginError;
