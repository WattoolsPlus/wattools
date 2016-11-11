import React from 'react';
import Collapse from 'react-collapse';

import './css/Tools.css';

export default class Tools extends React.Component {
  render() {
    const tools = [
      {
        title: 'UWaterloo Subreddit',
        description: 'A subreddit for the UWaterloo community.',
      },
      {
        title: 'Waterloo GPS',
        description: 'Android app which finds the shortest path between two floors in two buildings on campus that does not go outside. aaaaa aaaaaaa aaaaaaaaa ',
      },
    ];

    return (
      <div className='tools-collapsed-description'>
        {
          tools.map((tool, index) => (
            <div key={index} className='collapsedDescription'>
              {tool.title} - {tool.description}
              <Collapse key={index} isOpened={true}>
              </Collapse>
            </div>
          ))
        }
      </div>
    );
  }
}
