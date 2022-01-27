import React, { memo } from 'react';

function DemoOutput({ isVisible }) {
  console.log('DemoOutput Component executed!!');

  return (<p>{ isVisible ? 'New paragraph from DemoOupt Component' : '' }</p>);
}

// Using the `memo()` method to optimize functional components
// such that they are re-evaluated/executed only when the props
// that the components recieve are changed; otherwise the execution
// is skipped
// NOTE: The `memo()` method works only with functional components
export default memo(DemoOutput);
