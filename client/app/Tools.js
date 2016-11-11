import React from 'react';
import Collapse from 'react-collapse';

const styles = {
  container: {
  },
  collapsedDescription: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // display: 'block',
  },
};

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
      <div style={{...styles.container, ...styles.collapsedDescription}}>
        {tools.map((tool, index) => {
          return (
            <div key={index} style={styles.collapsedDescription}>
              {tool.title} - {tool.description}
              <Collapse key={index} isOpened={true}>
              </Collapse>
            </div>
          );
        })}
      </div>
    );
  }
}
