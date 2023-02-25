import MovieLists from '../../components/Lists/MovieLists';
import React, { useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Constants from '../../common/contant/Constants';
import MovieListsPopular from '../../components/Lists/MovieListsPopular';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavourite } from '../../redux/favouriteApp'

export interface NavigationProps {
  navigation: any;
  route?: any;
}

export default function FavouriteScreen(props: NavigationProps) {
  const favouriteList = useSelector(state => state.favouriteList)
  const dispatch = useDispatch()
  const {navigation} = props;

  const [favouriteItems, setFavouriteItems] = useState<any>(
    favouriteList ? favouriteList : [] ,
  );
  const [reload, setReload] = useState<any>(false);

  useEffect(()=>{
    setFavouriteItems(favouriteList)
    setReload(!reload)
  },[favouriteList])

  const handleFavourite = (item: any) => {
    dispatch(deleteFavourite(item.id))
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',}}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>
        {Constants.favouriteScreen}
      </Text>
      </View>
      <FlatList
        data={favouriteItems}
        style={styles.flatlist}
        renderItem={({item, index}) => {
          if (item.isFavourite) {
            return (
              <MovieListsPopular
                item={item}
                onPressFavourite={() => handleFavourite(item)}
                onPress={() =>
                  navigation.navigate('DetailPage', {
                    id: item.id,
                  })
                }
                onPressDot={() => console.log('Dot clicked')}
              />
            );
          }
        }}
        scrollEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
