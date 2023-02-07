import { ApexOptions } from "apexcharts";
import { theme } from "@chakra-ui/react";
import Chart from "react-apexcharts";

function ChartHome() {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2021-08-11T00:00:00.000Z",
        "2021-08-12T00:00:00.000Z",
        "2021-08-13T00:00:00.000Z",
        "2021-08-14T00:00:00.000Z",
        "2021-08-15T00:00:00.000Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };
  const series = [
    { name: "Series 1", data: [31, 120, 12, 45, 10, 28] }, //tipo de dado
  ];
  return <Chart type="area" height={200} options={options} series={series} />;
}

export default ChartHome;
