import React from 'react';
import Auth from '../../utils/auth';
import { Container } from 'semantic-ui-react'

const Welcome = () => {
    return (
      <Container>
        {Auth.loggedIn() ? (
          <p style={{ textAlign: "center", width: "100%", fontSize: "1.5rem", lineHeigh: "3rem" }}>
            Checkout the Foodbook for recipes!
          </p>
        ) : (
          <p style={{ textAlign: "center", width: "100%", fontSize: "1.5rem",  lineHeigh: "3rem" }}>
            Welcome to the Foodbook! We have awesome recipes to try, generated
            by our users. Create an account to add your favorite recipes to the
            Foodbook!
          </p>
        )}
      </Container>
    );
}

export default Welcome;