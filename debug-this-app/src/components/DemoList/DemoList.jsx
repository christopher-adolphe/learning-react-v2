import React, { useMemo } from 'react';

function DemoList({ title, items }) {
  console.log('DemoList Component executed!!');
  
  // Using the `useMemo()` hook to optimize functional components
  // such that they are re-evaluated/executed only when the props
  // that the components recieve are changed; otherwise the execution
  // is skipped. The `useMemo()` hook is particularly useful when
  // the component recieve props which are reference types on which
  // somekind of intensive operation is performed. So if other props
  // of the component is changing we can skip the intensive operation
  // like in the example below the `useMemo()` hook will skip the sorting
  // operation when the component is re-evaluated and the `items` prop
  // does not change
  // NOTE: `useMemo()` hook works only with functional components
  const sortedItems = useMemo(() => {
    console.log('Sorting items!!');
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div>
      <h2>{ title }</h2>

      <ul>
        {
          sortedItems.map(item => (
            <li key={ item }>{ item }</li>
          ))
        }
      </ul>
    </div>
  );
}

export default DemoList;
