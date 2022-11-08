import React, { useState } from 'react';
import styles from './Style';
import AntIcon from "react-native-vector-icons/AntDesign";
import ConstantHeader from '../../Commons/Header/ConstantHeader';
import { EvilIcons } from '@expo/vector-icons';
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AliceCarousel from 'react-alice-carousel';

const Packages = () => {
  const handleOnDragStart = (e) => e.preventDefault()

  const navigation = useNavigation();
  const [packageValue, setPackage] = useState("silver");

  return (
    <View style={styles.div}>
      <ConstantHeader />
      <View style={styles.container}>
        <View style={styles.alignCenter}>
          <Text style={styles.headingTop}>Packages
            <TouchableOpacity  >
              <View style={styles.evil}>
              <EvilIcons name={'navicon'} size={32}  color={'black'}/>
              </View>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={packageValue === 'silver' ? styles.displaySelected : styles.display} onPress={() => setPackage("silver")}>
          <Text style={packageValue === 'silver' ? styles.selectedBox : styles.box}>Silver</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPackage("gold")} style={packageValue === 'gold' ? styles.displaySelected : styles.display}>
          <Text style={packageValue === 'gold' ? styles.selectedBox : styles.box}>Gold</Text>
        </TouchableOpacity>
        <TouchableOpacity style={packageValue === 'diamond' ? styles.displaySelected : styles.display} onPress={() => setPackage("diamond")}>
          <Text style={packageValue === 'diamond' ? styles.selectedBox : styles.box}>Diamond</Text>
        </TouchableOpacity>
      </View>
      <AliceCarousel
       mouseTrackingEnable
        disableButtonFsControls>
        <View>
          <View style={styles.divBar}>

            <View style={styles.border}>
              <View style={styles.alignCenter}>
                <Text style={styles.basic}>Basic</Text>
                <Text style={styles.ruppee}>
                  $99</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} />
                  </Text>
                  Can view 5 profiles</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} /> </Text>
                  Validity of 1 Month</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} /> </Text>
                  5 profiles</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} style={styles.antIcon} /> </Text>
                  Free Package for new users</Text>
                <View>
                  <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText} onPress={() => navigation.navigate()} >Subscribe</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.divBar}>

            <View style={styles.border}>
              <View style={styles.alignCenter}>
                <Text style={styles.basic}>STANDARD</Text>
                <Text style={styles.ruppee}>
                  $99</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} />
                  </Text>
                  Can view 5 profiles</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} /> </Text>
                  Validity of 1 Month</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} /> </Text>
                  5 profiles</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} style={styles.antIcon} /> </Text>
                  Free Package for new users</Text>
                <View>
                  <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText} onPress={() => navigation.navigate()} >Subscribe</Text>
                  </TouchableOpacity>

                </View>

              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.divBar}>

            <View style={styles.border}>
              <View style={styles.alignCenter}>
                <Text style={styles.basic}>Advanced</Text>
                <Text style={styles.ruppee}>
                  $99</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} />
                  </Text>
                  Can view 5 profiles</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} /> </Text>
                  Validity of 1 Month</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} /> </Text>
                  5 profiles</Text>
                <Text style={styles.headingMidd}>
                  <Text style={styles.antIcon}>
                    <AntIcon name="checkcircle" color="black" size={12} style={styles.antIcon} /> </Text>
                  Free Package for new users</Text>
                <View>
                  <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText} onPress={() => navigation.navigate()} >Subscribe</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
          </View>
        </View>
      </AliceCarousel>
    </View>
  )
};
export default Packages;