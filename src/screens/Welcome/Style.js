import { StyleSheet,Dimensions } from 'react-native';
// import "@fontsource/poppins";
// import "@fontsource/playfair-display";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    img: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divBar:{
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'white',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        textAlign:'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
    headingDown:{
        fontSize: 22,
        fontFamily:'Playfair-Display',
        color: '#FCB714',
        marginTop: 40,
        marginBottom: 10,
        textAlign:'center',
      },
      headingMiddle:{
        fontSize: 17,
        color: '#5B5B5B',
        fontFamily:'Poppins',
        fontStyle:'normal',
        marginTop: 5,
        marginBottom: 0,
        textAlign:'center',
      },
      headingMid:{
        fontSize: 17,
        color: '#F14046',
        fontFamily:'Poppins',
        marginTop: 0,
        marginBottom: 0,
        textAlign:'center',
    
      },
      loginText:{
        fontSize:17,
        fontFamily:'Roboto',
        color:'#FFFFFF',
          },
      loginBtn: {
        width: '70%',
        borderRadius: 5,
        height: 35,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 18,
        backgroundColor: '#F14046',
      },
      alignCenter:{
        alignItems: 'center',
      },
      pageText: {
        color:'#5B5B5B',
        fontSize: 14,
        fontFamily: 'Poppins',
        alignItems:'center'
      },
      loginPage: {
        fontSize: 14,
        color: '#FE3F46',
        fontFamily: 'Poppins',
        textAlign: 'center',
      },
      SignIn: {
        textAlign: 'center',
        display:'flex',
        marginTop: 7,
        marginLeft:80,
        marginBottom: 30,
      },
    });
export default styles;
