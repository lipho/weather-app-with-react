import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Sparklines, Sparklinesline} from 'react-sparklines';

class WeatherList extends Component {
  /**
   * @param cityData
   * @returns {XML} - Table for a city
   */
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <Sparklinesline color='red' />
          </Sparklines>
        </td>
      </tr>
    );
  }

  executeHeaderFns(headers, config) {
    var headerContent, processedHeaders = {};

    forEach(headers, function (headerFn, header) {
      if (isFunction(headerFn)) {
        headerContent = headerFn(config);
        if (headerContent != null) {
          processedHeaders[header] = headerContent;
        }
      } else {
        processedHeaders[header] = headerFn;
      }
    });

    return processedHeaders;
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temp</th>
          <th>Pressure</th>
          <th>Humidity</th>

        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {weather};
}


export default connect(mapStateToProps)(WeatherList);
/**
 * TODO LIVE TEMPLATES
 * TODO Comment template
 * TODO React Class FILE TEMPLATE
 * TODO React Class LIVE TEMPLATE
 * TODO React Function FILE TEMPLATE
 * TODO React Function LIVE TEMPLATE
 * TODO react-redux container FILE TEMPLATE
 * TODO FIX CONSOLE LOG TEMPLATES
**/