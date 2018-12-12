import React from 'react';
import PropTypes from 'prop-types';

const SampleComponent = ({extent, x, edge}) => {
  var y_pos = edge.points[0].y; // Initialize the y_pos point Placeholder
  for (var j = 1; j < edge.points.length; j++) { // For all other Points
    if (y_pos === edge.points[j].y) { // The y_pos point had the same y value
      j = edge.points.length; // Break the Loop
    } else { // Not the same y value
      y_pos = edge.points[j].y; // Update the y_pos point Placeholder
    }
  }
  const transform = `translate(${x-extent}, ${y-(extent/2.0)})`; // Manipulate the position of the graph
  const style = {
    stroke: 'lightgrey',
    strokeLinejoin: 'round',
    strokeWidth: 1
  };  
  return (
    <g transform={transform}>
      <rect x={0} y='0' width={extent} height={extent} style={style}/>
    </g>
  );
};

// Proptypes of ToggleBurttons
DimensionsLabelComponent.propTypes = {
  extent: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  edge: PropTypes.object.isRequired,
};

export default SampleComponent;
