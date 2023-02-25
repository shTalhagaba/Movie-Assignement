import {StyleSheet} from 'react-native';
import Colors from '../../common/colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    marginTop: 17,
  },
  backBtn: {
    margin: 10,
    marginTop: 30,
    flex: 0.3
  },
  heading: {
    width: '100%',
    fontSize: 22, 
    marginTop: 30,
    color: Colors.black,
    flex: 0.7
  },
  flatlist:{
    padding: 20
  }
});
