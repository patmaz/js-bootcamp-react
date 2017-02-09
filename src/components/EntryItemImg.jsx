import React from 'react';

class EntryItemImg extends React.Component {
   render() {
        return (
            <img src={this.props.content} />
        )
   }
}

EntryItemImg.propTypes = {
    content: React.PropTypes.string.isRequired
}

export default EntryItemImg;