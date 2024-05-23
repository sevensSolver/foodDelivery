import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Dimensions,
  FlatList,
  Linking,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';

export class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: moment(new Date()).format('YYYY-MM-DD'),
      datesArray: [
        {date: 'Select date', time: 'Select time'},
        {date: 'Select date', time: 'Select time'},
        {date: 'Select date', time: 'Select time'},
      ],
      selectType: '',
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({currentTime: new Date()});
    }, 1000);
    return () => clearInterval(intervalId);
  }

  setDate = (index) => {
    if (this.state.selectType == 'date') {
      let _dates = this.state.datesArray;
    } else {
      let _dates = this.state.datesArray;
      this.setState({datesArray: _dates});
    }
  };

  render() {
    return (
      <View style={styles.mainStyle}>
        <View style={styles.modalView}>
          <Calendar
            onDayPress={(day) => {
              console.log('date >>', day);
              this.setState({selected: day.dateString});
            }}
            onDayPress={(day) => {
              this.setState({selected: day.dateString});
              setTimeout(() => {
                this.setDate();
              }, 300);
            }}
            markedDates={{
              [this.state.selected]: {
                selected: true,
                selectedColor: 'green',
                selectedTextColor: '#fff',
              },
            }}
            theme={{
              textMonthFontSize: 20,
              textMonthFontWeight: '400',
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayTextColor: '#ffffff',
              todayTextColor: 'green',
              arrowColor: '#000',
            }}
          />
          <Text> Hello, this is a smiley face emoji: &#x1F604; </Text>

          <Text style={styles.time}>
            {this.state.currentTime.toLocaleTimeString()}
          </Text>
          <Text style={styles.date}>
            {this.state.currentTime.toDateString()}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: 400,
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 30,
    alignSelf: 'center',
    alignContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#fff',
  },
  time: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 20,
  },
});
