import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
// import {CategoryScale, Chart, Linear} from 'chart.js'; 
// Chart.register(CategoryScale);
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ChartComponent = () => {
  const [data, setData] = useState({});
  const [showAll, setShowAll] = useState(true);
  const [showArray1, setShowArray1] = useState(false);
  const [showArray2, setShowArray2] = useState(false);
  const [showArray3, setShowArray3] = useState(false);
  const [showArray4, setShowArray4] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('your-api-url');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const toggleArray = (arrayNumber) => {
    switch (arrayNumber) {
      case 1:
        setShowArray1(!showArray1);
        break;
      case 2:
        setShowArray2(!showArray2);
        break;
      case 3:
        setShowArray3(!showArray3);
        break;
      case 4:
        setShowArray4(!showArray4);
        break;
      default:
        break;
    }
  };

  const toggleAll = () => {
    setShowAll(showAll);
    setShowArray1(showAll);
    setShowArray2(showAll);
    setShowArray3(showAll);
    setShowArray4(showAll);
  };

  const chartData = {
    // labels: data.labels, // Assuming your API response has labels array
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Array 1',
        // data: data.array1, // Assuming your API response has array1 data
        data : [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        fill: false,
        hidden: !showArray1,
      },
      {
        label: 'Array 2',
        // data: data.array2, // Assuming your API response has array2 data
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: false,
        hidden: !showArray2,
      },
      {
        label: 'Array 3',
        // data: data.array3, // Assuming your API response has array3 data
        data: [45, 23, 54, 66, 34, 56, 78],
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        fill: false,
        // hidden: !showArray3,
      },
      {
        label: 'Array 4',
        // data: data.array4, // Assuming your API response has array4 data
        data: [12, 34, 56, 78, 90, 45, 23],
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
        fill: false,
        hidden: !showArray4,
      },
    ],
  };

  return (
    <div style={{height:'700px', width:'700px', marginLeft:'550px', marginTop:'100px'}} >
     <div style={{marginBottom:'30px', marginLeft:'200px', display:'flex'}} >
     <div >
        <label>Show All</label>
        <input type="checkbox" checked={showAll} onChange={toggleAll} />
      </div>
      <div>
        <label>Array 1</label>
        <input type="checkbox" checked={showArray1} onChange={() => toggleArray(1)} />
      </div>
      <div>
        <label>Array 2</label>
        <input type="checkbox" checked={showArray2} onChange={() => toggleArray(2)} />
      </div>
      <div>
        <label>Array 3</label>
        <input type="checkbox" checked={showArray3} onChange={() => toggleArray(3)} />
      </div>
      <div>
        <label>Array 4</label>
        <input type="checkbox" checked={showArray4} onChange={() => toggleArray(4)} />
      </div>
     </div>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
