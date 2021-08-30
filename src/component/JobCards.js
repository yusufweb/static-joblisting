import React from "react";
import Button from "./Button";
import "./JobCards.css";

function JobCards({ job, filterJob }) {
  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = job;

  const featuredJob = featured ? (
    <span className="featuredJob">featured</span>
  ) : (
    <span className="nullJob"></span>
  );
  
  const newJob = job.new ? (
    <span className="newJob">new!</span>
  ) : (
    <span className="nullJob"></span>
  );

  const languagesBtn = languages.map((language, index) => {
    return <Button value={language} key={index} handleClick={filterJob} />;
  });

  const toolsBtn = tools.map((tool, index) => {
    return <Button value={tool} key={index} handleClick={filterJob} />;
  });

  return (
    <div className="job">
      <div className="job__container">
        <div className="job__container--logo">
          <img src={logo} className="job__container--img" />
        </div>
        <div className="job__container--desc">
          <span className="company__name">{company}</span> {newJob}{" "}
          {featuredJob} <h3>{position}</h3>
          <span className="postedAt">{postedAt}</span>{" "}
          <span className="bullet">&bull;</span>
          <span className="contract">{contract}</span>{" "}
          <span className="bullet">&bull;</span>
          <span className="location">{location}</span>
        </div>
        <hr />
        <div className="job__conatainer--tablets">
          <Button value={role} handleClick={filterJob} />
          <Button value={level} handleClick={filterJob} />
          {languagesBtn}
          {toolsBtn}
        </div>
      </div>
    </div>
  );
}

export default JobCards;
