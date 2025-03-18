import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Picker } from '@react-native-picker/picker';

export default function FilteredCharts() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('24');

  // Example data based on time range
  const dataFor1Hour = [70, 72, 68, 75, 74, 71];
  const dataFor24Hours = [72, 75, 73, 71, 70, 76, 74, 75, 78, 80, 76, 75, 72, 70, 69, 75, 74, 78, 76, 77, 72, 70, 74, 75];

  // Dynamically change the data based on the selected time range
  const getDataForTimeRange = (timeRange) => {
    if (timeRange === '1') {
      return dataFor1Hour;
    }
    return dataFor24Hours;
  };

  // Generate time labels based on the selected time range
  const getLabelsForTimeRange = (timeRange) => {
    if (timeRange === '1') {
      return ["0:00", "0:10", "0:20", "0:30", "0:40", "0:50"]; // in 10-minute intervals
    }
    return ["12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"]; // Labels for 24 hours
  };

  return (
    <View>
      <Text style={{ fontSize: 35, fontWeight: 'bold',  }}>Heart Rate Chart</Text>
      
      {/* For Selecting time range 1 to 24 hours*/}
       <Picker
        selectedValue={selectedTimeRange}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue) => setSelectedTimeRange(itemValue)}
      >
        {/* Generated Items for 1 to 24 hours */}
        {[...Array(24).keys()].map((i) => (
          <Picker.Item key={i} label={`${i + 1} Hour${i === 0 ? '' : 's'}`} value={`${i + 1}`} />
        ))}
      </Picker>

      <LineChart
        data={{
          labels: getLabelsForTimeRange(selectedTimeRange),
          datasets: [
            {
              data: getDataForTimeRange(selectedTimeRange),
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="HR"
        yAxisSuffix="bpm"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#cf00e263",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(100, 110, 230, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(200, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
}
