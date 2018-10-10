import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import { SubmissionError } from 'redux-form';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import {insertCustomer} from './../actions/insertCustomer';

class newCustomerContainer extends Component {

    handleSubmit = values => {
        return this.props.insertCustomer(values).then( r => {
            if(r.error){
                throw new SubmissionError(r.payload);
            }
        });
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {

        const newCustomer = {
            "id": "",
            "dni": "",
            "name": "-",
            "age": 0
          };
        //   debugger;+

        return <CustomerEdit {...newCustomer}
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack} />
    }

    render() {
        return (
            <div>
                <AppFrame header={`Nuevo cliente`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

newCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

export default withRouter (connect(null, {insertCustomer})(newCustomerContainer));