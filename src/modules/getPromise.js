import React from 'react';
import ReactDOM from 'react-dom';
import Status from '../components/Status.jsx';

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
                ReactDOM.render(<Status content={'loading...'}/>, document.getElementById('app'));
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