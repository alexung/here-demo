import React, { Component } from 'react';
import * as d3 from 'd3';

class ProgressArc extends Component {
	constructor(props) {
		super(props);
		this.tau = Math.PI * 2;
	}

	  displayName: 'ProgressArc'; 
  propTypes: {
    id: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number,
    backgroundColor: PropTypes.string,
    foregroundColor: PropTypes.string,
    percentComplete: PropTypes.number
  }

	componentDidMount() {
	  const context = this.setContext();
	  this.setBackground(context);
	  this.setForeground(context);
	}

  setContext() {
    return d3.select(this.refs.arc).append('svg')
      .attr('height', '300px')
      .attr('width', '300px')
      .attr('id', 'd3-arc')
      .append('g')
      .attr('transform', `translate(150, 150)`);
  }

  setBackground(context) {
    return context.append('path')
    .datum({ endAngle: this.tau })
    .style('fill', '#e6e6e6')
    .attr('d', this.arc());
  }

  setForeground(context) {
	  return context.append('path')
	    .datum({ endAngle: this.tau * 0.3 })
	    .style('fill', '#00ff00')
	    .attr('d', this.arc());
	}
  
  arc() {
    return d3.arc()
      .innerRadius(100)
      .outerRadius(110)
      .startAngle(0)
  }
  

  render() {
    return (
      <div ref="arc"></div>
    )
  }
}
export default ProgressArc;