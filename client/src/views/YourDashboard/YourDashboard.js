import React, { Component } from 'react';
import classes from "./YourDashboard.module.css";
import YourLineGraph from "../../components/YourDashboard/YourLineGraph";
import chartIcon from "../../assets/chart-icon.svg";
import { managerData, yearLabels } from "../../mockData";

export default class Dashboard extends Component {
    state = {
        data: managerData,
        labels: yearLabels
    }

    render() {
        const { data, labels } = this.state;
        return (
            <div className={classes.container}>
                <header>
                    <img src={chartIcon} alt="bar chart icon" />
                    <h1>My Weight Chart</h1>
                </header>

                <YourLineGraph
                    data={data}
                    labels={labels} />

            </div>
        )
    }
}