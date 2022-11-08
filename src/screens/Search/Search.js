import React from 'react';
import styles from './Style';
import { Feather, Entypo } from '@expo/vector-icons';
import { Text, TextInput, View, ImageBackground, TouchableOpacity } from "react-native";
const Search = ({ navigation, route }) => {
  return (
    <View style={styles.div}>
      <View style={styles.container}
      >
        <Feather
          style={styles.search}
          name="search"
        />
        <TextInput
          style={styles.input}
          placeholder="Search Profile"
          onFocus={() => {
            ;
          }}
        />
        <Entypo
          style={styles.Entypo}
          name="cross"
          onPress={() => {
          }} />
      </View>
      <View style={styles.pics}>
        <ImageBackground
          source={{
            uri:
              'https://th.bing.com/th/id/OIP.YkSTZE8c-Z6zE79NbowZQwHaKT?pid=ImgDet&rs=1'
          }}
          resizeMode="stretch"
          style={styles.images2}>
        </ImageBackground>
        <Text style={styles.underline}>
          <Text style={styles.name}>Sandeep Sharma </Text></Text>
        <Text style={styles.information}>Freelancer</Text>
        <View style={styles.headingMidd}>
          <Text style={styles.information}>26 years B.Arch Hindi ,English </Text>
          <Text style={styles.information2}>Hyderabad IN 7.5-10 Lakhs p.a Never </Text>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigation.navigate('')} >View Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pics}>
        <ImageBackground
          source={{
            uri:
              'https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?w=740&t=st=1664262183~exp=1664262783~hmac=cb1a215c4696501dc79632b93b627253b9afffb07cfe6b5cc28ca91fe3bbc842'
          }}
          resizeMode="stretch"
          style={styles.images2}>
        </ImageBackground>
        <Text style={styles.name}>Roshini Sharma </Text>
        <Text style={styles.information}>Software Engineer</Text>
        <View style={styles.headingMidd}>
          <Text style={styles.information}>26 years B.Arch Hindi ,English </Text>
          <Text style={styles.information2}>Hyderabad IN 7.5-10 Lakhs p.a Never </Text>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigation.navigate('')} >View Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pics}>
        <ImageBackground
          source={{
            uri:
              'https://img.freepik.com/free-photo/bright-positive-fashion-studio-portrait-young-girl-with-nude-lips-bright-make-up-stylish-trendy-outfit-pink-skirt-smart-casual_496169-516.jpg?w=740&t=st=1664262215~exp=1664262815~hmac=dcca57516f5495a087a68bb03af84b7e32abadf60a2ce0f9053ac060caef0573'
          }}
          resizeMode="stretch"
          style={styles.images2}>
        </ImageBackground>
        <Text style={styles.name}>Rohini </Text>
        <Text style={styles.information}>Doctor</Text>
        <View style={styles.headingMidd}>
          <Text style={styles.information}>26 years B.Arch Hindi ,English </Text>
          <Text style={styles.information2}>Hyderabad IN 7.5-10 Lakhs p.a Never </Text>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigation.navigate('')} >View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};
export default Search;