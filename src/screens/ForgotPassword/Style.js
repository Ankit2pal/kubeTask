import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  headingContainer:{
  flexDirection:'row',
  marginTop:10,
  // display:'block'
  // marginLeft:'50%',
  },
  arrowleft:{
    marginLeft: 18,
    width:'15%',
    paddingLeft:7,
  },
  loginText: {
    fontSize: 13,
    fontFamily:'Roboto',
    color: '#FFFFFF',
  },
  loginBtn: {
      width: '70%',
        borderRadius: 5,
        height: 30,
        margin: 50,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 25,
        paddingLeft: 7,
        marginRight: '15%',
        marginLeft: '15%',
        backgroundColor: '#F14046',
      },

  TextInput: {
    borderRadius: 5,
    height: 30,
    borderWidth:1,
    justifyContent: 'center',
    borderStyle:'solid',
    borderColor: '#999999',
    padding: 3,
    color:'#5B5B5B',
    paddingLeft: 7,
    fontSize: 12,
    fontFamily:'Poppins',
    marginRight: '15%',
    marginLeft: '15%',
    width: '70%',
  },
  inputView: {
    marginBottom: 10,
    marginTop: 45,
  },
  inputLabel: {
    marginLeft: '5%',
    fontSize: 14,
    color:'#101010',
    fontFamily:'Poppins',
    marginRight: '15%',
    marginLeft: '15%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  alignCenter: {
    alignItems: 'center',
  },
  headingTop: {
    // width:'70%',
    marginLeft:'25%',
    alignItems: 'center',
    fontFamily:'Poppins',
    fontSize: 17,
    fontWeight:'500',
    color: '#FE3F46',
    marginTop: -3,
    fontWeight: '500',
    backgroundColor: '#fff',
  },
});
export default styles;