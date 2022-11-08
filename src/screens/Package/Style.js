import {
  StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
  divBar: {
    borderTopLeftRadius: 10,
    borderWidth: 1,
  borderStyle: 'solid',
    borderColor: '#fff',
    shadowOpacity: 0.5,
    shadowRadius: 7,
    borderTopRightRadius: 10,
    marginTop: 20,
    height: '65%'
  },
  antIc: {
    marginRight: 5,
  },
  antIco: {
    marginRight: 5
  },
  antIcon: {
    marginRight: 0,
    marginLeft:15
  },

  evil: {
    marginRight: "50%"
  },
  border: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F14046',
    marginTop: 40,
    marginLeft: '20%',
    marginRight: '25%',
    width: '60%',
    marginBottom: 20,
  },
  profiles: {
    fontSize: 14,
    color: 'black',
    marginTop: 2,
    paddingRight: 60,
    textAlign: 'center',
    fontWeight: "500",
  },
  loginText: {
    fontSize: 14,
    color: '#fff',
    paddingRight:15,
    paddingLeft:15,
    paddingTop:5,
    paddingBottom:5
  },
  loginBtn: {
    width: '100%',
    marginTop: 15,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F14046',
   
  },
  user: {
    fontSize: 14,
    color: 'black',
    paddingLeft: 20,
    marginTop: 2,
    textAlign: 'center',
    fontWeight: "500",
  },
  display: {
    display:'flex',
    marginLeft: '3%',
    flexDirection:'row',
    width:'30%',
    backgroundColor: '#EBEBEB'

  },
  displaySelected: {
    display:'flex',
    marginLeft: '3%',
    flexDirection:'row',
    width:'30%',
    backgroundColor: '#FE3F46'
  },
  buttons:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  div: {
    backgroundColor: '#fff',
    height:"100%"
  },
  boxDiv: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '10%'
  },
  box: {
    padding: 10,
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
  },
  selectedBox: {
    padding: 10,
    fontSize: 15,
    width: '100%',
    textAlign: 'center',
    color: '#fff'
  },
  container: {
    // height: '25%',
    fontFamily: "poppins",
    backgroundColor: '#fff',
    padding: 5,
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: "poppins",
    marginBottom: 30,
    marginTop: 10,
  },

  ruppee: {
    fontSize: 20,
    paddingRight: 20,
    color: 'black',
    fontWeight: "900",
    fontFamily: "poppins",
  },
  headingTop: {
    fontSize: 25,
    display: 'flex',
    color: 'red',
    fontWeight: "500",
    fontFamily: "poppins",
  },
  basic: {
    fontSize: 20,
    paddingRight: 15,
    color: '#f5c71a',
    fontWeight: "900",
  },
  headingMidd: {
    fontSize: 14,
    color: 'black',
    marginTop: 4,
    fontWeight: "500",
    width: '100%'
  },
  aliceCarouselPrevbtn : {
    display:'none'

   },
  boxs:{
    height:10,
    margin:5,
  width:10,
  borderWidth:1,
  BorderStyle:'solid',
  borderColor:'rgba(0,0,0,0.9)',
  borderRadius:'50%'
  },
  scrollbar:{
    marginTop:5,
display:'flex',
flexDirection:'row'
  },
});
export default styles;