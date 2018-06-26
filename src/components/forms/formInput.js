import React, { Component } from 'react';
import {Input} from 'reactstrap';

export default class FormInput extends Component {
    
    render() {
        const field = this.props;
            return (
                <div>
                    <Input {...field.input} placeholder={field.placeholder} type={field.type} className='form-control'/>
                    {field.meta.touched && field.meta.error && <span className='error'>{field.meta.error}</span>}
              	</div>   
            )
    }
}