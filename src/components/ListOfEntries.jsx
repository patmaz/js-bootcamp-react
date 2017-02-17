import React from 'react';
import EntryItem from './EntryItem.jsx';

class ListOfEntries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholders: [],
            progress: []
        };

        this.getPlaceholders = this.getPlaceholders.bind(this);
    }

    componentDidMount() {
        var promise = this.getPlaceholders(0, 3);
        promise
            .then((data) => {
                this.setState({progress: ['Got data! Promise fulfilled', ...this.state.progress]});
                var placeholders = JSON.parse(data);
                this.setState({placeholders: placeholders});
            })
            .catch((err) => {
                this.setState({progress: [`Promise rejected ${err.message}`, ...this.state.progress]});
            });
    }

    getPlaceholders(start, end) {
        const URL = 'https://jsonplaceholder.typicode.com';
        const PARAMS = '/photos?_start=' + start + '&_end=' + end;

        if(window.Promise){
            return new Promise((resolve, reject) => {
                var req = new XMLHttpRequest();

                req.open('GET', URL + PARAMS);

                req.onload = () => {
                    if(req.status === 200){
                        resolve(req.response);
                    } else {
                        reject(Error(request.statusText));
                    }
                }

                req.onprogress = () => {
                    this.setState({progress: ['on progress', ...this.state.progress]});
                }

                req.onerror = () => {
                    reject(Error('Error fetching data.'));
                    this.setState({progress: ['error fetching data', ...this.state.progress]})
                }

                req.setRequestHeader('Accept', 'application/json');

                req.send();
                this.setState({progress: ['async request', ...this.state.progress]});
            });
        } else {
            this.setState({progress: ['browser doesnt support promise', ...this.state.progress]});
        }
    }

    render() {
        if(this.state.placeholders.length > 0) {
            return (
                <div>
                    {this.state.progress.map((item, index) =>
                        <p key={index}> {`${index}: ${item}`} </p>
                    )}
                    <ul id={this.props.randomId(5)} className={this.props.someBoolean ? 'positive' : 'negative'}>
                        {this.state.placeholders.map((item, index) =>
                            <EntryItem key={item.id} index={index} properties={{
                                title: item.title,
                                thumbnailUrl: item.thumbnailUrl
                            }} />
                        )}
                    </ul>
                </div>
            )
        } else {
            return (
                <ul></ul>
            )
        }
    }
}

ListOfEntries.propTypes = {
    randomId: React.PropTypes.func,
    someBoolean: React.PropTypes.bool
}

export default ListOfEntries;
