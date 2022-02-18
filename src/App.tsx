import React from 'react';
import './App.css';
import Box from '@mui/material/Box';

import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import Layout from 'components/Layout/Layout'

import style from "styled-components";

// import Todo from "components/Todo/CreateTodo";
// import TodoTable from "components/Todo/TodoTable";

import { useLayoutState, useLayoutDispatch, toggleSidebar } from "context/useContextApp";

function App() {

  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  return (
    <Box className="App" >
      <Header layoutState={isSidebarOpened} toggleSidebar={() => toggleSidebar(layoutDispatch)}/>
      <Sidebar layoutState={isSidebarOpened} toggleSidebar={() => toggleSidebar(layoutDispatch)}/>
      <Div open={isSidebarOpened}>
        <Layout />
      </Div>
    </Box>
  );
}

export default App;

interface SideDrawerProps {
  open: boolean,
}

const Div = style.div.attrs((props: SideDrawerProps) => ({
  open: props.open,
})) <SideDrawerProps>`
  ${(props: any) => props.open ? `
  width: calc(98vw - ${props.theme.sidebarWidth+10}px);
  margin-left: ${props.theme.sidebarWidth + 10}px;
  margin-right: auto;
  ` : `
  width: calc(98vw);
  margin-right: auto;
  margin-left: auto;
  
  `};
  
  transition: ${(props: any) => {
    // console.log(props)
    return props.theme.transitions.create(['margin', 'width'], {
      easing: props.theme.transitions.easing.sharp,
      duration: props.open ? props.theme.transitions.duration.complex : props.theme.transitions.duration.enteringScreen
    })
  }};
  flex-grow: 1;
  padding: ${(props: any) => props.theme.spacing(2)};
  min-height: 60vh;
  background-color: #fcfcfc;

  &:not(:first-child) {
    padding-left:5px;
    padding-right:5px;
    ${(props: any) => props.theme.breakpoints.down("sm")} {
      padding-left:5px;
      padding-right:5px;
      margin-right: auto;
      margin-left: auto;
    };
  }
  margin-top: 64px;
  ${(props: any) => props.theme.breakpoints.down("sm")} {
      margin-top: 48px;
      width: 98vw;
      margin-right: auto;
      margin-left: auto;
  };
`
