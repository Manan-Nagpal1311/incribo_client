import React from 'react';
import {Link} from 'react-router-dom';
import {Button,Paper} from '@material-ui/core';

const Home = () => {
  return <>
  <Paper align="center">
   <h2>Click Below button to read books</h2>
   <Button  href="https://incribo.com/" variant='contained' color="primary">Incribo📚</Button>
   </Paper>
  </>;
};

export default Home;
