import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ColorIndex from './ColorIndex'
import NewColorForm from './NewColorForm'
import Color from './Color'

const Routes = ({ addColor, colors }) => {
  return (
    <Switch>
      <Route exact path="/colors">
        <ColorIndex colors={colors} />
      </Route>
      <Route path="/colors/new">
        <NewColorForm addColor={addColor} />
      </Route>
      <Route path="/colors/:color">
        <Color colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  )
}

export default Routes
