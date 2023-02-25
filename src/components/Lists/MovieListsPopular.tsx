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


function MovieListsPopular(props:NavigationProps) {
  const favouriteIDs = useSelector(state => state.favouriteIDs)
  const {item} = props;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image 
        resizeMode='stretch'
        source={item.poster_path === null ? ImagePath.dummyImg :{uri:'https://www.themoviedb.org/t/p/w1280/'+item.poster_path}} style={styles.image} />
        {/* :null}/ */}
        <Text style={styles.title}>{item.original_title}</Text>
        <Text style={styles.date}>{item.release_date}</Text>
      </View>
      <TouchableOpacity style={styles.dotContainer} onPress={props.onPressDot}>
        <View style={[styles.dot, {marginLeft: 2.2}]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </TouchableOpacity>
      {<TouchableOpacity style={{position:'absolute',paddingTop:8,left:12}} onPress={props.onPressFavourite}>
      <AntDesign name={favouriteIDs.includes(item.id) ? 'heart' :'hearto'} size={30} color={Colors.white}  />
      </TouchableOpacity> }
      <Text style={styles.progress}>{item.vote_average}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 250,
    borderRadius: 10,
    // margin: 5,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  date: {
    marginLeft: 10,
    color: Colors.grey,
    marginBottom: 10,
  },
  progressContainer: {
    backgroundColor: Colors.darkBlue,
    position: 'absolute',
    // bottom: 55,
    top:158,
    left: 10,
    borderRadius: 50,
    padding: 3,
  },
  progress: {
    position: 'absolute',
    top:165,
    // bottom: 62,
    left: 19,
    padding: 3,
    color: Colors.white,
    fontSize: 11,
  },
  dotContainer: {
    width: 35,
    height: 35,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: 50,
    position: 'absolute',
    right: 12,
    top: 5,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: Colors.black,
    borderRadius: 50,
    alignSelf: 'center',
    margin: 0.8,
  },
});

export default MovieListsPopular;
