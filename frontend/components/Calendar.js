import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const EntryCalendar = () => {
const [selected, setSelected] = useState('');

return (
    <Calendar
    // Customize the appearance of the calendar
    style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 370
    }}
    // Specify the current date
    // current={'2023-04-13'}
    // Callback that gets called when the user selects a day
    onDayPress={day => {
        console.log('selected day', day);
    }}
    // Mark specific dates as marked
    markedDates={{
        '2023-04-01': {selected: true, marked: true, selectedColor: 'green'},
        '2023-04-02': {selected: true, marked: true, selectedColor: 'red'},
    }}
    />
);
};

export default EntryCalendar;