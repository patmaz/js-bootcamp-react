import React from 'react';
import ReactDOM from 'react-dom';
import EntryItem from './components/EntryItem.jsx';
import ListOfEntries from './components/ListOfEntries.jsx';
import Status from './components/Status.jsx';
import getPromise from './modules/getPromise';

var placeholders;
var promise = getPromise(0, 3);
promise.then(function(data){
    console.log('Got data! Promise fulfilled');
    mapRenderData(JSON.parse(data));
}, function(err){
    console.log('Promise rejected.');
    console.log(err.message);
    renderErr((err.message).toString())
});

function mapRenderData(data) {
    placeholders = data.map((dataItem, index) => {
        var properties = {
            title: dataItem.title,
            thumbnailUrl: dataItem.thumbnailUrl
        };
        return <EntryItem key={dataItem.id} index={index} properties={properties} />
    });
    ReactDOM.render(<ListOfEntries
                    placeholders={placeholders}
                    randomId={function(length) { return Math.random().toString(36).substr(2, length)}}
                    someBoolean={true} />,
                document.getElementById('app'));
}

function renderErr(msg) {
    ReactDOM.render(<Status content={msg}/>, document.getElementById('app'));
}