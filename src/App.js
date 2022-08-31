import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import Homepage from './components/pages/homepage/Homepage';

import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./components/navbar/Layout.js";
import { AcmeLogo } from "./components/navbar/AcmeLogo.js";

import env from "react-dotenv";


function App() {

  const collapseItems = [
    "หน้าแรก",
    "Customers",
    "Pricing",
    "Company",
  ];

  return (
    <Layout>
      <Navbar isBordered variant="floating">
      <Navbar.Toggle showIn="xs" />
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            { env.SERVER_NAME }
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs">
          <Navbar.Link isActive href="#">หน้าแรก</Navbar.Link>
          <Navbar.Link href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: "",
              }}
              
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>    
    </Layout>
  );
}

export default App;
