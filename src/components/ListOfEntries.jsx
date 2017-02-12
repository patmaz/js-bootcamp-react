import React from 'react';
import EntryItem from './EntryItem.jsx';
import Status from './Status.jsx';

class ListOfEntries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholders: []
        };
    }
    componentDidMount() {
        var self = this;
        function getPromise(start, end){
            const URL = 'https://jsonplaceholder.typicode.com';
            var params = '/photos?_start=' + start + '&_end=' + end;

            if(window.Promise){
                return new Promise(function(resolve, reject){
                    var req = new XMLHttpRequest();

                    req.open('GET', URL + params);

                    req.onload = function(){
                        if(req.status === 200){
                            resolve(req.response);
                        } else {
                            reject(Error(request.statusText));
                        }
                    }

                    req.onprogress = function(){
                        console.log('loading...');
                    }

                    req.onerror = function(){
                        reject(Error('Error fetching data.'));
                    }

                    req.setRequestHeader('Accept', 'application/json');

                    req.send();
                    console.log('Asynchronous request made');
                });
            } else {
                console.log('promise not available');
            }
        }
        var promise = getPromise(0, 3);
        promise.then(function(data){
            console.log('Got data! Promise fulfilled');
            var placeholders = JSON.parse(data);
            self.setState({placeholders: placeholders});
        }, function(err){
            console.log('Promise rejected.');
            console.log(err.message);
            renderErr((err.message).toString());
        });
    }
    render() {
        console.log(this.state.placeholders);
        if(this.state.placeholders.length > 0) {
            return (
                <ul id={this.props.randomId(5)} className={this.props.someBoolean ? 'positive' : 'negative'}>
                    {this.state.placeholders.map((item, index) =>
                        <EntryItem key={item.id} index={index} properties={{
                            title: item.title,
                            thumbnailUrl: item.thumbnailUrl
                        }} />
                    )}
                </ul>
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
