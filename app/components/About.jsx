var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div className='row'>
      <div className='column'>
        <div className='text-center'>
          <h1 className="page-title">About </h1>
          <p>This is a weather application using React</p>

        </div>
          <p>Tools Used:</p>
          <ul>
            <li>
            <a href='https://github.com/ElijahPrince73/ReactWeather'> code</a>
            </li>
            <li>
              <a href='https://facebook.github.io/react/'>Javascript Framwork used</a>
            </li>
            <li>
              <a href='https://openweathermap.org/'>Open Weather Map to to search for weather data</a>
            </li>
          </ul>
      </div>
    </div>
  )
};

module.exports = About;
