import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron1";
import Chart from 'chart.js';

export class Line extends React.Component {
    render() {
      return (
        <ChartComponent
          {...this.props}
          ref={ref => this.chartInstance = ref && ref.chartInstance}
          type='line'
        />
      );
    }
  }

export default Line
