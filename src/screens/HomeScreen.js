import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import HomeScreenStyles from '../styles/HomeScreenStyles';
import {colors, strings, metrics} from '../constants/index';
import {Icon} from 'react-native-elements';
import Folders from '../components/Folders';
import Files from '../components/Files';
const Home = () => {
  const [focus, setFocus] = useState(true);
  console.log(focus);
  useEffect(() => {}, [focus]);
  return (
    <View style={HomeScreenStyles.mainContainer}>
      <View style={HomeScreenStyles.pathContainer}>
        <Image
          style={HomeScreenStyles.path}
          source={require('../../assets/homePath.png')}
        />
      </View>
      <View style={HomeScreenStyles.heroContainer}>
        <Text style={HomeScreenStyles.helloText}>{strings.hello}</Text>
        <Text style={HomeScreenStyles.subheaderText}>
          {strings.atTheMoment}
        </Text>
        <View style={HomeScreenStyles.progressTextContainer}>
          <Text style={HomeScreenStyles.progressMainText}>
            {strings.thirtytwo}
          </Text>
          <Text style={HomeScreenStyles.progressSecondText}>
            {strings.of100}
          </Text>
        </View>
        <View style={HomeScreenStyles.progressBar}>
          <View style={HomeScreenStyles.doneProgress} />
        </View>
      </View>

      <View style={HomeScreenStyles.contentContainer}>
        <View style={HomeScreenStyles.searchBar}>
          <Icon
            style={HomeScreenStyles.searchIcon}
            name="search"
            type="feather"
            size={metrics.size20}
            color={colors.gullGray}
          />
          <TextInput
            style={HomeScreenStyles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
          />
        </View>
        <View style={HomeScreenStyles.localNavBar}>
          <View
            style={
              focus
                ? HomeScreenStyles.filesTextContainerNotFocus
                : HomeScreenStyles.filesTextContainerFocus
            }>
            <TouchableOpacity
              onPress={() => {
                setFocus(false);
              }}>
              <Text
                style={
                  focus
                    ? HomeScreenStyles.filesTextNotFocus
                    : HomeScreenStyles.filesTextFocus
                }>
                {strings.files}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              focus
                ? HomeScreenStyles.foldersTextContainerFocus
                : HomeScreenStyles.foldersTextContainerNotFocus
            }>
            <TouchableOpacity
              onPress={() => {
                setFocus(true);
              }}>
              <Text
                style={
                  focus
                    ? HomeScreenStyles.foldersTextFocus
                    : HomeScreenStyles.foldersTextNotFocus
                }>
                {strings.folders}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {focus ? <Folders /> : <Files />}
      </View>
    </View>
  );
};

export default Home;
