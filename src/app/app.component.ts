import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import {
  ChartOptions,
  ChartType,
  ChartDataset,
  registerables,
  Chart,
  ChartData,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

// Register chart.js plugins
Chart.register(...registerables);
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'charts-poc';
  legend: boolean = true;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @ViewChild('chart') chartRef: any;
  chartInstance: Chart | undefined;
  theme = '';
  datasets = [
    {
      data: [66.66, 40, 45],
      label: 'Application number',
      yAxisID: 'y',
    },
    {
      data: [66.66, 40, 45],
      label: 'Application number 1',
      yAxisID: 'y',
    },
    {
      data: [66.66, 40, 45],
      label: 'Application number 2',
      type: 'line',
      yAxisID: 'y',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];
  labels = ['Jun', 'July', 'August'];
  options1 = {
    scales: {
      xAxes: [
        {
          barPercentage: 0.4,
        },
      ],
      y: {
        // Left y-axis (default axis, no need for id)
        id: 'y',
        position: 'left',
        scaleLabel: {
          display: true,
          labelString: 'Application number',
        },
        ticks: {
          beginAtZero: true,
          max: 100, // Make sure both axes have the same max value
          stepSize: 20, // Set a consistent step size
        },
        grid: {
          drawOnChartArea: true, // Ensure grid lines appear on the chart area
          drawTicks: false, // Remove ticks from grid
          borderColor: 'rgba(0,0,0,0.1)', // Match grid line color
          borderWidth: 1, // Match grid line width
        },
      },
      // 'y-axis-r': {
      //   // Right y-axis with id 'y-axis-r'
      //   id: 'y-axis-r',
      //   position: 'right',
      //   scaleLabel: {
      //     display: true,
      //     labelString: 'Percent',
      //   },
      //   ticks: {
      //     beginAtZero: true,
      //     max: 100,
      //     callback: function (value: any) {
      //       return value + '%';
      //     },
      //   },
      //   grid: {
      //     drawOnChartArea: true, // Enable grid on chart area
      //     drawTicks: false,
      //   },
      // },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  public barChartLabels: string[] = [
    '35',
    '65',
    '35',
    '65',
    '35',
    '65',
    '35',
    '65',
    '35',
    '65',
    '35',
    '65',
    '35',
    '65',
    '35',
    '65',
  ];

  showTable = false;
  tableData: any[] = [];

  // The chart datasets: mixing line and bar chart data
  public barChartData: ChartDataset<'bar' | 'line'>[] = [
    // Line chart data for 'Tested Line'
    {
      label: 'Tested Line',
      borderColor: 'rgba(180, 0, 0, 1)', // Color for the line
      type: 'line',
      fill: false,
      tension: 0.3,
      data: [
        { x: 0, y: 2000 }, // 2016
        { x: 1, y: 3000 },
        { x: 2, y: 3000 },
        { x: 3, y: 3000 },
        { x: 4, y: 2000 }, // 2016
        { x: 5, y: 3000 },
        { x: 6, y: 3000 },
        { x: 7, y: 3000 },
      ],
      yAxisID: 'y',
      xAxisID: 'x2',
    },

    // Line chart data for another series (could represent another set of data)
    {
      label: 'Tested Line 2',
      borderColor: 'rgba(33, 81, 255, 1)', // Color for the line
      type: 'line',
      fill: false,
      tension: 0.3,
      data: [
        { x: 0, y: 3000 }, // 2016
        { x: 1, y: 5000 }, // 2017
        { x: 2, y: 5000 }, // 2017
        { x: 3, y: 7000 }, // 2017
        { x: 4, y: 3000 }, // 2016
        { x: 5, y: 5000 }, // 2017
        { x: 6, y: 5000 }, // 2017
        { x: 7, y: 7000 }, // 2017
      ],
      yAxisID: 'y',
      xAxisID: 'x2',
    },

    {
      label: 'Tested Line 3',
      borderColor: 'rgb(33, 255, 244)', // Color for the line
      type: 'line',
      fill: false,
      tension: 0.3,
      data: [
        { x: 0, y: 3500 }, // 2016
        { x: 1, y: 5600 }, // 2017
        { x: 2, y: 4900 }, // 2017
        { x: 3, y: 9000 }, // 2017
        { x: 4, y: 3500 }, // 2016
        { x: 5, y: 5600 }, // 2017
        { x: 6, y: 4900 }, // 2017
        { x: 7, y: 9000 }, // 2017
      ],
      yAxisID: 'y',
      xAxisID: 'x2',
    },
    // Bar chart data for Group 1
    {
      data: [
        1000, 5000, 9000, 3000, 4000, 4500, 3000, 5000, 1000, 5000, 9000, 3000,
        4000, 4500, 3000, 5000,
      ],
      label: 'Group 1',
      backgroundColor: 'rgba(180, 0, 0, 1)', // Color for Group 1
      type: 'bar', // Using 'bar' chart type here
    },

    // Bar chart data for Group 2
    {
      data: [
        1500, 6000, 4500, 6000, 5500, 4000, 6000, 7000, 1500, 6000, 4500, 6000,
        5500, 4000, 6000, 7000,
      ],
      label: 'Group 2',
      backgroundColor: 'rgba(33, 81, 255, 1)', // Color for Group 2
      type: 'bar', // Bar chart
    },

    // Bar chart data for Group 3
    {
      data: [
        2000, 7000, 4000, 7000, 5500, 5000, 7000, 7500, 2000, 7000, 4000, 7000,
        5500, 5000, 7000, 7500,
      ],
      label: 'Group 3',
      backgroundColor: 'rgb(33, 255, 244)', // Color for Group 3
      type: 'bar', // Bar chart
    },
  ];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          autoSkip: false, // Show all labels on the x-axis
        },
        grid: {
          display: true, // Show grid
          color: (context: any) => {
            // Custom color logic (for horizontal lines)
            return context.index % 2 === 0 ? '#000' : '#ccc';
          },
          borderColor: '#000', // Border color for axis
          borderWidth: 1,
          lineWidth: 2, // The width of the line
          drawOnChartArea: false, // Don't draw grid on the chart area itself
        },
      },
      x2: {
        beginAtZero: true,
        display: false,
        type: 'linear', // Use linear scale for year axis
        grid: {
          display: false, // Disable grid for this axis
        },
        ticks: {
          autoSkip: false,
          callback: function (value: any) {
            // Map year values
            const years = [
              '2016',
              '2017',
              '2018',
              '2019',
              '2020',
              '2021',
              '2022',
              '2023',
            ];

            return years[value];
          },
        },
      },
    },

    layout: {
      padding: {
        bottom: 100, // Space for the "Year" labels
      },
    },

    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          title: (tooltipItem) => {
            return 'Year: ' + tooltipItem[0].label;
          },
          label: (tooltipItem) => {
            return 'Value: ' + tooltipItem.raw;
          },
        },
      },
      legend: {
        position: 'top',
      },
    },
  };

  barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  chartData: any = {
    datasets: [{ data: [100, 200, 300, 400], label: 'Category A' }],
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  };
  drillDownLevel = 0;
  currentDrillData: any = [];
  chartOptions: any = {
    responsive: true,
    onClick: (event: MouseEvent, activeElements: any[]) => {
      this.onChartClick(event, activeElements);
    },
  };
  // drillDownData: { [key: string]: ChartData } = {
  //   'Category 1': {
  //     labels: ['Sub-category 1', 'Sub-category 2'],
  //     datasets: [
  //       {
  //         data: [5, 5],
  //         label: 'Sub-categories of Category 1',
  //         backgroundColor: ['purple', 'orange'],
  //       },
  //     ],
  //   },
  //   'Category 2': {
  //     labels: ['Sub-category 1', 'Sub-category 2'],
  //     datasets: [
  //       {
  //         data: [10, 10],
  //         label: 'Sub-categories of Category 2',
  //         backgroundColor: ['yellow', 'cyan'],
  //       },
  //     ],
  //   },
  //   'Category 3': {
  //     labels: ['Sub-category 1', 'Sub-category 2'],
  //     datasets: [
  //       {
  //         data: [15, 15],
  //         label: 'Sub-categories of Category 3',
  //         backgroundColor: ['pink', 'grey'],
  //       },
  //     ],
  //   },
  // };

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.chartInstance = this.chartRef.chart;
  }

  // onChartClick(event: any): void {
  //   // Ensure chart instance is available
  //   if (this.chart && this.chart.chart) {
  //     // Get the clicked elements from the chart using the event
  //     const activePoints = this.chart.chart.getElementsAtEventForMode(
  //       event,
  //       'nearest', // 'nearest' mode ensures we get the nearest element to the clicked point
  //       { intersect: true }, // Only consider points that intersect with the click event
  //       false // Set to false for handling events outside the chart (optional)
  //     );

  //     console.log('Clicked Elements:', activePoints);

  //     // Check if any element was clicked and if labels exist
  //     if (activePoints.length > 0) {
  //       const clickedIndex = activePoints[0].index; // Get the index of the clicked element

  //       // Check if clickedIndex is valid
  //       if (
  //         this.chartData &&
  //         this.chartData.labels &&
  //         this.chartData.labels.length > clickedIndex
  //       ) {
  //         const clickedLabel = this.chartData.labels[clickedIndex] as string; // Explicitly type clickedLabel as string
  //         console.log('Clicked Label:', clickedLabel);

  //         // Handle drill down logic
  //         this.handleDrillDown(clickedLabel);
  //       } else {
  //         console.error('Invalid index or labels not available.');
  //       }
  //     } else {
  //       console.error('No valid chart element clicked.');
  //     }
  //   } else {
  //     console.error('Chart instance is not available.');
  //   }
  // }

  yearPlugin = {
    id: 'yearLabelPlugin',
    beforeDraw(chart: { ctx: any; chartArea: any; scales: any }) {
      const { ctx, chartArea, scales } = chart;
      const xScale = scales.x;

      const yearLabels = [
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
      ]; // Year labels
      const groupSize = 2; // Number of subcategories per year
      const padding = 50; // Padding between chart and year labels

      ctx.save();
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'black';

      // Loop through year labels and draw them
      yearLabels.forEach((year, index) => {
        const startIndex = index * groupSize; // Start of the group
        const endIndex = startIndex + groupSize - 1; // End of the group

        // Calculate the position for the year label
        const startX = xScale?.getPixelForTick(startIndex);
        const endX = xScale?.getPixelForTick(endIndex);
        const centerX = (startX + endX) / 2;

        ctx.fillText(year, centerX, chartArea.bottom + padding); // Adjust y-position with padding
      });

      const yearDividers = [0.6, 1.4, 2.2, 3, 3.8, 4.6, 5.4, 6.2]; // Define where to draw the dividers (after each group of 3)
      ctx.lineWidth = 0.5; // Set the line width for the divider
      ctx.strokeStyle = '#000'; // Set the color of the divider line

      // Loop through year dividers and draw them
      yearDividers.forEach((dividerIndex) => {
        // Get the pixel position on the x-axis for the divider
        const xPos = xScale.getPixelForValue(dividerIndex * 2.5); // Adjust the value to match the required position

        ctx.beginPath();
        ctx.moveTo(xPos, chartArea.top); // Start position of the divider line
        ctx.lineTo(xPos, chartArea.bottom + padding); // End position of the divider line, adjust padding
        ctx.stroke();
      });

      ctx.restore();
    },
  };

  onChartClick(event: any, activeElements?: any) {
    if (activeElements?.length > 0) {
      console.log('element', activeElements);
      const clickedElementIndex = activeElements[0].index;
      this.handleDrilldown(clickedElementIndex);
      this.chartInstance?.update();
    }
  }

  handleDrilldown(index: number) {
    console.log('index details', index, this.drillDownLevel);
    if (this.drillDownLevel === 0) {
      this.drillDownLevel = 1;
      this.chartData = this.getSecondLevelData(index);
    } else if (this.drillDownLevel === 1) {
      this.drillDownLevel = 2;
      this.chartData = this.getThirdLevelData(index);
    } else if (this.drillDownLevel === 2) {
      this.showTable = true;
      this.tableData = this.getTableData(index);
    }
    this.chartInstance?.update();
    this.cdRef.detectChanges();
  }

  // Mock data for second-level drilldown
  getSecondLevelData(index: number) {
    console.log('sub category', index);
    // Replace this with logic to get second-level data based on index
    return {
      datasets: [{ data: [100, 200, 300], label: `Subcategory ${index + 1}` }],
      labels: ['Sub Q1', 'Sub Q2', 'Sub Q3'],
    };
  }

  // Mock data for third-level drilldown
  getThirdLevelData(index: number) {
    // Replace this with logic to get third-level data based on index
    return {
      datasets: [{ data: [50, 100, 150], label: `Detail ${index + 1}` }],
      labels: ['Detail 1', 'Detail 2', 'Detail 3'],
    };
  }

  // Mock data for table after third level
  getTableData(index: number) {
    return [
      {
        category: `Item ${index + 1}`,
        value: Math.random() * 1000,
        details: 'More details here',
      },
      {
        category: `Item ${index + 2}`,
        value: Math.random() * 1000,
        details: 'More details here',
      },
    ];
  }
}
