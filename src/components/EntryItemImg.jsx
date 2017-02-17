import React from 'react';

class EntryItemImg extends React.Component {
   render() {
        return (
            <img src={this.props.src} />
        )
   }
}

EntryItemImg.propTypes = {
    src: React.PropTypes.string.isRequired
}

export default EntryItemImg;