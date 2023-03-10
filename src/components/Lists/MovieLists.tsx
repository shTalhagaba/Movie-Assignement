import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux';

export interface NavigationProps {
  navigation?: any;
  route?: any;
  item?: any;
  onPress?: any;
  onPressDot?:any;
  onPressFavourite?:any;
  favourite?:boolean;
}


function MovieLists(props:NavigationProps) {
  const favouriteIDs = useSelector(state => state.favouriteIDs)
  const {item} = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        {/* {item.poster_path? */}
        <Image source={item.poster_path === null ? ImagePath.dummyImg :{uri:'https://www.themoviedb.org/t/p/w1280/'+item.poster_path}} style={styles.image} />
        {/* :null}/ */}
        <Text style={styles.title}>{item.original_title}</Text>
        <Text style={styles.date}>{item.release_date}</Text>
      </View>
      <TouchableOpacity style={styles.dotContainer} onPress={props.onPressDot}>
        <View style={[styles.dot, {marginLeft: 2.2}]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </TouchableOpacity>
      {<TouchableOpacity style={{position:'absolute',paddingTop:6,left:10}} onPress={props.onPressFavourite}>
      <AntDesign name={favouriteIDs.includes(item.id) ? 'heart' :'hearto'} size={20} color={Colors.white}  />
      </TouchableOpacity> }
      <View style={styles.progressContainer}>
      </View>
      <Text style={styles.progress}>{item.vote_average}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    minHeight: 250,
    borderRadius: 10,
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  title: {
    marginTop: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  date: {
    marginLeft: 10,
    color: Colors.grey,
  },
  progressContainer: {
    backgroundColor: Colors.darkBlue,
    position: 'absolute',
    top:158,
    left: 10,
    borderRadius: 50,
    padding: 3,
  },
  progress: {
    position: 'absolute',
    top:165,
    left: 19,
    padding: 3,
    color: Colors.white,
    fontSize: 11,
  },
  dotContainer: {
    width: 25,
    height: 25,
    backgroundColor: Colors.grey,
    flexDirection: 'row',
    borderRadius: 50,
    position: 'absolute',
    right: 15,
    top: 5,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: Colors.black,
    borderRadius: 50,
    alignSelf: 'center',
    margin: 0.5,
  },
});

export default MovieLists;
