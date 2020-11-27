import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import ReactJoyride, { EVENTS } from "react-joyride";
import "./styles.css";
import {steps} from "../ServicesTutorial/Services"

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: false,
      steps: steps
    };
  }

  static propTypes = {
    joyride: PropTypes.shape({
      callback: PropTypes.func
    })
  };

  static defaultProps = {
    joyride: {}
  };

  handleClickAddSteps = ({ target }) => {
    const { steps } = this.state;

    target.style.display = "none";
    if (steps.length >= 5) return;

    const newSteps = [
      {
        content: (
          <div>
            <h3>Or event a SVG icon</h3>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 96 96"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M83.2922435,72.3864207 C69.5357835,69.2103145 56.7313553,66.4262214 62.9315626,54.7138297 C81.812194,19.0646376 67.93573,0 48.0030634,0 C27.6743835,0 14.1459311,19.796662 33.0745641,54.7138297 C39.4627778,66.4942237 26.1743334,69.2783168 12.7138832,72.3864207 C0.421472164,75.2265157 -0.0385432192,81.3307198 0.0014581185,92.0030767 L0.0174586536,96.0032105 L95.9806678,96.0032105 L95.9966684,92.1270809 C96.04467,81.3747213 95.628656,75.2385161 83.2922435,72.3864207 Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </div>
        ),
        placement: "left",
        target: ".demo__about h2"
      }
    ];

    this.setState({ steps: steps.concat(newSteps) });
  };

  handleClickStart = e => {
    e.preventDefault();

    this.setState({
      run: true
    });
  };
  
  /*
  componentDidMount() {
    this.setState({
      run: true
    });
  }*/

  handleJoyrideCallback = data => {
    const { joyride } = this.props
    const { type } = data;
    if (type === EVENTS.TOUR_END && this.state.run) {
      // Need to set our running state to false, so we can restart if we click start again.
      // se ejecuta cuando doy click en skip
      // console.log("aqui");
      // deja de correr el tutorial
      this.setState({ run: false });
    }

    if (typeof joyride.callback === "function") {
      // console.log(data);
     // cuando no hay mas tutoriales que mostrar
      joyride.callback(data);
    } else {
      // when i click next

      // puedo validar el paso aqui y hacer evento segun paso pertinente
      if(data.index == 1){
        console.log("step 2")
      }else{
        console.group(type);
        console.log(data); //eslint-disable-line no-console
        console.groupEnd();
      }
    }
  };

  render() {
    const { run, steps } = this.state;

    return (
      <div className="demo-wrapper">
        <ReactJoyride
          continuous
          scrollToFirstStep
          showProgress
          showSkipButton
          run={run}
          steps={steps}
          styles={{
            options: {
              zIndex: 10000
            }
          }}
          callback={this.handleJoyrideCallback}
        />

        <div className="demo__section demo__hero">
          <div>
            <h1>Onboarding Tutorial</h1>
            <button onClick={this.handleClickStart}>Bienvenido!</button>
          </div>
        </div>
        <div className="demo__section demo__projects">
          <h2>OUR PROJECTS</h2>
        </div>
        <div className="demo__section demo__how-it-works">
          <h2>HOW DOES IT WORK</h2>
        </div>
        <div className="demo__section demo__about">
          <h2>ALL ABOUT IT</h2>
        </div>
      </div>
    );
  }
}

export default Basic;
