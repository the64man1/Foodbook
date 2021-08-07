import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_RECIPE } from '../utils/mutations';
import { QUERY_USER} from '../utils/queries';



class newRecipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          ingredients: '',
          categries: '',
          instructions:'',
          image:'',
          isPublic:'',
          createdBy:'',
        };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
          });
        }
    

    render() {
      return (
        <form>
          <label>
            Recipe name / title:
            <input type="text"   />
         
          <input 
            name="title"
            type="submit" 
            value={this.state.value} 
            onChange={this.handleChange}/> 
            </label>
            <br />
            <label>


                
            </label>
        </form>
      );
    }
    }