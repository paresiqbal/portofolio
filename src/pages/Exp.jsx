import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/Exp.css";

function Exp() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon="fa-solid fa-school" />}
        >
          <h3 className="vertical-timeline-element-title">
            SMK Negeri 2 Rejang Lebong. Rejang Lebong, Bengkulu, Indonesia
          </h3>
          <p>Teknik Komputer Jaringan</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FontAwesomeIcon icon="fa-solid fa-school" />}
        >
          <h3 className="vertical-timeline-element-title">
            Universiry of Amikom Yogyakarta. Yogyakarta, Sleman
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FontAwesomeIcon icon="fa-solid fa-briefcase" />}
        >
          <h3 className="vertical-timeline-element-title">
            Back End Engineer - Google
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Exp;
