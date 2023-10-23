import React, { useEffect, useRef } from "react";
import "./css/bootstrap.min.css";
import "./css/fontawesome.min.css";
import "./css/templatemo-style.css";
import OrderList from './OrderList';

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  BarElement,
  BarController,
  Title,
  Tooltip,
  ArcElement,
} from "chart.js";
import "chart.js/auto";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  BarElement,
  BarController,
  Title,
  Tooltip,
  ArcElement
);

const widthThreshold = 480;

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctxLine = chartRef.current.getContext("2d");

    const optionsLine = {
      scales: {
        y: {
          title: {
            display: true,
            text: "Hits",
          },
        },
      },
      maintainAspectRatio: window.innerWidth < widthThreshold ? false : true,
    };
    const configLine = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Latest Hits",
            data: [88, 68, 79, 57, 50, 55, 70],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0,
          },
          // ... other datasets
        ],
      },
      options: optionsLine,
    };
    // Destroy previous chart if it exists
    const existingChart = chartRef.current.chart;
    if (existingChart) {
      existingChart.destroy();
    }

    chartRef.current.chart = new Chart(ctxLine, configLine);
  }, []);

  return <canvas id="lineChart" ref={chartRef} className="chart" />;
};

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctxBar = chartRef.current.getContext("2d");
    const optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 0.2,
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Hits",
            },
          },
        ],
      },
      maintainAspectRatio: window.innerWidth < widthThreshold ? false : true,
    };

    const configBar = {
      type: "bar",
      data: {
        labels: ["Red", "Aqua", "Green", "Yellow", "Purple", "Orange", "Blue"],
        datasets: [
          {
            label: "# of Hits",
            data: [33, 40, 28, 49, 58, 38, 44],
            backgroundColor: [
              "#F7604D",
              "#4ED6B8",
              "#A8D582",
              "#D7D768",
              "#9D66CC",
              "#DB9C3F",
              "#3889FC",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: optionsBar,
    };
    // Destroy previous chart if it exists
    const existingChart = chartRef.current.chart;
    if (existingChart) {
      existingChart.destroy();
    }
    chartRef.current.chart = new Chart(ctxBar, configBar);
  }, []);

  return <canvas id="barChart" ref={chartRef} className="chart" />;
};

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
      const chartHeight = 300;
      const pieChartContainer = document.getElementById("pieChartContainer");
      pieChartContainer.style.height = `${chartHeight}px`;

      const ctxPie = chartRef.current.getContext("2d");
      const optionsPie = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
        },
      };

      const configPie = {
        type: "pie",
        data: {
          datasets: [
            {
              data: [18.24, 6.5, 9.15],
              backgroundColor: ["#F7604D", "#4ED6B8", "#A8D582"],
              label: "Storage",
            },
          ],
          labels: [
            "Used Storage (18.240GB)",
            "System Storage (6.500GB)",
            "Available Storage (9.150GB)",
          ],
        },
        options: optionsPie,
      };

      // Destroy previous chart if it exists
      const existingChart = chartRef.current.chart;
      if (existingChart) {
        existingChart.destroy();
      }

      chartRef.current.chart = new Chart(ctxPie, configPie);
  }, []);

  return <canvas id="pieChart" ref={chartRef} className="chart" />;
};

function ProductAdminDashboard() {
  return (
    <div className="" id="home">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-white mt-5 mb-5">
              Welcome back, <b>Admin</b>
            </p>
          </div>
        </div>
        <div className="row tm-content-row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
              <h2 className="tm-block-title">Latest Hits</h2>
              <LineChart />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
              <h2 className="tm-block-title">Performance</h2>
              <BarChart />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller">
              <h2 className="tm-block-title">Storage Information</h2>
              <div id="pieChartContainer">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            {/* Notification List */}
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
                        <h2 className="tm-block-title">Notification List</h2>
                        <div className="tm-notification-items">
                            <div className="media tm-notification-item">
                                <div className="tm-gray-circle"><img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-01.jpg" alt="Avatar Image" className="rounded-circle" /></div>
                                <div className="media-body">
                                    <p className="mb-2"><b>Jessica</b> and <b>6 others</b> sent you new <a href="#"
                                            className="tm-notification-link">product updates</a>. Check new orders.</p>
                                    <span className="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
                            <div className="media tm-notification-item">
                                <div className="tm-gray-circle"><img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-02.jpg" alt="Avatar Image" className="rounded-circle" /></div>
                                <div className="media-body">
                                    <p className="mb-2"><b>Oliver Too</b> and <b>6 others</b> sent you existing <a href="#"
                                            className="tm-notification-link">product updates</a>. Read more reports.</p>
                                    <span className="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
                            <div className="media tm-notification-item">
                                <div className="tm-gray-circle"><img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-03.jpg" alt="Avatar Image" className="rounded-circle" /></div>
                                <div className="media-body">
                                    <p className="mb-2"><b>Victoria</b> and <b>6 others</b> sent you <a href="#"
                                            className="tm-notification-link">order updates</a>. Read order information.</p>
                                    <span className="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
                            <div className="media tm-notification-item">
                                <div className="tm-gray-circle"><img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-01.jpg" alt="Avatar Image" className="rounded-circle" /></div>
                                <div className="media-body">
                                    <p className="mb-2"><b>Laura Cute</b> and <b>6 others</b> sent you <a href="#"
                                            className="tm-notification-link">product records</a>.</p>
                                    <span className="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
                            <div className="media tm-notification-item">
                                <div className="tm-gray-circle"><img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-02.jpg" alt="Avatar Image" className="rounded-circle" /></div>
                                <div className="media-body">
                                    <p className="mb-2"><b>Samantha</b> and <b>6 others</b> sent you <a href="#"
                                            className="tm-notification-link">order stuffs</a>.</p>
                                    <span className="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
                            <div className="media tm-notification-item">
                                <div className="tm-gray-circle"><img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-03.jpg" alt="Avatar Image" className="rounded-circle" /></div>
                                <div className="media-body">
                                    <p className="mb-2"><b>Sophie</b> and <b>6 others</b> sent you <a href="#"
                                            className="tm-notification-link">product updates</a>.</p>
                                    <span className="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
                            <div className="media tm-notification-item">
                                <div className="tm-gray-circle"><img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-01.jpg" alt="Avatar Image" className="rounded-circle" /></div>
                                <div className="media-body">
                                    <p className="mb-2"><b>Lily A</b> and <b>6 others</b> sent you <a href="#"
                                            className="tm-notification-link">product updates</a>.</p>
                                    <span className="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
                            <div className="media tm-notification-item">
                                <div className="tm-gray-circle"><img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-02.jpg" alt="Avatar Image" className="rounded-circle" /></div>
                                <div className="media-body">
                                    <p className="mb-2"><b>Amara</b> and <b>6 others</b> sent you <a href="#"
                                            className="tm-notification-link">product updates</a>.</p>
                                    <span className="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
                            <div className="media tm-notification-item">
                                <div className="tm-gray-circle"><img src="https://templatemo.com/templates/templatemo_524_product_admin/img/notification-03.jpg" alt="Avatar Image" className="rounded-circle" /></div>
                                <div className="media-body">
                                    <p className="mb-2"><b>Cinthela</b> and <b>6 others</b> sent you <a href="#"
                                            className="tm-notification-link">product updates</a>.</p>
                                    <span className="tm-small tm-text-color-secondary">6h ago.</span>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
          <OrderList />
        </div>
      </div>
      <footer className="tm-footer row tm-mt-small">
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-4 small">
            Copyright &copy; <b>2018</b> All rights reserved. Design:{" "}
            <a
              rel="nofollow noopener"
              href="https://templatemo.com"
              className="tm-footer-link"
            >
              Template Mo
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ProductAdminDashboard;
