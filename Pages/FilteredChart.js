import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Picker } from "@react-native-picker/picker";
import heartRateData from "../ExampleData/heartRate.json";

export default function HeartRateChart() {
  const [selectedHours, setSelectedHours] = useState(2);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
  };

  const getLabelInterval = (hours) => {
    if (hours === 24) return 2 * 60 * 60 * 1000; // 2 hours
    if (hours === 12) return 60 * 60 * 1000; // 1 hour
    if (hours === 8) return 60 * 60 * 1000;
    if (hours === 6) return 30 * 60 * 1000; // 30 minutes
    if (hours === 4) return 30 * 60 * 1000;
    if (hours === 2) return 30 * 60 * 1000;
    return Math.floor((hours * 60) / 15) * 60 * 1000; // max 15 labels
  };


  const processData = (hours) => {
    const endTime = new Date(heartRateData.heart_rate.endTimestampGMT);
    const startTime = new Date(endTime.getTime() - hours * 60 * 60 * 1000);

    const filteredData = heartRateData.heart_rate.heartRateValues.filter(
      ([timestamp]) => timestamp >= startTime.getTime()
    );

    const labelInterval = getLabelInterval(hours);
    let labels = [];
    if (labelInterval) {
      labels = filteredData
        .filter(([timestamp]) => timestamp % labelInterval === 0)
        .map(([timestamp]) => formatTime(timestamp));
    } else {
      // Auto-adjust for best visibility (max 15 labels)
      const autoInterval = Math.max(1, Math.floor(filteredData.length / 15));
      labels = filteredData
        .filter((_, index) => index % autoInterval === 0)
        .map(([timestamp]) => formatTime(timestamp));
    }

    return {
      labels,
      data: filteredData.map(([, heartRate]) => heartRate),
    };
  };

  const { labels, data } = processData(selectedHours);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        Heart Rate Chart
      </Text>

      <Picker
        selectedValue={selectedHours}
        onValueChange={(value) => setSelectedHours(value)}
        style={{ height: 50, width: '95%', alignSelf: "center" }}
      >
        {/** Hours to picker */}
        {[2, 4, 6, 8, 12, 24].map((hours) => (
          <Picker.Item key={hours} label={`Last ${hours} Hours`} value={hours} />
        ))}
      </Picker>

      <LineChart
        data={{
          labels: labels,
          datasets: [{ data: data }],
        }}
        width={Dimensions.get("window").width - 10}
        height={300}
        yAxisSuffix="bpm"
        segments={10} //bpm value amount
        withVerticalLines={false}
        xLabelsOffset={-10} //time values offset
        verticalLabelRotation={50}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#ff9800",
          backgroundGradientTo: "#ff5722",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 200, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(020, 001, 001, ${opacity})`,
          style: { borderRadius: 2 },
          propsForDots: { r: "1", strokeWidth: "1", stroke: "#bbffa5" },
        }}
        bezier
        style={{ padding: 2, margin: 2, borderRadius: 10 }}
      />

    </View>

  );
}
