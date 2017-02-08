function getPromise(start, end){
    var root = 'https://jsonplaceholder.typicode.com',
        option = '/photos?_start=' + start + '&_end=' + end;

    if(window.Promise){
        return new Promise(function(resolve, reject){
            var req = new XMLHttpRequest();

            req.open('GET', root + option);

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
    console.log(JSON.parse(data));
    render(JSON.parse(data));
}, function(err){
    console.log('Promise rejected.');
    console.log(err.message);
});

function render(data){
    var elems = data.map(function(item){
        return React.createElement('li', {key: item.id},
            React.createElement('h2', {}, item.title),
            React.createElement('p', {dangerouslySetInnerHTML: {__html: '<img src="' + item.thumbnailUrl + '"/>'}})
        )
    });
    var listOfElems = React.createElement('ul', {}, elems);
    ReactDOM.render(listOfElems, document.getElementById('app'));
}