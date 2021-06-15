import {StyleSheet} from 'react-native';
import {colors, metrics} from '../constants/index';

const HomeScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: metrics.size1,
    backgroundColor: colors.dodgerBlue,
  },
  pathContainer: {
    flex: metrics.size0_6,
  },
  path: {
    width: '100%',
  },
  helloText: {
    fontSize: metrics.size34,
    color: colors.white,
    marginLeft: metrics.size35,
  },
  subheaderText: {
    fontSize: metrics.size20,
    color: colors.melrose,
    marginLeft: metrics.size35,
  },
  heroContainer: {
    flex: metrics.size1,
    marginTop: metrics.size45,
  },
  progressBar: {
    height: metrics.size6,
    borderRadius: metrics.size5,
    marginHorizontal: metrics.size35,
    backgroundColor: colors.mariner,
    marginBottom: metrics.size40,
    marginTop: metrics.size9,
  },
  doneProgress: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.hotPink,
    width: '67.5%',
    borderRadius: metrics.size5,
  },
  progressTextContainer: {
    flexDirection: 'row',
    marginTop: metrics.size15,
    marginLeft: metrics.size35,
  },
  progressMainText: {
    fontSize: metrics.size24,
    color: colors.white,
  },
  progressSecondText: {
    fontSize: metrics.size18,
    color: colors.melrose,
    marginTop: metrics.size6,
    marginLeft: metrics.size6,
  },
  contentContainer: {
    flex: metrics.size3,
    borderTopLeftRadius: metrics.size40,
    borderTopRightRadius: metrics.size40,
    backgroundColor: colors.white,
  },
  searchBar: {
    backgroundColor: colors.linkWater,
    marginHorizontal: metrics.size25,
    marginTop: metrics.size25,
    borderRadius: metrics.size23_5,
    flexDirection: 'row',
    alignItems: 'center',
    flex: metrics.size1,
  },
  input: {
    marginLeft: metrics.size14,
    fontSize: metrics.size16,
  },
  searchIcon: {
    marginLeft: metrics.size17,
  },

  localNavBar: {
    borderColor: colors.mischka,
    marginTop: metrics.size10,
    flexDirection: 'row',
    fontSize: metrics.size13,
    borderBottomWidth: metrics.size1,
    flex: metrics.size1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filesTextContainerFocus: {
    flex: metrics.size1,
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderBottomColor: colors.dodgerBlue,
    borderBottomWidth: metrics.size4,
  },
  filesTextContainerNotFocus: {
    flex: metrics.size1,
    alignItems: 'center',
  },
  foldersTextContainerFocus: {
    flex: metrics.size1,
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderBottomColor: colors.dodgerBlue,
    borderBottomWidth: metrics.size4,
  },
  foldersTextContainerNotFocus: {
    flex: metrics.size1,
    alignItems: 'center',
  },
  filesTextFocus: {
    color: colors.ceruleanBlue,
    fontWeight: 'bold',
    paddingBottom: metrics.size6,
  },
  filesTextNotFocus: {
    color: colors.waterloo,
  },
  foldersTextFocus: {
    color: colors.ceruleanBlue,
    fontWeight: 'bold',
    paddingBottom: metrics.size6,
  },
  foldersTextNotFocus: {
    color: colors.waterloo,
  },
  folders: {
    flex: metrics.size8,
    flexDirection: 'row',
    padding: metrics.size25,
  },
  files: {
    flex: metrics.size8,
    padding: metrics.size25,
  },
  foldersColumnOne: {
    flex: metrics.size1,
    marginRight: metrics.size25,
  },
  foldersColumnTwo: {
    flex: metrics.size1,
  },
  foldersSquaresUp: {
    backgroundColor: colors.whiteLilac,
    flex: metrics.size1,
    borderRadius: metrics.size25,
    flexDirection: 'row',
  },
  foldersSquaresDown: {
    backgroundColor: colors.whiteLilac,
    flex: metrics.size1,
    borderRadius: metrics.size25,
    marginTop: metrics.size25,
    flexDirection: 'row',
  },
  squaresMainText: {
    marginTop: metrics.size20,
    marginLeft: metrics.size20,
    color: colors.charade,
    fontSize: metrics.size16,
  },
  squaresSecondText: {
    marginLeft: metrics.size20,
    color: colors.shuttleGray,
    fontSize: metrics.size14,
  },
  squaresTextContainer: {
    flex: metrics.size3_5,
  },
  squaresIconContainer: {
    flex: metrics.size1,
    marginTop: metrics.size25,
    marginRight: metrics.size25,
  },
  squaresImagesContainer: {
    flexDirection: 'row',
    marginBottom: metrics.size22,
    marginLeft: metrics.size20,
    alignItems: 'flex-end',
    flex: metrics.size1,
  },
  userpicMain: {
    borderRadius: metrics.size12,
    borderWidth: metrics.size1,
    borderColor: colors.whiteLilac,
  },
  userpicSecond: {
    borderRadius: metrics.size12,
    borderWidth: metrics.size2,
    borderColor: colors.whiteLilac,
    marginLeft: metrics.size10Negative,
  },
  noavatar: {
    borderRadius: metrics.size12,
    borderWidth: metrics.size2,
    borderColor: colors.whiteLilac,
    marginLeft: metrics.size10Negative,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPicText: {
    fontSize: metrics.size14,
    color: colors.white,
  },
});

export default HomeScreenStyles;
