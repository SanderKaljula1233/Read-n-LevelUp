import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

class Dashboard extends Component {
    render() {
        return (
            <div>
            <p>DASHBOARD SCREEN</p>
            
                <h1 onClick={this.props.logout}>LOGOUT</h1>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);