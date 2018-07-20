var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var pieChart = null;
var chartData = {
  main: {
    title: '总成交量',
    data: [15, 20, 45, 37],
    categories: ['2012', '2013', '2014', '2015']
  },
  sub: [{
    title: '2012年度成交量',
    data: [70, 40, 65, 100, 34, 18],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
    title: '2013年度成交量',
    data: [55, 30, 45, 36, 56, 13],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
    title: '2014年度成交量',
    data: [76, 45, 32, 74, 54, 35],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
    title: '2015年度成交量',
    data: [76, 54, 23, 12, 45, 65],
    categories: ['1', '2', '3', '4', '5', '6']
  }]
};
Page({
  data: {
    currentValue: 'today',
    ranges: [{
        title: '昨天',
        value: 'yesterday'
      },
      {
        title: '今天',
        value: 'today'
      },
      {
        title: '最近7天',
        value: 'seven'
      }
    ],
    startDate: '2016-09-01',
    endDate: '2016-09-02',
    chartTitle: '总成交量',
    isMainChartDisplay: true
  },
  backToMainChart: function() {
    this.setData({
      chartTitle: chartData.main.title,
      isMainChartDisplay: true
    });
    columnChart.updateData({
      categories: chartData.main.categories,
      series: [{
        name: '成交量',
        data: chartData.main.data,
        format: function(val, name) {
          return val.toFixed(2) + '万';
        }
      }]
    });
  },
  startDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      startDate: e.detail.value
    })
  },
  endDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endDate: e.detail.value
    })
  },
  handleChange: function({
    detail
  }) {
    console.log(detail)
    this.setData({
      currentValue: detail.value
    })
  },
  touchPieHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  },
  touchHandler: function(e) {
    var index = columnChart.getCurrentDataIndex(e);
    console.log('index:', index)
    if (index > -1 && index < chartData.sub.length && this.data.isMainChartDisplay) {
      this.setData({
        chartTitle: chartData.sub[index].title,
        isMainChartDisplay: false
      });
      columnChart.updateData({
        categories: chartData.sub[index].categories,
        series: [{
          name: '成交量',
          data: chartData.sub[index].data,
          format: function(val, name) {
            return val.toFixed(2) + '万';
          }
        }]
      });

    }
  },
  onLoad: function(e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '成交量1',
        data: 15,
      }, {
        name: '成交量2',
        data: 35,
      }, {
        name: '成交量3',
        data: 78,
      }, {
        name: '成交量4',
        data: 63,
      }, {
        name: '成交量2',
        data: 35,
      }, {
        name: '成交量3',
        data: 78,
      }, {
        name: '成交量4',
        data: 63,
      }, {
        name: '成交量2',
        data: 35,
      }, {
        name: '成交量3',
        data: 78,
      }, {
        name: '成交量3',
        data: 78,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
  },
  onReady: function(e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        name: '成交量',
        data: chartData.main.data,
        format: function(val, name) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        format: function(val) {
          return val + '万';
        },
        title: 'Laravel',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 15
        }
      },
      width: windowWidth,
      height: 200,
    });
  }
});