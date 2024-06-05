import React, { useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

const GraphComponent = () => {
  const [dataArray1, setDataArray1] = useState([1, 2, 3, 4, 5]);
  const [dataArray2, setDataArray2] = useState([5, 4, 3, 2, 1]);
  const [dataArray3, setDataArray3] = useState([3, 5, 1, 6, 2]);
  const [dataArray4, setDataArray4] = useState([2, 3, 1, 4, 5]);
  const [showArray1, setShowArray1] = useState(true);
  const [showArray2, setShowArray2] = useState(true);
  const [showArray3, setShowArray3] = useState(true);
  const [showArray4, setShowArray4] = useState(true);
  const [showArrayAll, setShowArrayAll] = useState(true, true, true, true );

  const chartRef = useRef();

  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Array 1',
        data: showArray1 ? dataArray1 : [],
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Array 2',
        data: showArray2 ? dataArray2 : [],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Array 3',
        data: showArray3 ? dataArray3 : [],
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Array 4',
        data: showArray4 ? dataArray4 : [],
        borderColor: 'orange',
        fill: false,
      },
    ],
  };

//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.autoTable({
//       head: [['Label', 'Data']],
//       body: [
//         ['Array 1', dataArray1.join(', ')],
//         ['Array 2', dataArray2.join(', ')],
//         ['Array 3', dataArray3.join(', ')],
//         ['Array 4', dataArray4.join(', ')],
//         ['labels' , ['1', '2', '3', '4', '5'].join(', ')],
//       ],
//     });
//     doc.save('graph_data.pdf');
//   };
 
const downLoadFormat = ()=>{
    if(dataArray1){
        const doc = new jsPDF();
    doc.autoTable({
      head: [['Label', 'Data']],
      body: [
        ['Array 1', dataArray1.join(', ')],
        ['labels' , ['1', '2', '3', '4', '5'].join(', ')],
      ],
    });
    doc.save('graph_data.pdf')
    } else if(dataArray2 ){
        const doc = new jsPDF();
        doc.autoTable({
          head: [['Label', 'Data']],
          body: [
            ['Array 2', dataArray2.join(', ')],
            ['labels' , ['1', '2', '3', '4', '5'].join(', ')],
          ],
        });
        doc.save('graph_data.pdf')
    }
}


const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Label', 'Data']],
      body: [
        ['Array 1', dataArray1.join(', ')],
        ['Array 2', dataArray2.join(', ')],
        ['Array 3', dataArray3.join(', ')],
        ['Array 4', dataArray4.join(', ')],
        ['Days' , ['1', '2', '3', '4', '5'].join(', ')],
      ],
    });
    doc.save('graph_data.pdf');
  };

  return (
    <div style={{height:'700px', width:'700px', marginLeft:'550px', marginTop:'100px'}}>
      
      <div>
      <label>
          <input type="checkbox" checked={showArrayAll} onChange={() => setShowArrayAll(!showArrayAll)} />
          All
        </label>
        <label>
          <input type="checkbox" checked={showArray1} onChange={() => setShowArray1(!showArray1)} />
          Array 1
        </label>
        <label>
          <input type="checkbox" checked={showArray2} onChange={() => setShowArray2(!showArray2)} />
          Array 2
        </label>
        <label>
          <input type="checkbox" checked={showArray3} onChange={() => setShowArray3(!showArray3)} />
          Array 3
        </label>
        <label>
          <input type="checkbox" checked={showArray4} onChange={() => setShowArray4(!showArray4)} />
          Array 4
        </label>
        <button onClick={downLoadFormat}>Download PDF</button>
      </div>
      
      <Line ref={chartRef} data={data} />
    </div>
  );
};

export default GraphComponent;
