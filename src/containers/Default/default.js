import React, { Component } from "react";
import { connect } from "react-redux"
import * as actions from "../../store/actions/index"

export class Default extends Component {
    state = {
        n: false
    }

    render() {
        return (
            <React.Fragment>
                <h1>Default Container. Redux Value: {this.props.value}</h1>
                <button onClick={() => this.props.buttonClicked(this.props.value + 1)}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.default.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buttonClicked: (value) => { dispatch(actions.setValue(value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Default)
