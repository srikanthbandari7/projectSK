import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/checkbox.css'


import MuiButton from '@material-ui/core/Button'

import { Line } from 'react-chartjs-2';
import axios from 'axios';
import UploadData from './uploadData'
import UploadExcelPopUp from './uploadExcel';
import html2canvas from 'html2canvas';
// import {CategoryScale, Chart, Linear} from 'chart.js'
// Chart.register(CategoryScale);
import jsPDF from 'jspdf';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)


const GraphComponent = () => {
  const [data, setData] = useState({});
    const [pdfData, setPdfData] = useState([]);
    const chartRef = useRef(null);

    const [selectedArrays, setSelectedArrays] = useState({
        all: false,
        array1: true,
        array2: true,
        array3: false,
        array4: false,
       
      });


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


  const chartData = {
    // labels: data.labels, // Assuming your API response has labels array
    labels: [0,5,10,15,20,25,30,35,40,45,50,55],
    datasets: [
      {
        label: 'Array 1',
        // data: data.array1, // Assuming your API response has array1 data
        data : [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        fill: false,
        
      },
      {
        label: 'Array 2',
        // data: data.array2, // Assuming your API response has array2 data
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: false,
        // hidden: !showArray2,
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
        // hidden: !showArray4,
      },
      {
        label: 'Array 5',
        // data: data.array1, // Assuming your API response has array1 data
        data : [75, 69, 90, 91, 66, 75, 60],
        borderColor: '#5c5c8a',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        fill: false,
        
      },
      {
        label: 'Array 6',
        // data: data.array2, // Assuming your API response has array2 data
        data: [38, 58, 50, 29, 96, 37, 96],
        borderColor: '#b3003b',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: false,
        // hidden: !showArray2,
      },
      {
        label: 'Array 7',
        // data: data.array3, // Assuming your API response has array3 data
        data: [50, 33, 59, 78, 43, 64, 88],
        borderColor: '#d807eb',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        fill: false,
        // hidden: !showArray3,
      },
      {
        label: 'Array 8',
        // data: data.array4, // Assuming your API response has array4 data
        data: [11,36,65,36,90,67, 89,99],
        borderColor: '#05faea',
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
        fill: false,
        // hidden: !showArray4,
      },
    ],
  };


  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'all') {
      setSelectedArrays({
        all: checked,
        array1: checked,
        array2: checked,
        array3: checked,
        array4: checked,
       
      });
    } else {
      setSelectedArrays({
        ...selectedArrays,
        [name]: checked,
        
      });
    }
  };

  const filteredDatasets = chartData.datasets.filter(
    (dataset) => selectedArrays[dataset.label.toLowerCase().replace(' ', '')]
  );

  const filteredData = { ...chartData, datasets: filteredDatasets };

 

  return (
   <div style={{backgroundColor:'	#6b99c7'}}>
    {/* <UploadData/> */}
    <UploadExcelPopUp/>
     <div  style={{height:'900px', width:'900px', marginLeft:'450px'}} >
      <div style={{marginBottom:'30px', marginLeft:'200px'}}  >
        <label  style={{marginRight:'11px', fontSize:'16px'}}  >
          <input
          className='custom-checkbox'
            type="checkbox"
            name="all"
            checked={selectedArrays.all}
            onChange={handleCheckboxChange}
          />
          Select All
        </label>
        {chartData.datasets.map((dataset) => (
          <label key={dataset.label}  style={{marginRight:'11px'}}>
            <input
            className='custom-checkbox'
              type="checkbox"
              name={dataset.label.toLowerCase().replace(' ', '')}
              checked={selectedArrays[dataset.label.toLowerCase().replace(' ', '')]}
              onChange={handleCheckboxChange}
            />
            {dataset.label}
          </label>
        ))}&nbsp; &nbsp;
        {/* <button className='btn btn-primary'><b>Download PDF</b></button> */}
        <MuiButton
            // onClick={handleOpen}
            variant="contained"
            color="primary"
            // className={classes.button}
            // startIcon={<CloudUploadIcon />}
            style = {{backgroundColor: 'rgb(114, 49, 12)', color: 'white'}}
        >
            Download PDF
        </MuiButton>
      </div>
      <Line data={filteredData} style={{backgroundColor:'#ede9d5'}} ref={chartRef}/>Days
    </div>
   </div>
  );
};

export default GraphComponent;
