import React from 'react';

import { AppBar, Toolbar, Grid } from '@material-ui/core';

import Logout from '../User/Logout';

const Navbar = props => (
  <AppBar position="static">
    <Toolbar>
      <Grid container direction="row" justify="flex-end">
        <Logout/>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Navbar;
