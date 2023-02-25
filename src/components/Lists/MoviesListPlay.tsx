import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';

function MoviesListPlay(props) {
  const {item} = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          source={ImagePath.dummyImg1}
          resizeMode={'stretch'}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.release_date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    minHeight: 250,
    borderRadius: 10,
    margin: 5,
    marginRight: 30,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: Colors.white,
    alignSelf: 'center',
  },
  date: {
    marginLeft: 10,
    color: Colors.white,
    alignSelf: 'center',
  },
});

export default MoviesListPlay;
