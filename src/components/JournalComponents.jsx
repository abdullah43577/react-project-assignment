import React from 'react';

export default function JournalComponents(props) {
  console.log(props);
  return (
    <section className="component--container">
      <img src={props.imageURL} alt={props.title} />

      <div className="content--container">
        <div className="title--container">
          <div className="spanEl">
            <span>
              <i className="fa-solid fa-location-dot"></i> {props.location}
            </span>
            <span className="link">{props.link}</span>
          </div>
          <h1 className="title">{props.title}</h1>
        </div>
        <div className="content">
          <p className="date">
            {props.time.startDate} - {props.time.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
}
