import React from 'react'
import Mainbody from './Mainbody';
import Navbar from './Navbar';
import Filterbar from './Filterbar';
import Grid from './Grid';

const Body = () => {
  return (
    <div>
      <Mainbody />
      <Navbar />
      <Filterbar />
      <Grid/>
    </div>
  )
}

export default Body