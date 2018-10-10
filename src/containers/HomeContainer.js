import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

class homeContainer extends Component {

    handleOnClick = () => {
        console.log("handle On Click")
        this.props.history.push('/customers');
    }

    render(){

        return (
            <div>
                <AppFrame 
                    header="HOME"
                    body={
                        <div>
                            Estamos en la pantalla inicial
                            
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>                                
                            </CustomersActions>
                        </div>
                    }
                    ></AppFrame>
            </div>
        );

    }
    
};

export default withRouter(homeContainer);