import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
export default class Number extends Component{
    render(){
        return(
            <div>
                <h1>This is Number component</h1>
                <div className='row col-sm-offset-5'>
                <p>0</p>
                </div>
                <div className="row col-sm-offset-4">
                <Button bsStyle="primary">Increment</Button>
                </div>
            </div>
        );
    }
}