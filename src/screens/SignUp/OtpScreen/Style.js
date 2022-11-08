import {
  StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%'
  },
  arrowleft:{
    marginTop:20,
    marginBottom:5, 
      marginLeft: 18,
      width:'15%',
      paddingLeft:7,
    },
  otp: {
    marginTop: 30,
    width: "70%",
    marginLeft: '15%',
    marginRight: '15%',
    marginLeft: '15%',
  },
  resendCode: {
    fontFamily:'Poppins',
    fontWeight:'bold',
    fontSize: 13,
    color: '#FE3F46',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 24,
  },
  loginText: {
    fontSize:12,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  verify: {
    margin: -24,
    marginTop: 21,
  },
  loginBtn: {
    width: '70%',
    borderRadius: 5,
    alignItems:'center',
    height: 33,
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'red',
  },
  headingOtp: {
    fontSize: 15,
    fontFamily:'Poppins',
    color: '#FE3F46',
    margin: 10,
    marginBottom: -10,
    marginLeft: 27,
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },
  headingDown: {
    margin: 10,
    color:'#5B5B5B',
    fontStyle:'normal',
    fontFamily:'Poppins',
    marginTop:17,
    fontSize: 12,
    marginLeft: 27,
  },
});
export default styles;