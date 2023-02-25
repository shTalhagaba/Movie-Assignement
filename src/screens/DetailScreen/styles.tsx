import {StyleSheet} from 'react-native';
import Colors from '../../common/colors/Colors';

export default StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.grey,
  },
  txt: {
    color: Colors.darkBlue,
    fontWeight: 'bold',
    margin: 10,
    fontSize: 16,
    marginTop: 15,
  },
  currSeasonContainer: {
    width: '97%',
    height: 200,
    borderColor: Colors.black,
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  img: {
    width: 150,
    height: 200,
  },
  innerContainer: {
    marginTop: 30,
    marginLeft: 20,
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.black,
  },
  des: {
    fontSize: 14,
    color: Colors.black,
    marginTop: 15,
  },
});
