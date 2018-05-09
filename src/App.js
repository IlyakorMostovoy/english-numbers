import React, { Component } from "react";
import converter from "number-to-words";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 0,
      max: 100,
      currentNumber: null,
      currentNumberText: null,
      isShowHelp: true
    };
  }

  render() {
    return (
      <div className="app">
        <div className="app__menu-bar">
          <h1 className="app__title">english numbers</h1>
        </div>
        <div className="app__content">
          <div className="app__number">{this.state.currentNumber}</div>
          <div className="app__help-block">
            {this.state.isShowHelp ? (
              <span className="app__help-text">
                {this.state.currentNumberText}
              </span>
            ) : null}
          </div>
          <div className="app__buttons">
            <button
              className="button app__button-help"
              onClick={() => this.toggleShowNumberText()}
            >
              {`${this.state.isShowHelp ? "hide" : "show"} help`}
            </button>
            <button
              className="button app__button-next"
              onClick={() => this.setNextNumber()}
            >
              next number
            </button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setNextNumber();
  }

  setNextNumber() {
    const nextNumber = this.generateNextNumber(this.state.min, this.state.max);

    this.setState({
      currentNumber: nextNumber,
      currentNumberText: converter.toWords(nextNumber),
      isShowHelp: false
    });
  }

  generateNextNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  toggleShowNumberText() {
    this.setState({
      isShowHelp: !this.state.isShowHelp
    });
  }
}

export default App;
