import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale } from 'chart.js';

// Register the category scale
Chart.register(CategoryScale, LinearScale);

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Define your chart data and options here
    const data = {
      // Your data object
    };

    const options = {
      scales: {
        x: {
          type: 'category', // Use the registered "category" scale
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;
