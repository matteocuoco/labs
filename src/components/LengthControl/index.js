import React, { Component } from 'react'

export class LengthControl extends Component {
    render() {
        return (
            <div id="length-control">
                <h1 id={this.props.label}>{this.props.title}</h1>
                <div id="length-btn">
                    <button
                        id={this.props.btnUp}
                        onClick={this.props.incrementTime}
                        className="btn btn-light">
                        <i className="fa fa-plus"></i>
                    </button>
                    <div id={this.props.typeLength}>
                        {this.props.currentTime}
                    </div>
                    <button
                        id={this.props.btnDown}
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
