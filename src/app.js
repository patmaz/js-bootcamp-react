import React from 'react';
import ReactDOM from 'react-dom';
import EntryItem from './components/EntryItem.jsx';
import ListOfEntries from './components/ListOfEntries.jsx';
import getPromise from './modules/getPromise';

var elems;
var promise = getPromise('00', '20');
promise.then(function(data){
    console.log('Got data! Promise fulfilled');
    mapData(JSON.parse(data));
}, function(err){
    console.log('Promise rejected.');
    console.log(err.message);
});

function mapData(data) {
    elems = data.map(function(dataItem, index) {
        var properties = {
            title: dataItem.title,
            thumbnailUrl: dataItem.thumbnailUrl
        };
        return <EntryItem key={dataItem.id} index={index} properties={properties} />
    });
    ReactDOM.render(<ListOfEntries
                    elems={elems}
                    randomId={function(length) { return Math.random().toString(36).substr(2, length)}}
                    someBoolean={true} />,
                document.getElementById('app'));
}