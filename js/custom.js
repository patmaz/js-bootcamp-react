function getPromise(start, end){
    var root = 'https://jsonplaceholder.typicode.com',
        params = '/photos?_start=' + start + '&_end=' + end;

    if(window.Promise){
        return new Promise(function(resolve, reject){
            var req = new XMLHttpRequest();

            req.open('GET', root + params);

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

var promise = getPromise('00', '20');
promise.then(function(data){
    console.log('Got data! Promise fulfilled');
    render(JSON.parse(data));
}, function(err){
    console.log('Promise rejected.');
    console.log(err.message);
});

function render(data){
    console.log(data);
    var EntryItemTitle = React.createClass({
        propTypes: {
            content: React.PropTypes.string.isRequired
        },

        render: function() {
            return (
                React.createElement('h2', {}, this.props.content)
            )
        }
    });
    var EntryItemImg = React.createClass({
        propTypes: {
            content: React.PropTypes.string.isRequired
        },

        render: function() {
            return (
                React.createElement('img', {src: this.props.content})
            )
        }
    });
    var EntryItem = React.createClass({
        propTypes: {
            index: React.PropTypes.number.isRequired,
            properties: React.PropTypes.object.isRequired
        },

        render: function() {
            return (
                React.createElement('li', {'data-index': this.props.index},
                    React.createElement(EntryItemTitle, {content: this.props.properties.title}),
                    React.createElement(EntryItemImg, {content: this.props.properties.thumbnailUrl})
                )
            )
        }
    });
    var elems = data.map(function(dataItem, index) {
        var properties = {
            title: dataItem.title,
            thumbnailUrl: dataItem.thumbnailUrl
        };
        return React.createElement(EntryItem, {
            key: dataItem.id,
            index: index,
            properties: properties
        });
    });
    var ListOfEntries = React.createClass({
        propTypes: {
            elems: React.PropTypes.array.isRequired,
            randomId: React.PropTypes.func,
            someBoolean: React.PropTypes.bool
        },

        render: function() {
            return (
                React.createElement('ul', {
                    id: this.props.randomId(5),
                    className: this.props.someBoolean ? 'positive' : 'negative'
                }, this.props.elems)
            )
        }
    })
    var listToRender = React.createElement(ListOfEntries, {
        elems: elems,
        randomId: function(length) { return Math.random().toString(36).substr(2, length)},
        someBoolean: true
    });
    ReactDOM.render(listToRender, document.getElementById('app'));
}