import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../common/colors/Colors';
import Constants from '../../common/contant/Constants';

export interface NavigationProps {
  onPress?: any;
  selectedTab?: any;
}

function CustomTab(props:NavigationProps) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
       testID={'flat-list'}
        style={[
          styles.selectedTab,
          {
            backgroundColor:
              props.selectedTab === Constants.latest ? Colors.navyBlue : null,
          },
        ]}
        onPress={() => props.onPress('Latest')}>
        <Text
          style={[
            styles.selectedTxt,
            {
              color:
                props.selectedTab === Constants.latest
                  ? Colors.white
                  : Colors.black,
              fontWeight:
                props.selectedTab === Constants.latest ? 'bold' : null,
            },
          ]}>
          {Constants.latest}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.selectedTab,
          {
            backgroundColor:
              props.selectedTab === Constants.popular ? Colors.navyBlue : null,
          },
        ]}
        onPress={() => props.onPress('Popular')}>
        <Text
          style={[
            styles.selectedTxt,{
              color:
                props.selectedTab === Constants.popular
                  ? Colors.white
                  : Colors.black,
              fontWeight:
                props.selectedTab === Constants.popular ? 'bold' : null,
            },
          ]}>
          {Constants.popular}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    width: '70%',
    height: 45,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 30,
    margin: 10,
    flexDirection: 'row',
    paddingHorizontal: 7,
  },
  selectedTab: {
    width: '50%',
    borderRadius: 30,
    marginVertical: 5,
  },
  selectedTxt: {
    alignSelf: 'center',
    marginTop: 7,
  },
});

export default CustomTab;
