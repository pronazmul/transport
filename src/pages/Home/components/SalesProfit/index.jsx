import Chart from 'react-apexcharts'

export default function SalesProfit() {
  const data = {
    series: [
      {
        name: 'Users',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 45, 65, 35],
      },
      {
        name: 'Feeds',
        data: [40, 50, 100, 40, 30, 70, 55, 65, 40, 55, 55, 45],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 255,
        toolbar: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        enabled: true,
      },

      colors: ['#5f5af6', '#0ea5e9'],
    },
  }

  return (
    <>
      <div className='w-full'>
        <div id='monthly-overview'>
          <Chart
            options={data.options}
            series={data.series}
            type='bar'
            height='300'
          />
        </div>
      </div>
    </>
  )
}
