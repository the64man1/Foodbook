import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_RECIPE } from '../utils/mutations';
import { QUERY_USER} from '../utils/queries';



class NewRecipe extends React.Component {
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
  
      this.handleInputChange = this.handleInputChange.bind(this);
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
                <input 
                    name="title"
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange}/> 
            </label>
            <br />
            <label>
            Recipe Category:
                <input 
                    name="category"
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} />
            </label>
            <br />
            <label>
            Ingredients:
                <textarea
                    name="ingredients"
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange}/>
            </label>
            <br />
            <label>
            Instructions:
                <textarea
                    name="instructions"
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange}/>
            </label>
            <br />
            <label>
            Please upload a picture if available:
                <input 
                    name="image"
                    type="file"
                    value={this.state.value} 
                    onChange={this.handleChange}/>
            </label>
            <br />
            <label>
                Please check if you want this recipe to be public for others to see. 
                <input
                    name="isPublic"
                    type="checkbox"
                    checked={this.state.isPublic}
                    onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                <input
                    name="isPublic"
                    type="checkbox"
                    checked={this.state.isPublic}
                    onChange={this.handleInputChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
      );
    }
   }

   export default NewRecipe;