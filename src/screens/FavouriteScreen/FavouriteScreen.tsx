import MovieLists from '../../components/Lists/MovieLists';
import React, { useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Constants from '../../common/contant/Constants';

export interface NavigationProps {
  navigation: any;
  route?: any;
}

export default function FavouriteScreen(props: NavigationProps) {
  const {navigation} = props;

  const [favouriteItems, setFavouriteItems] = useState<any>(
    props.route.params.latestList,
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>
        {Constants.favouriteScreen}
      </Text>

      <FlatList
        data={favouriteItems}
        horizontal
        style={styles.flatlist}
        renderItem={({item, index}) => {
          if (item.isFavourite) {
            return (
              <MovieLists
                item={item}
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
