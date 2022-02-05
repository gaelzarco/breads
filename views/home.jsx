const React = require('react')
const Default = require('./layouts/Default')

function home () {
    return (
      <Default>
        <h1>Welcome to an app about bread</h1>
        <div>
            <a href="/breads"><button>Let me in!</button></a>
        </div>
      </Default>
    )
}

module.exports = home