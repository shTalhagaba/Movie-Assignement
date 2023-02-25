import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../common/colors/Colors';
import Constants from '../../common/contant/Constants';

export interface NavigationProps {
  navigation?: any;
  route?: any;
  item?: any
}

function CastList(props:NavigationProps) {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Image source={item.image} resizeMode='stretch' style={styles.img} />
      <Text style={styles.seasonNo}>{item.castName}</Text>
      <Text style={styles.year}>{item.name}</Text>
      <Text style={styles.ep}>{item.totalEpisodes} {Constants.episodes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 250,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    marginRight: 8,
  },
  img: {
    width: '100%',
    height: '60%',
  },
  seasonNo: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 8,
  },
  year: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '400',
    marginLeft: 8,
  },
  ep: {
    fontSize: 14,
    color: Colors.grey,
    fontWeight: '400',
    marginLeft: 8,
  },
});

export default CastList;
