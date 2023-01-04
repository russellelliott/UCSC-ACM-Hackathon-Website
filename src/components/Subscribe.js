import React from'react';
import'./Subscribe.css';

function Subscribe() {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  var htmlModule = require('raw-loader!./Subscribe.html');
  var html = htmlModule.default;

  return(
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}

export default Subscribe;