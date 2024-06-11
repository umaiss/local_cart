import {StyleSheet} from 'react-native';
import Colors from '../../../Utils/Colors';

const styles = StyleSheet.create({
  contentContainer: {flexGrow: 1, paddingBottom: '30%'},
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: '5%',
    paddingHorizontal: '10%',
    paddingVertical: '3%',
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.ORANGE,
  },
  title: {
    color: Colors.OFF_WHITE,
    fontSize: 15,
    fontWeight: 'regular',
    marginVertical: 10,
  },
  header: {
    color: Colors.OFF_WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '10%',
  },
  containerDeleteIcon: {flex: 1, alignItems: 'flex-end'},
  iconDelete: {
    height: 30,
    width: 30,
  },
  lblHeader: {
    color: Colors.OFF_WHITE,
    fontSize: 25,
    fontWeight: 'bold',
    marginStart: 10,
  },
  containerRemoveButton: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  containerAddButton: {
    backgroundColor: Colors.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  containerInput: {
    marginTop: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textinput: {
    backgroundColor: Colors.GREY,
    height: 50,
    width: '20%',
    marginEnd: 10,
    borderRadius: 30,
    color: Colors.OFF_WHITE,
    paddingHorizontal: 20,
  },

  container: {backgroundColor: 'black', flexGrow: 1},
  containerDesc: {
    marginEnd: '10%',
  },
  lblAdd: {fontSize: 25, fontWeight: 'bold'},
  lblDone: {
    color: Colors.OFF_WHITE,
    fontSize: 25,
    fontWeight: 'bold',
  },
  lblEncouragement: {
    color: Colors.OFF_WHITE,
    fontWeight: 'medium',
  },
  numberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ORANGE,
    flexDirection: 'row',
  },
  itemContainer: {
    marginTop: 32,
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.GREY,
    flexDirection: 'row',
    borderColor: Colors.OFF_WHITE,
  },
  sectionContainer: {
    marginTop: 32,
    padding: 35,
    borderWidth: 0.5,
    borderRadius: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: Colors.OFF_WHITE,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  tasksNumberLabel: {fontSize: 30, fontWeight: 'bold'},
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default styles;
