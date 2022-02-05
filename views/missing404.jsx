const React = require('react')
const Default = require('./layouts/default')

function Missing404 () {
    return (
        <Default>
            <h1>uh oh. 404</h1>
            <a href='/breads'>Back to home</a>
        </Default>
    )
}

module.exports = Missing404