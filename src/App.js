import React, { Component } from 'react';
import teamphoto from './photos/team.JPG';
import robotphoto from './photos/robot.JPG';
import hangingbot from './photos/hangingbot.JPG';
import firstlogo from './photos/FIRST_logo.png';
import './App.css';

class Parallax extends Component {

  constructor(props) {
    super(props);
    this.style = {
      backgroundImage: 'url('+props.src+')'
     };
  }

  render() {
    return (
      <div className="parallax" style={this.style}>
        {this.props.children}
      </div>
    )
  }

}

class Info extends Component {
  render() {
    return (
      <div className="infodiv">
        {this.props.children}
      </div>
    );
  }
}

class View extends Component {
  render() {
    return (
      <div className="window">
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" >
        <View>
          <Parallax src={robotphoto}/>
          <Info>
            <h1>Momentum Robotics</h1>
            <h2>FRC Team 4999</h2>
          </Info>
        </View>
        <View>
          <Parallax src={teamphoto}/>
          <Info>
            <h3>Our Team</h3>
            <p>
              Momentum Robotics is a community FIRST Robotics Competition team located at Sato Academy. Every year we build a robot to compete in regional competitions against other teams.
              We gather the resources and knowledge necessary to construct our robot by partnering with professionals from many industries and corporations.
              Over the course of every season, our students learn invaluable skills in engineering and business.
            </p>
          </Info>
        </View>
        <View>
          <Parallax src={hangingbot}/>
          <Info>
            <img height="150" src={firstlogo} alt="FIRST Robotics Competition"/>
            <h3 style={{margin: "0.5em 0em"}}>FIRST Robotics Competition</h3>
            <p>
              The FIRST Robotics Competition is a high school level competition held by the organization FIRST <i>(For Recognition and Inspiration of Science and Technology).</i>&nbsp;
              Every year in January, FIRST releases a new game challange for the teams. Starting that day, teams have six and a half weeks to design, build, and test a robot to compete in the new game.
              The robots vary in size each year, with some weighing up to 120 pounds, and they compete on a field approximately the size of a tennis court.
              Competitions are held all over the world, and they are free to the public to attend.
            </p>
          </Info>
        </View>
      </div>
    );
  }
}

export default App;
