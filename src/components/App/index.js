import React, { Component } from 'react'

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: 5,
            totalTime: 300,
            timerState: '',
            pauseBtn: 'Pause',
            intervalState: '',
        };

        this.incrementTime =   this.incrementTime.bind(this);
        this.decrementTime =   this.decrementTime.bind(this);
        this.startTimer    =   this.startTimer.bind(this);
        this.pauseTimer    =   this.pauseTimer.bind(this);
        this.clearTimer    =   this.clearTimer.bind(this);

    }
    
    incrementTime() {
        if (this.state.currentTime < 10 && this.state.timerState === '') {
            this.setState({
                currentTime: this.state.currentTime + 1,
                totalTime: (this.state.currentTime + 1) *  60
            });
        }
    }

    decrementTime() {
        if (this.state.currentTime > 1 && this.state.timerState === '') {
            this.setState({
                currentTime: this.state.currentTime - 1,
                totalTime: (this.state.currentTime - 1) *  60
            });
        }
    }

    startTimer() {      
        if ( this.state.timerState !== 'running' ) {
            this.setState({
                timerState: 'running'
            });
            var intervalState = setInterval( () => {
                if ( this.state.timerState === 'running' ) {
                    this.setState({
                        totalTime: this.state.totalTime - 1
                    });
                }
            }, 1000);
            this.setState({
                intervalState: intervalState
            });    
        }
    }

    pauseTimer() {
        if ( this.state.timerState === 'running' ) {
            this.setState({
                timerState: 'paused',
                pauseBtn: 'Resume'
            });
        } else {
            this.setState({
                timerState: 'running',
                pauseBtn: 'Pause'
            });
        }
    }

    clearTimer() {
        clearInterval(this.state.intervalState);
        this.setState({
            timerState: '',
            totalTime: this.state.currentTime * 60
        });
    }

    render() {
        return (
            <div>
                <button id="btn-up" onClick={this.incrementTime}>
                    <i className="fa fa-arrow-up"></i>
                </button>
                <div id="btn-value">
                    {this.state.currentTime}
                </div>
                <button id="btn-down" onClick={this.decrementTime}>
                    <i className="fa fa-arrow-down"></i>
                </button>
                <button id='btn-start' onClick={this.startTimer}>
                    Start
                </button>
                <button id='btn-pause' onClick={this.pauseTimer}>
                    {this.state.pauseBtn}
                </button>
                <button id='btn-clear' onClick={this.clearTimer}>
                    Reset
                </button>
                <div>
                    Timer: {this.state.totalTime}
                </div>
            </div>
        )
    }
}

export default App;
