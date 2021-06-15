import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import HomeScreenStyles from '../styles/HomeScreenStyles';
import {colors, strings, metrics} from '../constants/index';
import {Icon} from 'react-native-elements';

const Folders = () => {
  return (
    <View style={HomeScreenStyles.folders}>
      <View style={HomeScreenStyles.foldersColumnOne}>
        <View style={HomeScreenStyles.foldersSquaresUp}>
          <View style={HomeScreenStyles.squaresTextContainer}>
            <Text style={HomeScreenStyles.squaresMainText}>
              {strings.nextBigThing}
            </Text>
            <Text style={HomeScreenStyles.squaresSecondText}>
              {strings.f12}
            </Text>
            <View style={HomeScreenStyles.squaresImagesContainer}>
              <Image
                style={HomeScreenStyles.userpicMain}
                source={require('../../assets/userpic1.png')}
              />
              <Image
                style={HomeScreenStyles.userpicSecond}
                source={require('../../assets/userpic2.png')}
              />
              <Image
                style={HomeScreenStyles.userpicSecond}
                source={require('../../assets/userpic1.png')}
              />

              <Image
                style={HomeScreenStyles.noavatar}
                source={require('../../assets/noavatar.png')}
              />
            </View>
          </View>

          <View style={HomeScreenStyles.squaresIconContainer}>
            <Icon
              style={HomeScreenStyles.searchIcon}
              name="more-vertical"
              type="feather"
              size={metrics.size20}
              color={colors.waterloo}
            />
          </View>
        </View>

        <View style={HomeScreenStyles.foldersSquaresDown}>
          <View style={HomeScreenStyles.squaresTextContainer}>
            <Text style={HomeScreenStyles.squaresMainText}>
              {strings.freebieProject}
            </Text>
            <Text style={HomeScreenStyles.squaresSecondText}>{strings.f3}</Text>
            <View style={HomeScreenStyles.squaresImagesContainer}>
              <Image
                style={HomeScreenStyles.userpicMain}
                source={require('../../assets/userpic1.png')}
              />
              <Image
                style={HomeScreenStyles.userpicSecond}
                source={require('../../assets/userpic2.png')}
              />
              <Image
                style={HomeScreenStyles.userpicSecond}
                source={require('../../assets/userpic1.png')}
              />
            </View>
          </View>

          <View style={HomeScreenStyles.squaresIconContainer}>
            <Icon
              style={HomeScreenStyles.searchIcon}
              name="more-vertical"
              type="feather"
              size={metrics.size20}
              color={colors.waterloo}
            />
          </View>
        </View>
      </View>
      <View style={HomeScreenStyles.foldersColumnTwo}>
        <View style={HomeScreenStyles.foldersSquaresUp}>
          <View style={HomeScreenStyles.squaresTextContainer}>
            <Text style={HomeScreenStyles.squaresMainText}>
              {strings.topSecret}
            </Text>
            <Text style={HomeScreenStyles.squaresSecondText}>{strings.f7}</Text>
            <View style={HomeScreenStyles.squaresImagesContainer}>
              <Image
                style={HomeScreenStyles.userpicMain}
                source={require('../../assets/userpic1.png')}
              />
              <Image
                style={HomeScreenStyles.userpicSecond}
                source={require('../../assets/userpic2.png')}
              />
              <Image
                style={HomeScreenStyles.userpicSecond}
                source={require('../../assets/userpic1.png')}
              />

              <Image
                style={HomeScreenStyles.noavatar}
                source={require('../../assets/noavatar.png')}
              />
            </View>
          </View>

          <View style={HomeScreenStyles.squaresIconContainer}>
            <Icon
              style={HomeScreenStyles.searchIcon}
              name="more-vertical"
              type="feather"
              size={metrics.size20}
              color={colors.waterloo}
            />
          </View>
        </View>

        <View style={HomeScreenStyles.foldersSquaresDown}>
          <View style={HomeScreenStyles.squaresTextContainer}>
            <Text style={HomeScreenStyles.squaresMainText}>
              {strings.londonMeetup}
            </Text>
            <Text style={HomeScreenStyles.squaresSecondText}>
              {strings.f453}
            </Text>
            <View style={HomeScreenStyles.squaresImagesContainer}>
              <Image
                style={HomeScreenStyles.userpicMain}
                source={require('../../assets/userpic1.png')}
              />
              <Image
                style={HomeScreenStyles.userpicSecond}
                source={require('../../assets/userpic2.png')}
              />
              <Image
                style={HomeScreenStyles.userpicSecond}
                source={require('../../assets/userpic1.png')}
              />
              <Image
                style={HomeScreenStyles.noavatar}
                source={require('../../assets/noavatar.png')}
              />
            </View>
          </View>
          <View style={HomeScreenStyles.squaresIconContainer}>
            <Icon
              style={HomeScreenStyles.searchIcon}
              name="more-vertical"
              type="feather"
              size={metrics.size20}
              color={colors.waterloo}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Folders;
