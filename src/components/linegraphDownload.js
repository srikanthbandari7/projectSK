
// import React, { useState, useRef } from 'react';
// import { Line } from 'react-chartjs-2';
// import { jsPDF } from 'jspdf';
// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables)

// const GraphComponent = () => {
//   const [data, setData] = useState({
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Array 1',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         borderColor: 'red',
//         fill: false,
//       },
//       {
//         label: 'Array 2',
//         data: [28, 48, 40, 19, 86, 27, 90],
//         borderColor: 'blue',
//         fill: false,
//       },
//       {
//         label: 'Array 3',
//         data: [18, 48, 77, 9, 100, 27, 40],
//         borderColor: 'green',
//         fill: false,
//       },
//       {
//         label: 'Array 4',
//         data: [88, 21, 30, 90, 65, 23, 45],
//         borderColor: 'orange',
//         fill: false,
//       },
//     ],
//   });

//   const [selectedArrays, setSelectedArrays] = useState([true, true, true, true]);
//   const [pdfData, setPdfData] = useState([]);

//   const chartRef = useRef();

//   const handleChange = (index) => {
//     const updatedSelection = [...selectedArrays];
//     updatedSelection[index] = !updatedSelection[index];
//     setSelectedArrays(updatedSelection);
//   };

//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();

//     // Add graph as image
//     const canvas = chartRef.current.chartInstance.canvas;
//     const imgData = canvas.toDataURL('image/png');
//     doc.addImage(imgData, 'PNG', 10, 10, 180, 100);

//     // Add data table
//     const tableRows = [['Label', 'Data']];
//     pdfData.forEach((row) => {
//       tableRows.push([row.label, row.data.join(', ')]);
//     });
//     doc.autoTable({
//       head: tableRows.slice(0, 1),
//       body: tableRows.slice(1),
//       startY: 120,
//     });

//     // Download PDF
//     doc.save('graph_data.pdf');
//   };

//   // Update PDF data whenever selectedArrays change
//   useState(() => {
//     const updatedPdfData = [];
//     data.datasets.forEach((dataset, index) => {
//       if (selectedArrays[index]) {
//         updatedPdfData.push({
//           label: dataset.label,
//           data: dataset.data,
//         });
//       }
//     });
//     setPdfData(updatedPdfData);
//   }, [selectedArrays]);

//   return (
//     <div>
//       <div>
//         {data.datasets.map((dataset, index) => (
//           <div key={index}>
//             <input
//               type="checkbox"
//               checked={selectedArrays[index]}
//               onChange={() => handleChange(index)}
//             />
//             <label>{dataset.label}</label>
//           </div>
//         ))}&nbsp;
//         &nbsp;
//         <button onClick={handleDownloadPDF}>Download PDF</button>
//       </div>
//       <div>
//         <Line data={data} ref={chartRef} />
//       </div>
      
//     </div>
//   );
// };

// export default GraphComponent;
