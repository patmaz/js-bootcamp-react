import React from 'react';
import ReactDOM from 'react-dom';

class ListOfEntries extends React.Component {
   render() {
        return (
            <ul id={this.props.randomId(5)} className={this.props.someBoolean ? 'positive' : 'negative'}>
                {this.props.elems}
            </ul>
        )
   }
}

ListOfEntries.propTypes = {
    elems: React.PropTypes.array.isRequired,
    randomId: React.PropTypes.func,
    someBoolean: React.PropTypes.bool
}

export default ListOfEntries;
