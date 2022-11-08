import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: ' silver',
    fontFamily: 'Poppins',
  },
  alignCenter: {
    alignItems: 'center',
    marginTop:'10%'
  },
  headingTop: {
    fontSize: 20,
    fontFamily:'Poppins',
    color: '#DC143C',
    fontWeight:600,
  },
  headingMiddle: {
    fontSize: 15,
    color:'#5B5B5B',
    marginBottom: 25,
    fontFamily: 'Poppins',
  },
  Main:{
marginTop:'20%'
  },
  image: {
    marginBottom: 40,
  },

  inputView: {
    marginBottom: 10,
  },
  TextInput: {
    borderWidth: 1,
    padding: 5,
    paddingLeft: 10,
    fontSize: 13,
    marginRight: '5%',
    marginLeft: '5%',
    borderRadius: 3,
    borderColor: '#999999',
    borderWidth: 1,
    width: '90%',
  },
  inputLabel: {
    marginLeft: '5%',
    fontSize: 15,
  },
  forgot_button: {
    fontSize: 15,
    color: 'brown',
    marginRight: '5%',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  pageText: {
    fontSize: 15,
    fontFamily: 'Poppins',
  },
  login_error: {
    fontSize: 15,
    color: '#FE3F46',
    fontFamily: 'Poppins',
    textAlign: 'center',
  },

  loginBtnn: {
    width: '76%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'Poppins',
    backgroundColor: 'blue',
  },
  loginBtn: {
    width: '78%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontFamily: 'Poppins',
    backgroundColor: 'silver',
    height:40
  },
  loginText: {
    fontSize: 15,
    margin: 5,
    color: 'silver',
    color:'white'
  },
  forSignUp: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
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
export default styles;
