import React, { Component } from 'react'
import LengthControl from '../LengthControl';
import TimerControl from '../TimerControl';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: 25,
            currentPause: 5,
            totalTime: 25*60,
            totalPause: 5*60,
            timerState: '',
            pauseBtn: 'Pause',
            intervalState: '',
            colorTimer: {color: 'green'}
        };

        this.incrementTime = this.incrementTime.bind(this);
        this.incrementPause = this.incrementPause.bind(this);
        this.decrementTime = this.decrementTime.bind(this);
        this.decrementPause = this.decrementPause.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.clearTimer = this.clearTimer.bind(this);


    }
    
    incrementTime() {
        if (this.state.currentTime < 30 && this.state.timerState === '') {
            this.setState({
                currentTime: this.state.currentTime + 1,
                totalTime: (this.state.currentTime + 1) *  60
            });
        }
    }

    incrementPause() {
        if (this.state.currentPause < 10 && this.state.timerState === '') {
            this.setState({
                currentPause: this.state.currentPause + 1,
                totalPause: (this.state.currentPause + 1) *  60
            });
        }
    }

    decrementTime() {
        if (this.state.currentTime > 5 && this.state.timerState === '') {
            this.setState({
                currentTime: this.state.currentTime - 1,
                totalTime: (this.state.currentTime - 1) *  60
            });
        }
    }

    decrementPause() {
        if (this.state.currentPause > 1 && this.state.timerState === '') {
            this.setState({
                currentPause: this.state.currentPause - 1,
                totalPause: (this.state.currentPause - 1) *  60
            });
        }
    }

    startTimer() {      
        if ( this.state.timerState === '' ) {
            this.setState({
                timerState: 'running'
            });
            var intervalState = setInterval( () => {
                if (this.state.timerState === 'running') {
                    if (this.state.totalTime > 30) {
                        this.setState({
                            totalTime: this.state.totalTime - 1
                        });
                    } else if (this.state.totalTime > 0 && this.state.totalTime <= 30) {
                        this.setState({
                            colorTimer: {color: 'red'},
                            totalTime: this.state.totalTime - 1
                        });
                    } else if (this.state.totalTime <=0 && this.state.totalPause > 30) {
                        this.setState({
                            colorTimer: {color: 'green'},
                            totalPause: this.state.totalPause - 1
                        });
                    } else if (this.state.totalTime <= 0 && this.state.totalPause > 0 && this.state.totalPause <= 30) {
                        this.setState({
                            colorTimer: {color: 'red'},
                            totalTime: this.state.totalPause - 1
                        });
                    }
                    else if (this.state.totalTime <= 0 && this.state.totalPause <= 0) {
                        this.clearTimer();
                        this.startTimer();
                    }
                } 
            }, 1000);
            this.setState({
                intervalState: intervalState
            });
        }
    }

    pauseTimer() {
        if (this.state.timerState === 'running') {
            this.setState({
                timerState: 'paused',
                pauseBtn: 'Resume'
            });
        } else if (this.state.timerState === 'paused') {
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
            totalTime: this.state.currentTime * 60,
            pauseBtn: 'Pause',
            colorTimer: {color: 'green'}
        });
    }

    render() {

        //Timer
        let time = (this.state.totalTime > 0) ? this.state.totalTime : this.state.totalPause;   
        
        //Message
        /*
        if (this.state.timerState === 'running') {
            if (this.state.totalTime > 0) {
                var message = 'Work hard!'
            } else {
                var message = 'Play hard!'
            }
        }
        */
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes*60;

        function addZero(string,pad,length) {
            return (new Array(length+1).join(pad)+string).slice(-length);
        }

        let timerMin = addZero(minutes,'0',2);
        let timerSec = addZero(seconds,'0',2);

        return (
            <div>
                <LengthControl
                    title='Work:'
                    incrementTime={this.incrementTime}
                    decrementTime={this.decrementTime}
                    currentTime={this.state.currentTime}
                />
                <LengthControl
                    title='Break:'
                    incrementTime={this.incrementPause}
                    decrementTime={this.decrementPause}
                    currentTime={this.state.currentPause}
                />
                <TimerControl
                    colorTimer={this.state.colorTimer}
                    //title={message}
                    startTimer={this.startTimer}
                    pauseTimer={this.pauseTimer}
                    clearTimer={this.clearTimer}
                    pauseBtn={this.state.pauseBtn}
                    timerMin={timerMin}
                    timerSec={timerSec}
                />
            </div>
        )
    }
}

export default App;
