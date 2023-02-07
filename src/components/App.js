import React from 'react';
import '../styles/app.scss';

export const App = (props) => {
  return (
      <div className="app-container">
          {props.children}
      </div>
  );
};

App.propTypes = {
    children: React.PropTypes.node
};

export default App;
