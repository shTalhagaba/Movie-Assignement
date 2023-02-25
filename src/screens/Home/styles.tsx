import {Platform, StyleSheet} from 'react-native';
import Colors from '../../common/colors/Colors';

export default StyleSheet.create({
  txt: {
    color: Colors.darkBlue,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 15,
  },
  background: {
    width: '100%',
    height: 280,
  },
  container: {
    width: '100%',
    padding: 20,
    height: '100%',
    marginTop: Platform.OS === 'ios' ? 15 : 1,
  },
});
