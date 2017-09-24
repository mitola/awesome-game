import React, { Component } from 'react';
import './less/App.less';
import ReactDOM from 'react-dom';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import LeftPanelComponent from './components/LeftPanelComponent';
import ResourceDisplayComponent from './components/ResourceDisplayComponent';

const App = () => (
    <div>

    <Grid container spacing={24}>
        <Grid item xs={4}>
        <LeftPanelComponent  />
        </Grid>
        <Grid item xs={20}>
        <ResourceDisplayComponent  />
        </Grid>
      </Grid>
    </div> 
);//<MyAwesomeReactComponent />

ReactDOM.render(
 <App />,
 document.getElementById('root')
);

export default App;
