import React, { Component, PropTypes } from 'react';
import Chart from 'chart.js'
import { browserHistory } from 'react-router';


class Entity extends Component {

  constructor(props){
    super(props);
    this.props.setEntitySelected(this.props.params.entityID);
  }

  componentDidMount() {
    if(!this.props.entities)
    {
      browserHistory.push("/");
    }

    let statsCtx = document.getElementById("stats_chart");
    let healthCtx = document.getElementById("health_chart");

    let statsData = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14,
          17
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
          "#00C151"
        ],
        label: 'Statistics' // for legend
      }],
      labels: ["Strenght", "Vitality", "Magic Power", "Spirit", "Speed", "Luck"]
    };

    let healthData = {
      labels: [
        "Health Points",
        ""
      ],
      datasets: [
          {
              data: [300, 100],
              backgroundColor: [
                  "#FF6384",
                  "transparent"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "transparent"
              ]
          }]
    };

    let options = {
      legend: {
        position: 'bottom',
        labels: {
          fontColor: 'rgb(255, 255, 255)',
        }
      }
    };

    this.statsChart = new Chart(statsCtx, {
      type: 'polarArea',
      data: statsData,
      options: options
    });

    this.healthChart = new Chart(healthCtx, {
      type: 'doughnut',
      data: healthData,
      options: {...options,
        elements:{
          arc:{
            borderWidth:0
          }
        }
      }
    });

  }

  static contextTypes = {
    router: React.PropTypes.object
  }

  render(){
    let imgUrl = "";
    let name = "?";
    let type = "?";

    if(this.props.entities){
      let generalInfo = this.props.entities[this.props.params.entityID];
      imgUrl = generalInfo.image;
      name = generalInfo.name;
      type = generalInfo.type;

      if(this.props.selectedEntityDetails)
      {
        //TODO!
        let test = this.props.selectedEntityDetails.Description;
      }
    }


    return (
      <div className="container">
        <div className="grid">
          <div className="profile grid__col--2-of-2 grid__col">
            <div className="avatar_holder"><img src={imgUrl} /></div>
            <p className="name">{name}</p>
            <p className="type">{type}</p>
          </div>
          <div className="grid__col--1-of-2 grid__col">
            <canvas id="health_chart"></canvas>
          </div>
          <div className="grid__col--1-of-2 grid__col">
            <canvas id="stats_chart"></canvas>
          </div>
        </div>
      </div>
    );
  }

}

Entity.propTypes = {
  setEntitySelected: PropTypes.func.isRequired
};

export default Entity;
