import {StyleSheet} from 'react-native';
import Colors from '../../common/colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  backBtn: {
    margin: 10,
  },
  heading: {
    alignSelf: 'center', 
    fontSize: 22, 
    color: Colors.black
  },
  flatlist:{
    padding: 20
  }
});
