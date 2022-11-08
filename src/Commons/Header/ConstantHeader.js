import React from 'react';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 100,
  },
});

const ConstantHeader = () => {
  return (
    <Image
      style={styles.headerImage}
      source={require('../../../public/HeaderDes.png')}
    />
  );
};
export default ConstantHeader;
