import React from 'react';

class SearchGifSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};

        this.changeHandler = this.changeHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    changeHandler(e) {
        var searchTerm = e.target.value;
        this.setState({searchTerm : searchTerm});
        this.props.onSearch(searchTerm);
    }

    keyUpHandler(e) {
        if (e.keyCode === 13) {
            this.props.onSearch(this.state.searchTerm);
        }
    }

    render() {
        return (
            <input  type='text'
                    placeholder='serach for gif'
                    onChange={this.changeHandler}
                    onKeyUp={this.keyUpHandler}
                    value={this.state.searchTerm}/>
        )
    }
}

export default SearchGifSearch;