import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default function ChartStyles() {
  return (
    <View>
  <Text style={{fontSize: 35, fontWeight: 'bold'}}>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            1, 2, 5, 4, 2, 6,
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // fit for screen size
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    //Styling part
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#cf00e263",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(100, 110, 230, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(200, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    //if removed lines will be straight from point a to b
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
  );
}

