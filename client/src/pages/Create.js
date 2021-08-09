import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_RECIPE } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import { Input, TextareaAutosize, Button } from '@material-ui/core';

const NewRecipe = () => {

    //const { loading, data } = useQuery(QUERY_ME);
    //console.log(data.me.id);
    //const id = data.me.id;

    const [createRecipe] = useMutation(CREATE_RECIPE);

    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        //categories: '',
        instructions:'',
        image:'',
        //isPublic:'',
        //createdBy:''
    });
    let history = useHistory();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
        const mutationResponse = await createRecipe({
          variables: {
            title: formData.title,
            ingredients: formData.ingredients,
            //categories: '6103400b528a0361e46c9738',
            instructions: formData.instructions,
            image: formData.image,
            public: true,
            //createdBy:'6103400b528a0361e46c974d',
          },
        });
        window.location.assign('/')
        // const token = mutationResponse.data.addUser.token;
        // Auth.login(token);
        //console.log(mutationResponse);
      };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };  

    return (
        <form onSubmit={handleFormSubmit}>
          <label>
            Recipe name / title:
                <Input 
                    className="form-control"
                    name="title"
                    type="title"
                    id="title" 
                    onChange={handleChange}/> 
            </label>
            <br />
            {/* <label>
            Recipe Category:
                <input 
                    name="category"
                    type="text" 
                    value={this.state.value} 
                    onChange={handleChange} />
            </label>
            <br /> */}
            <label>
            Ingredients:
                <TextareaAutosize
                     className="form-control"
                     name="ingredients"
                     type="ingredients"
                     id="ingredients" 
                    onChange={handleChange}/>
            </label>
            <br />
            <label>
            Instructions:
                <TextareaAutosize
                     className="form-control"
                     name="instructions"
                     type="instructions"
                     id="instructions"  
                    onChange={handleChange}/>
            </label>
            <br />
            <label>
            Please upload a picture if available:
                <Input 
                    className="form-control"
                    name="image"
                    type="file"
                    id="image"   
                    onChange={handleChange}/>
            </label>
            <br />
            {/* <label>
                Please check if you want this recipe to be public for others to see. 
                <input
                    name="isPublic"
                    type="checkbox"
                    checked={this.state.isPublic}
                    onChange={handleChange} />
            </label> */}
            <br />
            {/* <div className="flex-row flex-end">
            <Button type="submit" className="btn btn-primary mb-2">
            Submit
            </Button>
            </div>
            <input type="submit" value="Submit" /> */}
            <div className="flex-row flex-end">
            <button type="submit" className="btn btn-primary mb-2">
            Submit
            </button>
            </div>
        </form>
      );
};

export default NewRecipe;