import React from 'react';
import { Container } from 'react-bootstrap';

export default function PageFooter(){
  return(
    <footer className="text-muted">
      <Container>
        <p className="float-right">
        &copy;2020
        </p>
      </Container>
    </footer>
  )
}
