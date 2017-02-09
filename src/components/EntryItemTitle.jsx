import React from 'react';

class EntryItemTitle extends React.Component {
   render() {
        return (
            <h2>{this.props.content}</h2>
        )
   }
}

EntryItemTitle.propTypes = {
    content: React.PropTypes.string.isRequired
}

export default EntryItemTitle;