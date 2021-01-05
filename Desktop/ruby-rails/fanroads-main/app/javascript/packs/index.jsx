// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import PropTypes from 'prop-types'
import App from './componenets/app'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import rootReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
			<Provider store={store}>
				<Route path='/' component={App} />
			</Provider>
		</Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
