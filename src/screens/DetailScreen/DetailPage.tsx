import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';
import styles from './styles';
import CastList from '../../components/Lists/CastList';
import BackgroundBanner from '../../components/Card/BackgroundBanner';
import Constants from '../../common/contant/Constants';
import Axios from 'axios';

var castList = [
  {
    image: ImagePath.dummyImg,
    castName: 'Zendaya',
    name: 'Rue Bennett',
    totalEpisodes: 18,
  },
  {
    image: ImagePath.dummyImg,
    castName: 'Zendaya',
    name: 'Rue Bennett',
    totalEpisodes: 18,
  },
  {
    image: ImagePath.dummyImg,
    castName: 'Zendaya',
    name: 'Rue Bennett',
    totalEpisodes: 18,
  },
];

export interface NavigationProps {
  navigation?: any;
  route?: any;
}


export default function DetailPage(props:NavigationProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const {navigation} = props;

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    setLoading(true);
    try {
      let id = props.route.params.id;
      let response = await Axios({
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=02594f17504d1a82ec172f4a3de468ea&language=en-US&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        method: 'GET',
      });
      setData(response?.data);
      setLoading(false);
    } catch (error) {
      console.log('Error getting Data ', error);
      setLoading(false);
    }
  };
  return (
    <View style={{width:'100%',padding:20,height:'100%', marginTop: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        {!loading ? (
          <>
            <BackgroundBanner
              movieName={data?.title + ' ' + data?.release_date?.slice(0, 4) || '0'}
              category={
                data?.genres?.[0]?.name + ` \u2022 ` + data?.runtime + ' min'
              }
              progress={data?.popularity?.toFixed(0) + '%'}
              overView={data?.overview}
              Img={data?.poster_path}
              creator={'Sam Levinson'}
            />

            <Text style={styles.txt}>{Constants.serialCast}</Text>
            <FlatList
              data={castList}
              horizontal
              renderItem={({item, index}) => <CastList item={item} />}
              scrollEnabled={true}
              keyExtractor={(item, index) => item.productId}
              showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.txt}>{Constants.fullCast}</Text>

            <View style={styles.divider} />

            <Text style={styles.txt}>{Constants.cuurentSeason}</Text>

            <View style={styles.currSeasonContainer}>
              <View style={styles.row}>
                <Image
                  source={
                    data?.poster_path === null
                      ? ImagePath.dummyImg
                      : {
                          uri:
                            'https://www.themoviedb.org/t/p/w1280/' +
                            data?.poster_path,
                        }
                  }
                  style={styles.img}
                />
                <View style={styles.innerContainer}>
                  <Text style={styles.txt1}>Season 2</Text>
                  <Text style={styles.txt1}>
                    {data && data?.release_date && data?.release_date.slice(0, 4)} | 8 Episodes
                  </Text>
                  <Text style={styles.des}>
                    Season 2 of Euphoria premiered on{'\n'} {data?.release_date}
                    .
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.txt}>{Constants.viewAllSeasons}</Text>
          </>
        ) : (
          <ActivityIndicator color={Colors.darkBlue} size={'small'} />
        )}
      </ScrollView>
    </View>
  );
}
