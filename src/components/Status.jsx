import React from 'react';

class Status extends React.Component {
   render() {
        return (
            <div>
                <h1>Status</h1>
                <p>{this.props.content}</p>
            </div>
        )
   }
}

Status.propTypes = {
    content: React.PropTypes.string.isRequired
}

export default Status;