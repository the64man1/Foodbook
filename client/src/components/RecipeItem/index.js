/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./style.css"; 
// front end
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css';
//import { Card , CardTitle, Icon, Row, Col } from 'react-materialize';

function RecipeItem(recipe) {
    const {
        createdBy,
        title,
        ingredients,
        instructions,
        likes,
        dislikes,
        comments,
        image,
        //public,
        categories
    } = recipe;

    return (
      <div className="card">
        <div className="card-body">
        {/* <img width="200" height="200" src={`/images/${image}` }/> */}
        <img width="200" height="200" src={`${image}` }/>
          <h2 className="card-title">{title}</h2>
          <h5><u>Ingredients:</u></h5>
          {ingredients.map((ingredient) => {
            return <p>{ingredient}</p>
          })}
          <h5><u>Instructions:</u></h5>
          <p class="card-text">{instructions}</p>
        </div>
      </div>
    );
}


/* <Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={`${image}` } reveal waves="light"/>}
      reveal={<p>Ingredients:</p>
        ingredients.map((ingredient) => {
          return <p>{ingredient}</p>
        )}
        
      }
      revealIcon={<Icon>more_vert</Icon>}
      title="Card Title"
    >
      <p>
        <a href="#">
          This is a link
        </a>
      </p>
    </Card>
  </Col>
</Row> */


export default RecipeItem;