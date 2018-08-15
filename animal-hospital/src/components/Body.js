import React from "react";

export default class Body extends React.Component {
  render() {
    const tip = this.props.quote;

    return (
      <div className="col-lg-12 middleArea">
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-3 title">
            <span id="titleQuote">
              <b> Your pet's health is Our Priority</b>
            </span>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col" />
        </div>
        <div className="row">
          <div className="col-lg-8" />
          <div className="col-lg-3 petFact">
            <span id="title-p-fact">
              <i class="fas fa-arrow-alt-circle-right" /> Daily Pet Tips:
            </span>
            {tip}
          </div>
        </div>
      </div>
    );
  }
}
