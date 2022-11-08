import {
    StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
    infoContainer: {
marginTop:100,
marginLeft:-31
    },
      name: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
      },

    container: {

        padding: 10,
        backgroundColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 7,
        display:'flex'
    },
    images: {
        borderRadius: 5,
    
        height: '60%',
        marginRight
          : -25,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 0,
        margin: 25,
      },
    images2: {
        borderRadius: 5,
        height: '75%',
        width: '67%',
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 25,
      },
      add:{
marginTop:10
      },
      loginText: {
        fontSize: 15,
        margin: 5,
        color:'black'
      },
      headingTop: {
        fontSize: 20,
        fontFamily:'Poppins',
        color: '#DC143C',
        fontWeight:600,
        flexDirection:'row', 
      },
      Txt:{
color:'black',
fontWeight:600
      },

      pic: {
        display: '-webkit-flex',
        marginLeft: '-7',
        marginRight: '27',
        marginTop: '-57',
    
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white',
      },
    pics: {
        display: '-webkit-flex',
        marginLeft: '-7',
        marginRight: 27,
        flexWrap: 'wrap',
        backgroundColor: 'white',
    
      },

    alignCenter: {
        alignItems: 'center',
        fontFamily: "poppins",
        marginBottom: 30,
        marginTop: 10,
    },
    evil:{
    },
    headingTop: {
        fontSize: 20,
    fontFamily:'Poppins',
    color: '#DC143C',
    fontWeight:600,
    },
    div: {
        backgroundColor: '#FFFFFF',
        height:'100%'
    },

    selectedBar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#FE3F46',
        borderRadius: 5,
        borderColor: '#FE3F46',
        borderWidth: 1,
        padding: 10,
        minHeight: 45,
        margin: 10,
        shadowRadius: 2,
        fontWeight: "500",
        justifyContent: "space-around",
    },

    bar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F14046',
        minHeight: 45,
        margin: 10,
        padding: 10,
        shadowRadius: 2,
        fontWeight: 500,
        justifyContent: "space-around",

    },

    title: {
        fontSize: 13,
        fontWeight: 'bold',
        fontWeight: '500',
        color: '#101010',
        marginLeft: 30,
    },
    selectedtitle: {
        fontSize: 13,
        fontWeight: 'bold',
        fontWeight: '500',
        color: '#FFFFFF',
        marginLeft: 30,
    },
    context: {
        fontSize: 11,
        marginLeft: 30,
        fontWeight: '400',
        color: '#101010',
    },

    selectedcontext: {
        fontSize: 11,
        marginLeft: 30,
        fontWeight: '400',
        color: '#FFFFFF',
    },
    selectedicon: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffff',
        position: 'absolute',
        top: '50%',
        left: 10
    },

    icon: {
        fontSize: 15,   
        fontWeight: 'bold',
        color: '#101010',
        position: 'absolute',
        top: '50%',
        left: 10
    },

});
export default styles;  