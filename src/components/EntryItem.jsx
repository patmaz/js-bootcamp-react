import React from 'react';
import EntryItemTitle from './EntryItemTitle.jsx';
import EntryItemImg from './EntryItemImg.jsx';

class EntryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#fff'
        };
        console.log('constructor()', '### wrzucamy defaultowy stan');
    }

    componentWillMount() {
        console.log('componentWillMount()');
    }

    componentDidMount() {
        console.log('componentDidMount()', '###pobieramy dane, bawimy się elementami DOM');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps() ' + nextProps)
        console.log('###zmieniamy stan wg nowych prosów');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate ', nextProps, nextState);
        console.log('###jak nam nowe rzeczy nie pasuje, zwracamy false, np. brak rerendringu pomimo zmiany stanu');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate ', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate ', prevProps, prevState);
        console.log('###może jakiś modal, albo fanfary');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    changeMyState() {
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        this.setState({color: getRandomColor()});
    }

    render() {
        return (
            <li data-index={this.props.index} style={{backgroundColor:this.state.color}}>
                <EntryItemTitle title={this.props.properties.title} />
                <EntryItemImg src={this.props.properties.thumbnailUrl} />
                <button onClick={this.changeMyState.bind(this)}>change my state</button>
            </li>
        )
    }
}

EntryItem.propTypes = {
    index: React.PropTypes.number.isRequired,
    properties: React.PropTypes.object.isRequired
}

export default EntryItem;