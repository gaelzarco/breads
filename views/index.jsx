const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
        <Default title={title}>
          <ul>
          {
            breads.map((bread) => {
                return (
                <li key={bread}>
                  <a href={`/breads/${bread.id}`}>
                    {bread.name}
                  </a>
                </li>)
            })
          }
          </ul>
          <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
          </div>
        </Default>
    )
}

module.exports = Index