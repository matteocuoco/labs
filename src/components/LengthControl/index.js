import React, { Component } from 'react'

export class LengthControl extends Component {
    render() {
        return (
            <div id="length-control">
                <h1 id="length-title">{this.props.title}</h1>
                <div id="length-btn">
                    <button id="btn-up"
                        onClick={this.props.incrementTime}
                        className="btn btn-light">
                        <i className="fa fa-plus"></i>
                    </button>
                    <div id="btn-value">
                        {this.props.currentTime}
                    </div>
                    <button id="btn-down"
                        onClick={this.props.decrementTime}
                        className="btn btn-light">
                        <i className="fa fa-minus"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default LengthControl
