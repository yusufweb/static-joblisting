import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./component/Header";
import JobsCard from "./component/JobCards";
import ListKeyword from "./component/ListKeyword";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [keywords, setKeyword] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  // fetch data from data.json
  useEffect(() => {
    fetch("data/data.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setJobs(data);
      });
  }, []);

  // filter jobs from either the jobs or searchResult array then push the keyword to keyword array
  const filterJobs = value => {
    const chooseArrayToFilter = keywords.length > 0 ? searchResult : jobs;
    const filterJobList = chooseArrayToFilter.filter(
      jobItem =>
        jobItem.role === value ||
        jobItem.level === value ||
        jobItem.languages.includes(value) ||
        jobItem.tools.includes(value)
    );
    setSearchResult(filterJobList);

    const checkKeyword = keywords.includes(value)
      ? keywords
      : [...keywords, value];
    setKeyword(checkKeyword);
  };

  const removeKeyword = value => {
    const newSearch = keywords.filter(keywords => keywords !== value);
    setKeyword(newSearch);
  };

  // when user clicked on filter button display the filter keyword component
  const displayKeyword = keywords.map(keyword => {
    return (
      <ListKeyword
        keyword={keyword}
        key={keyword}
        handleRemoveKeyword={removeKeyword}
      />
    );
  });

  // reset all array when clear btn is clicked
  const handelReset = () => {
    setKeyword([]);
    setSearchResult([]);
  };

  // if a filter button is not clicked i.e keywords array is empty display jobs from useEffect jobs array
  // else user clicked a filter button i.e keywords array is not empty display jobs from searchResult array
  const jobListToDisplay = keywords.length < 1 ? jobs : searchResult;
  const AllJobsList = jobListToDisplay.map(job => {
    return <JobsCard job={job} key={job.id} filterJob={filterJobs} />;
  });

  return (
    <>
      <Header />
      <div className="container">
        {keywords.length > 0 ? (
          <div className="filter__keyword">
            <div className="filter__keyword--item">{displayKeyword}</div>
            <div className="clear-btn">
              <button className="clear" onClick={handelReset}>
                clear
              </button>
            </div>
          </div>
        ) : null}
        {AllJobsList}
      </div>
    </>
  );
}
