import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodosContainer from './containers/TodosContainer'
import reducers from './reducer'

const store = createStore(reducers)

export default class TodoRedux extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodosContainer />
      </Provider>
    );
  }
}
