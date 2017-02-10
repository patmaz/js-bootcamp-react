import React from 'react';

class ListOfEntries extends React.Component {
   render() {
        return (
            <ul id={this.props.randomId(5)} className={this.props.someBoolean ? 'positive' : 'negative'}>
                {this.props.placeholders}
            </ul>
        )
   }
}

ListOfEntries.propTypes = {
    placeholders: React.PropTypes.array.isRequired,
    randomId: React.PropTypes.func,
    someBoolean: React.PropTypes.bool
}

export default ListOfEntries;
