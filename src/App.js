import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Navbar, Nav, Form, FormControl, Button, Jumbotron } from 'react-bootstrap';
import PageHeader from './Components/PageHeader'
import PageFooter from './Components/PageFooter'
import Hero from './Components/Hero'
import Highlights from './Components/Highlights'
import Features from './Components/Features'
import CallToAction from './Components/CallToAction'

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB6CQHYKGYvsOexSavKmbcd17ZooiCJj2E",
  authDomain: "mit-covid19-hackathon.firebaseapp.com",
  databaseURL: "https://mit-covid19-hackathon.firebaseio.com",
  projectId: "mit-covid19-hackathon",
  storageBucket: "mit-covid19-hackathon.appspot.com",
  messagingSenderId: "718996867392",
  appId: "1:718996867392:web:05da3fe8f9fb88a19992a5",
  measurementId: "G-PCW63R6VHF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase.app().name)

function App() {
  return (
    <Container fluid>
      <PageHeader />
      <Hero />
      <Highlights />
      <Features />
      <CallToAction />
      <PageFooter />
    </Container>
  );
}

export default App;
