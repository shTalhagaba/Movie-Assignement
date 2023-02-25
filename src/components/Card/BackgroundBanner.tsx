import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Colors from '../../common/colors/Colors';
// import ProgressCircle from 'react-native-progress-circle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import ImagePath from '../../common/images/ImagePath';
import Constants from '../../common/contant/Constants';

export interface NavigationProps {
  navigation?: any;
  route?: any;
  movieName?: any;
  category?: any;
  progress?: any;
  overView?: any;
  creator?: any;
  Img?: any;
}

function BackgroundBanner(props:NavigationProps) {
  const {movieName, category, progress, overView, creator, Img} = props;
  return (
    <ImageBackground source={ImagePath.bannerBackground1} style={styles.bg}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: 'https://www.themoviedb.org/t/p/w1280/' + Img}}
          style={styles.img}
        />

        <View style={{marginTop: 30,}}>
          <Text style={[styles.movieName,{marginRight:150}]}>{movieName}</Text>
          <View style={styles.flexRow}>
            <View style={styles.tagContainer}>
              <Text style={styles.tag}>TV-MA</Text>
            </View>
            <Text style={styles.cat}>{category}</Text>
          </View>

          <View style={styles.row}>
            <ScrollView horizontal={true}>
              <View style={styles.progressContainer}>
                {/* <ProgressCircle
                  percent={22}
                  radius={17}
                  borderWidth={3}
                  color={
                    Colors.green
                    // item.progress <= 50
                    //   ? Colors.white
                    //   : item.progress <= 80
                    //   ? Colors.yellow
                    //   : Colors.green
                  }
                  shadowColor="#999"
                  bgColor={Colors.darkBlue}
                /> */}
              </View>
              <Text style={styles.progress}>{progress}</Text>
              <Text style={styles.score}>
                {Constants.user}
                {'\n'}
                {Constants.score}
              </Text>
              <View style={styles.iconContainer}>
                <FontAwesome5
                  name="list"
                  size={15}
                  color={Colors.white}
                  style={styles.icon}
                />
              </View>
              <View style={styles.iconContainer}>
                <AntDesign
                  name={Constants.heart}
                  size={15}
                  color={Colors.white}
                  style={styles.icon}
                />
              </View>
              <View style={styles.iconContainer}>
                <AntDesign
                  name={Constants.heart}
                  size={15}
                  color={Colors.white}
                  style={styles.icon}
                />
              </View>
              <View style={styles.iconContainer}>
                <Entypo
                  name={Constants.star}
                  size={15}
                  color={Colors.white}
                  style={styles.icon}
                />
              </View>

              <Entypo
                name={Constants.play}
                size={18}
                color={Colors.white}
                style={styles.icon}
              />
              <Text style={styles.play}>{Constants.playTrailer}</Text>

            </ScrollView>
          </View>

          <Text style={styles.rem}>{Constants.remembeer}</Text>
          <Text style={styles.txt1}>{Constants.overView}</Text>
          <Text style={styles.des}>{overView}</Text>

          <Text style={styles.txt1}>{creator}</Text>
          <Text style={styles.heading}>{Constants.creator}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: Colors.darkBlue,
    borderRadius: 50,
    padding: 3,
    marginTop: 5,
  },
  progress: {
    position: 'absolute',
    top: 15,
    left: 8,
    padding: 3,
    color: Colors.white,
    fontSize: 11,
  },
  txt: {
    color: Colors.darkBlue,
    fontWeight: 'bold',
    margin: 10,
    fontSize: 16,
    marginTop: 15,
  },
  bg: {width: '100%', minHeight: 250,paddingBottom:20},
  img: {
    width: 140,
    minHeight: 220,
    maxHeight: 280,
    borderRadius: 10,
    margin: 15,
  },
  movieName: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  flexRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tagContainer: {
    borderColor: Colors.grey,
    borderWidth: 1,
    padding: 2,
  },
  tag: {
    color: Colors.grey,
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'center',
    marginTop: 6,
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: Colors.yellow,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  cat: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
    marginLeft: 8,
  },
  score: {
    color: Colors.white,
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5,
  },
  play: {
    color: Colors.white,
    fontSize: 16,
    marginTop: 13,
    marginRight: 180,
  },
  rem: {
    color: Colors.grey,
    fontSize: 14,
    marginTop: 8,
  },
  txt1: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  des: {
    color: Colors.white,
    fontSize: 14,
    marginTop: 2,
    width: '35%',
  },
  heading: {
    color: Colors.white,
    fontSize: 14,
  },
});

export default BackgroundBanner;
