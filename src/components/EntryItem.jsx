import React from 'react';
import ReactDOM from 'react-dom';
import EntryItemTitle from './EntryItemTitle.jsx';
import EntryItemImg from './EntryItemImg.jsx';

class EntryItem extends React.Component {
   render() {
        return (
            <li data-index={this.props.index}>
                <EntryItemTitle content={this.props.properties.title} />
                <EntryItemImg content={this.props.properties.thumbnailUrl} />
            </li>
        )
   }
}

EntryItem.propTypes = {
    index: React.PropTypes.number.isRequired,
    properties: React.PropTypes.object.isRequired
}

export default EntryItem;