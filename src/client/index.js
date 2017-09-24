import React from 'react';
import ReactDOM from 'react-dom';

import './less/index.less';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';

//TMP dependacy for material
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
