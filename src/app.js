import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import ListOfEntries from './components/ListOfEntries.jsx';
import SearchGifApp from './components/SearchGifApp.jsx';

const getRandomId = (length) => {
    return Math.random().toString(36).substr(2, length);
}

class App extends React.Component {
  render () {
    return (
        <div>
            <div className="searchGifWrapper">
                <SearchGifApp />
            </div>
        <div className="placeholders">
            <ListOfEntries
                randomId={getRandomId}
                someBoolean={true} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Router history={browserHistory}>
                    <Route path="*" component={App} />
                </Router>,
                document.getElementById('app'));