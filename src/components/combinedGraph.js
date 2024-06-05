import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const GraphComponent = (props) => {
  const [graphData, setGraphData] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState({
    NDVI: true,
    NutritionIndex: true,
    SoilMoisture: true,
    PlantMoisture: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Your data fetching logic here
    // Example data structure for graphData:
    const graphDataExample = {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
      datasets: [
        {
          label: 'NDVI',
          data: [0.2, 0.5, 0.7, 0.9, 0.6],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          fill: false,
        },
        {
          label: 'Nutrition Index',
          data: [0.4, 0.6, 0.8, 0.3, 0.7],
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          fill: false,
        },
        // Add more datasets for Soil Moisture and Plant Moisture similarly
      ],
    };
    setGraphData(graphDataExample);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedIndices({
      ...selectedIndices,
      [name]: checked,
    });
  };

  const filteredDatasets = graphData.datasets.filter(
    (dataset) => selectedIndices[dataset.label]
  );

  const filteredData = { ...graphData, datasets: filteredDatasets };

  return (
    <div>
      <h3>Line Chart with Checkbox</h3>
      <div>
        {Object.keys(selectedIndices).map((indexName) => (
          <label key={indexName}>
            <input
              type="checkbox"
              name={indexName}
              checked={selectedIndices[indexName]}
              onChange={handleCheckboxChange}
            />
            {indexName}
          </label>
        ))}
      </div>
      <div>
        {graphData.labels && (
          <Line
            data={filteredData}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default GraphComponent;
