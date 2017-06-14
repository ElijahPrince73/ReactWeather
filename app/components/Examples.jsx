var React = require('react');
var {Link} =  require('react-router');

var Examples = (props) => {
      return (
        <div>
        <h1 className="text-center">Examples </h1>
        <p>Here are a few example locations to try</p>
        <ol>
          <li>
            <Link to='/?location=Austin'>Austin, TX</Link>
          </li>
          <li>
            <Link to='/?location=rio'> Rio, Brazil</Link>
          </li>
        </ol>
      </div>
      )
    }

module.exports = Examples;
