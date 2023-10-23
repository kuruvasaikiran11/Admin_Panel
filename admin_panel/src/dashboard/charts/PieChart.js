import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Define your chart data and options here
    const data = {
      // Your data object
    };

    const options = {
      // Your options object
    };

    new Chart(ctx, {
      type: 'pie',
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

export default PieChart;
