import React, { Component } from 'react'

export class TimerControl extends Component {
    render() {
        return (
            <div>
                <div id="timer-control">
                    <div id='time-left' style={this.props.colorTimer}>{this.props.timerMin} : {this.props.timerSec}</div>
                    <button
                        id='start_stop'
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
                        id='reset'
                        onClick={this.props.clearTimer}
                        className="btn btn-light"
                    >
                        Reset
                    </button>
                </div>
                <div id='timer-label'>{this.props.message}</div>
            </div>
        )
    }
}

export default TimerControl
