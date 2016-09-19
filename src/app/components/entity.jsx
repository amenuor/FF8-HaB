import React, { Component, PropTypes } from 'react';
import Chart from 'chart.js'
import { browserHistory } from 'react-router';
import InputRange from 'react-input-range';
import SwipeableViews from 'react-swipeable-views';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Entity extends Component {

  constructor(props){
    super(props);
    this.props.setSelectedEntity(this.props.params.entityID);
  }

  componentDidUpdate(){
    if(this.props.selectedEntityDetails){
      let details = this.props.selectedEntityDetails;
      let index = parseInt(this.props.level / 10);
      let statsCtx = document.getElementById("stats_chart");
      let healthCtx = document.getElementById("health_chart");

      this.statsData = {
        datasets: [{
          data: [
            details.Statistics.STR[index],
            details.Statistics.VIT[index],
            details.Statistics.MAG[index],
            details.Statistics.SPR[index],
            details.Statistics.SPD[index],
            details.Statistics.LUCK[index]
          ],
          backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB", "#00C151"
          ],
          label: 'Statistics' // for legend
        }],
        labels: ["Strenght", "Vitality", "Magic Power", "Spirit", "Speed", "Luck"]
      };

      this.healthData = {
        labels: [
          "Health Points",
          ""
        ],
        datasets: [
            {
                data: [details.Statistics.HP[index], details.Statistics.HP[10] - details.Statistics.HP[index]],
                backgroundColor: ["#FF6384","transparent"],
                hoverBackgroundColor: ["#FF6384","transparent"]
            }]
      };

      let options = {
        legend: {
          position: 'bottom',
          labels: {
            fontColor: 'rgb(0, 0, 0)',
          }
        }
      };

      if(!this.statsChart && statsCtx)
      {
        this.statsChart = new Chart(statsCtx, {
          type: 'polarArea',
          data: this.statsData,
          options: options
        });
      }else{
        this.statsChart.config.data = this.statsData;
      }

      if(!this.healthChart && statsCtx)
      {
        this.healthChart = new Chart(healthCtx, {
          type: 'doughnut',
          data: this.healthData,
          options: {...options,
            elements:{
              arc:{
                borderWidth:0
              }
            }
          }
        });
      }else{
        this.healthChart.config.data = this.healthData;
      }
    }
  }

  componentDidMount() {
    if(!this.props.entities)
    {
      browserHistory.push("/");
    }
  }

  handleValueChangeComplete(component, value){
    this.healthChart.update();
    this.statsChart.update();
  }

  handleValueChange(component, value){
    this.props.setSelectedLevel(value);
  }

  render(){
    let description = "?";

    if(this.props.selectedEntityDetails)
    {
      description = this.props.selectedEntityDetails.Description; //TODO: use it!
    }

    const styles = {
      slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
      },
      slide1: {
        background: '#FFF',
      },
      slide2: {
        background: '#FFF',
      }
    };

    if(!this.props.entities)
      return (<div>LOADING</div>);

    let currentEntity = this.props.entities[this.props.params.entityID];
    return (
      <div>
        <Card>
            <CardHeader
              title={currentEntity.name}
              subtitle={currentEntity.type}
              avatar={currentEntity.image}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              {description}
            </CardText>
          </Card>

        <div>
          Choose the level
        </div>
        <form className="form">
          <InputRange
                  maxValue={100}
                  minValue={0}
                  step = {10}
                  value={this.props.level}
                  onChange={this.handleValueChange.bind(this)}
                  onChangeComplete={this.handleValueChangeComplete.bind(this)}
                />
        </form>

        <SwipeableViews>
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <canvas id="health_chart"></canvas>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <canvas id="stats_chart"></canvas>
          </div>
        </SwipeableViews>
      </div>

    );
  }

}

Entity.propTypes = {
  setSelectedEntity: PropTypes.func.isRequired,
  setSelectedLevel: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired
};

export default Entity;
