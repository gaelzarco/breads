const React = require('react')
const Default = require('./layouts/Default')

function home () {
    return (
      <Default>
        'Welcome to an app about bread'
        <div>
            <a href="/breads"><button>Let me in!</button></a>
        </div>
      </Default>
    )
}

module.exports = home