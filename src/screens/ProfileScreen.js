import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Switch} from 'react-native';
import {strings} from '../constants';
import ProfileScreenStyles from '../styles/ProfileScreenStyles';
import {Icon} from 'react-native-elements';
import {colors, metrics} from '../constants/index';

const Profile = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  return (
    <View style={ProfileScreenStyles.mainContainer}>
      <Image
        style={ProfileScreenStyles.path}
        source={require('../../assets/profilePath.png')}
      />
      <View style={ProfileScreenStyles.titleContainer}>
        <Text style={ProfileScreenStyles.titleText}>{strings.profile}</Text>
        <Icon
          name="edit-3"
          type="feather"
          size={metrics.size25}
          color={colors.ceruleanBlue}
          style={ProfileScreenStyles.editIcon}
        />
      </View>
      <View style={ProfileScreenStyles.userDetailsContainer}>
        <View>
          <Image
            style={ProfileScreenStyles.avatarPhoto}
            source={require('../../assets/profileAvatar.png')}
          />
        </View>
        <View style={ProfileScreenStyles.userTextContainer}>
          <Text style={ProfileScreenStyles.nameText}>{strings.jessie}</Text>
          <Text style={ProfileScreenStyles.userSubtitleText}>
            {strings.files1458}
          </Text>
        </View>
      </View>
      <View style={ProfileScreenStyles.storageContainer}>
        <View style={ProfileScreenStyles.progressTextContainer}>
          <Text style={ProfileScreenStyles.progressMainText}>
            {strings.thirtytwo}
          </Text>
          <Text style={ProfileScreenStyles.progressSecondText}>
            {strings.of100}
          </Text>
        </View>
        <View style={ProfileScreenStyles.progressBar}>
          <View style={ProfileScreenStyles.doneProgress} />
        </View>
        <TouchableOpacity style={ProfileScreenStyles.increaseTouchable}>
          <View>
            <Text style={ProfileScreenStyles.increaseSpaceText}>
              {strings.increaseSpace}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={ProfileScreenStyles.listContainer}>
        <View style={ProfileScreenStyles.storageManagementContainer}>
          <Text style={ProfileScreenStyles.storageText}>
            {strings.storageManagement}
          </Text>
          <TouchableOpacity>
            <Icon
              style={ProfileScreenStyles.rightIcon}
              name="chevron-right"
              type="feather"
              size={metrics.size25}
              color={colors.waterloo}
            />
          </TouchableOpacity>
        </View>

        <View style={ProfileScreenStyles.devicesContainer}>
          <View>
            <Text style={ProfileScreenStyles.devicesMainText}>
              {strings.devices}
            </Text>
            <Text style={ProfileScreenStyles.devicesSecondText}>
              {strings.iphone_mac_ipad}
            </Text>
          </View>
          <TouchableOpacity>
            <Icon
              style={ProfileScreenStyles.rightIcon}
              name="chevron-right"
              type="feather"
              size={metrics.size25}
              color={colors.waterloo}
            />
          </TouchableOpacity>
        </View>

        <View style={ProfileScreenStyles.cameraUploadsContainer}>
          <Text style={ProfileScreenStyles.cameraText}>
            {strings.cameraUploads}
          </Text>
          <View
            style={
              isEnabled1
                ? ProfileScreenStyles.switchEnabledContainer
                : ProfileScreenStyles.switchDisabledContainer
            }>
            <Switch
              trackColor={{false: colors.gullGray, true: colors.dodgerBlue}}
              thumbColor={colors.white}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
              style={ProfileScreenStyles.switch}
            />
          </View>
        </View>

        <View style={ProfileScreenStyles.useDataContainer}>
          <Text style={ProfileScreenStyles.useDataText}>
            {strings.useDataForFileTransfer}
          </Text>
          <View
            style={
              isEnabled2
                ? ProfileScreenStyles.switchEnabledContainer
                : ProfileScreenStyles.switchDisabledContainer
            }>
            <Switch
              trackColor={{false: colors.gullGray, true: colors.dodgerBlue}}
              thumbColor={colors.white}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
              style={ProfileScreenStyles.switch}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
