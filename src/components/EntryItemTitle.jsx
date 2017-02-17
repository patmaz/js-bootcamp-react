import React from 'react';

class EntryItemTitle extends React.Component {
   render() {
        return (
            <h2>{this.props.title}</h2>
        )
   }
}

EntryItemTitle.propTypes = {
    title: React.PropTypes.string.isRequired
}

export default EntryItemTitle;