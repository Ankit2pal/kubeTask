import {
  StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
  information: {
    fontSize: 10,
    color: 'black',
    width: '50%'
  },
  loginText: {
    fontSize: 10,
    marginBottom: 2,
    color: '#fff'
  },
  loginBtn: {
    width: '30%',
    marginTop: 5,
    borderRadius: 8,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  name: {
    textDecorationLine: 'underline',
    fontSize: 14,
    width: '50%',
    fontWeight: "500",
    marginRight: '50%',
  },
  information2: {
    fontSize: 10,
    color: 'black',
    width: '50%',
  },
  Entypo: {
    fontSize: 15,
    color: 'black',
    padding: 1,
  },
  headingMidd: {
    paddingTop: 2,
    width: '37%',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 11,
    color: 'black',
    marginRight: '60%',
  },
  container: {
    marginTop: 25,
    border: 'groove',
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  search: {
    fontSize: 15,
    marginLeft: 5
  },
  div: {
    backgroundColor: 'white',
    height: '100%',
    padding: 10,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontWeight: "500",
    fontFamily: 'Poppins',
    fontSize: 10,
    marginLeft: 10,
    width: "85%",
    borderWidth: 1,
    borderStyle:'solid',
    borderColor: 'black',
  },
  pics: {
    display: '-webkit-flex',
    marginRight: 27,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  images2: {
    borderRadius: 8,
    height: '93%',
    width: '63%',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
});
export default styles;