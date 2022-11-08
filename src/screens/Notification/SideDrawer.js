import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

const SideDrawer = () => {
  return (
     
    <View style={{ flexDirection: 'row',height: 70, backgroundColor: '#fff'} }>
    <TouchableOpacity 
       style={{marginLeft:'85%',alignSelf:'center'}}
       onPress={()=>{ 
      }} 
        > 
      <Image
       source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
       style={{ width: 20, height: 20, marginLeft: 5 }}
          />
    </TouchableOpacity>
    <Text style={styles.notify}>Notifications</Text>
  </View>
);
}
const styles = StyleSheet.create({
  
  headingMidd: {
    fontSize: 14,
    color: 'black',
    marginTop: 4,
    marginBottom: 60,
    textAlign: 'center',
    fontWeight: "500",

  },
  headingBottom: {
    fontSize: 18,
    color: 'black',
    marginTop: 4,
    marginBottom: 60,
    textAlign: 'center',
    fontWeight: "600",
  },
  notify:{
   marginLeft:-200,
   fontWeight:"500",
   marginTop:18,
   fontSize:20,
   color:"#FE3F46",
},
  headingMiddle: {
    fontSize: 17,
    color: 'red',
    marginTop: -4,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: "600",
  },

  img: {
    margin: 50,
    marginLeft: "100%",
    marginBottom: 17,
    height: 120,
    width: 120,
    borderRadius: 100,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'black'
  },

  loginText: {
    fontSize: 12,
    marginBottom: 5,
    color: '#fff'
  },

  loginBtn: {
    width: '75%',
    borderRadius: 5,
    height: 30,
    margin: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 220,
    backgroundColor: 'red',
  },
  div: {
    backgroundColor: '#fff'
  },
  container: {
    marginBottom: 5,
    paddingBottom: 10,
    flex: 1,
    backgroundColor: '#fff',

  },
  alignCenter: {
    alignItems: 'center',
  },
  headingTop: {
    padding: 0,
    fontSize: 15,
    color: 'red',
    marginTop: -29,
    marginBottom: 5,
    fontWeight: 500,
  },
  btnView: {
    width: '16%',
    marginLeft: 500,
    textColor: 'red',
    paddingTop: 13,
    backgroundColor: 'none',
    padding: 0,
    marginLeft: 271
  },
});

export default SideDrawer;