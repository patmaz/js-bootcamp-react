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

export default getPromise;