import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  },

  topSearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 15,
    paddingVertical: 13,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
    padding: 25,
  },

  iconSearch: {
    fontSize: 24,
    color: 'black',
    backgroundColor: 'red',
  },

  whereToText: {
    color: 'black',
    fontWeight: '900',
    fontSize: 14,
    paddingLeft: 20,
  },

  subWhereToText: {
    color: 'black',
    fontSize: 11,
    paddingLeft: 20,
  },

  iconFilter: {
    fontSize: 24,
    color: 'black',
    backgroundColor: 'red',
  },

  containerScroll: {
    marginTop: 10,
    borderColor: '#D3D3D3',
    borderBottomWidth: 0.1,
  },

  topNavBar: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
  },

  bottomNavBar: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },

  textNavTop: {
    fontSize: 12,
    color: '#808080',
    paddingTop: 5,
    fontWeight: '800',
  },
  textNavBtnStart: {
    flex: 1,
    marginHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNavBtnEnd: {
    flex: 1,
    marginHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textNavBot: {
    fontSize: 11,
    color: '#808080',
    paddingTop: 5,
  },

  boxToggle: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 9,
    backgroundColor: '#fff',
    margin: 30,
    paddingBottom: 20,
  },

  boxToggleText1: {
    color: 'black',
    marginTop: 10,
    marginLeft: 20,
    fontWeight: '800',
    fontSize: 16,
  },
  boxToggleText2: {
    color: '#808080',
    marginTop: 3,
    marginLeft: 20,
    fontSize: 14,
  },

  containerToggle: {
    padding: 5,
    alignSelf: 'center',
  },

  imageKoh: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 350,
    width: 350,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 15,
  },

  imageScroll: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
  },

  descriptionDetails: {
    marginLeft: 29,
    marginTop: 10,
  },

  locationText: {
    marginBottom: 3,
    fontWeight: '900',
    color: 'black',
  },

  designerText: {
    color: 'grey',
    marginBottom: 2,
  },

  stayingDateText: {
    marginBottom: 10,
    color: 'grey',
  },

  priceTaxText: {
    color: 'black',
    textDecorationLine: 'underline',
    paddingBottom: 50,
  },

  priceNum: {
    fontWeight: 'bold',
  },
});
