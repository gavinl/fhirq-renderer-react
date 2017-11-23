/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './HomePage';
import ServerPage from './server';
import QuestionnaireListPage from './questionnaire/QuestionnaireList';
import QuestionnairePage from './questionnaire';
import OutputPage from './output';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/server" component={ServerPage} />
            <Route exact path="/questionnaire" component={QuestionnaireListPage} />
            <Route exact path="/questionnaire/:id" component={QuestionnairePage} />
            <Route exact path="/output" component={OutputPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
