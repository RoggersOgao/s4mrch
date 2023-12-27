import React, { useState } from 'react';

const Game = () => {
  const [listWithItems, setListWithItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [emptyList, setEmptyList] = useState([]);

  const moveItem = (item, sourceList, destinationList, setSourceList, setDestinationList) => {
    const updatedSourceList = sourceList.filter((i) => i !== item);
    const updatedDestinationList = [...destinationList, item];

    setSourceList(updatedSourceList);
    setDestinationList(updatedDestinationList);
  };

  return (
    <div>
      <div>
        <h2>List with Items</h2>
        <ul>
          {listWithItems.map((item) => (
            <li key={item} onClick={() => moveItem(item, listWithItems, emptyList, setListWithItems, setEmptyList)}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Empty List</h2>
        <ul>
          {emptyList.map((item) => (
            <li
              key={item}
              onClick={() => moveItem(item, emptyList, listWithItems, setEmptyList, setListWithItems)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
