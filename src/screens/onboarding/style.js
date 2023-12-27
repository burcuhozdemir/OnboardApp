import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginTop: 'auto',
  },
  image: {height: 300, resizeMode: 'contain'},
  titleText: {
    fontFamily: 'Mulish-Bold',
    fontSize: 26,
    color: '#000000',
  },
  subTitleText: {
    fontFamily: 'Mulish-Light',
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
  buttonRows: {
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  buttonTextBlack: {
    fontFamily: 'Mulish-Light',
    fontSize: 14,
    color: '#000000',
  },
  stepIndicatorContainer: {flexDirection: 'row', gap: 10},
  stepIndicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#AEC5E5',
  },
  footer: {marginTop: 'auto'},
});

export default style;
