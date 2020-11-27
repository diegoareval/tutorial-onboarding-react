import React from "react";


const steps = [
    {
      content: (
        <React.Fragment>
          <h2>Empecemos el tour!</h2>
        </React.Fragment>
      ),
      placement: "center",
      locale: { skip: "S-K-I-P" },
      target: "body"
    },
    {
      content: "These are our super awesome projects!",
      placement: "bottom-start",
      styles: {
        options: {
          width: 900
        }
      },
      target: ".demo__projects h2",
      title: "Our projects"
    },
    {
      title: "Our Mission",
      content: (
        <div>
          You can render anything here.
          <br />
          <h3>Like a H3 title</h3>
        </div>
      ),
      target: ".demo__how-it-works h2",
      placement: "top"
    },
    {
      title: "Our Fail Test",
      content: "This step should fail",
      target: ".demo__rumba",
      placement: "top"
    }
  ]

  const scrollSteps = [
    {
      content: "Our awesome projects",
      placement: "bottom",
      target: ".app__scroller h1",
      textAlign: "center"
    },
    {
      content:
        "Can be advanced by clicking an element through the overlay hole.",
      disableCloseOnEsc: true,
      disableOverlayClicks: true,
      placement: "top",
      target: ".app__scroller h3:nth-of-type(2)",
      title: "Our Mission"
    },
    {
      content: "This step tests what happens when a target is missing",
      target: ".app__scroller h3:nth-of-type(3)",
      title: "Unmounted target",
      placement: "top"
    },
    {
      content: (
        <div>
          <h3>We are the people</h3>
          <svg
            width="96px"
            height="96px"
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
      target: ".app__scroller h3:nth-of-type(4)",
      placement: "top"
    }
  ]
  

  export {steps, scrollSteps} 