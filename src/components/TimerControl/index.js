import React, { Component } from 'react'

export class TimerControl extends Component {
    render() {
        return (
            <div id="timer-control">
                <div id="timer" style={this.props.colorTimer}>{this.props.timerMin} : {this.props.timerSec}</div>
                <button
                    id='btn-start'
                    onClick={this.props.startTimer}
                    className="btn btn-light"
                >
                    Start
                </button>
                <button
                    id='btn-pause'
                    onClick={this.props.pauseTimer}
                    className="btn btn-light"
                >
                    {this.props.pauseBtn}
                </button>
                <button
                    id='btn-clear'
                    onClick={this.props.clearTimer}
                    className="btn btn-light"
                >
                    Reset
                </button>
            </div>
        )
    }
}

export default TimerControl
