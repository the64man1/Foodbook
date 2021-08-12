import React from 'react';
import Auth from '../../utils/auth';
import { Container } from 'semantic-ui-react'

const Welcome = () => {
    return (
      <Container style={{
        background:' rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 ',
        backdropFilter: 'blur( 4px )',
        WebkitBackdropFilter: 'blur( 4px )',
        borderRadius: '10px',
        border:' 1px solid rgba( 255, 255, 255, 0.18 )'
      }}>
        {Auth.loggedIn() ? (
          <p style={{ textAlign: "center", width: "100%", fontSize: "1.5rem", lineHeigh: "3rem" }}>
            Checkout the Foodbook for recipes!
          </p>
        ) : (
          <p style={{ textAlign: "center", width: "100%", fontSize: "1.5rem",  lineHeigh: "5rem" 
          }}>
            Welcome to the Foodbook! We have awesome recipes to try, generated
            by our users. Create an account to add your favorite recipes to the
            Foodbook!
          </p>
        )}
      </Container>
    );
}

export default Welcome;