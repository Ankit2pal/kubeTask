import {
  StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    borderColor: '#999999',
    padding: 40,
    marginBottom:20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth:0,
    borderWidth:1
  },
  divBar: {
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'white',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
     },
  wrapDropDownHeader: {
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputView: {
    marginBottom: 10,
    maginTop:10,
  },
  inputLabel: {
    marginLeft: '5%',
    fontSize: 12,
    marginRight: '15%',
    marginLeft: '15%',
  },
  text: {
    fontSize: 15,
    color: '#fff',
    marginRight: '15%',
    marginLeft: '13%',
  },
  physical: {
    width: '100%',
    borderRadius: 5,
    height: 45,
    padding: 12,
    color: 'red',
    marginBottom: 20,
    backgroundColor: 'red',
    
  },
  physicalSelected:{
    width: '100%',
    borderRadius: 5,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    height: 45,
    padding: 12,
    color: 'red',
    backgroundColor: 'red',
  },
  headingTop: {
    fontSize: 25,
    color: 'red',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "500",
    fontFamily: "poppins",
  },
  alignCenter: {
    alignItems: 'center',
    height: 78,
  },
  dropIcon:{
    fontSize:17,
    color: '#fff',
    position:'absolute',
    top: '50%',
    left: 10,
  },
  container: {
    marginBottom: 12,
    backgroundColor: '#fff',
  },
});
export default styles;