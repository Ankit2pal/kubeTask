import {
    StyleSheet
} from 'react-native';
const styles = StyleSheet.create({

    container: {

        padding: 10,
        backgroundColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 7,
    },
    alignCenter: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: "poppins",
        marginBottom: 30,
        marginTop: 10,
    },

    headingTop: {
        fontSize: 25,
        textAlign: 'center',
        display: 'flex',
        color: 'red',
        fontWeight: "500",
        fontFamily: "poppins",
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