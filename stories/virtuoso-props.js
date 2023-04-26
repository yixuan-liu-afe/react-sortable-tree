import React, { Component } from 'react'
import SortableTree from '../src'
// In your own app, you would need to use import styles once in the app
// import 'react-sortable-tree/styles.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.virtuosoRef = React.createRef()

    this.state = {
      isScrolling: false,
      scrollTop: 0,
      treeData: [
        {
          title: 'Chicken',
          expanded: true,
          children: [
            { title: 'Egg' },
            { title: 'Egg' },
            { title: 'Egg' },
            { title: 'Egg' },
            { title: 'Egg' },
            { title: 'Egg' },
            { title: 'Egg' },
          ],
        },
      ],
    }
  }

  isScrolling = scrollingState => {
    if (this.virtuosoRef?.current) {
      this.virtuosoRef?.current.getState(virtuosoState => {
        this.setState(prevState => ({
          ...prevState,
          ...{
            isScrolling: scrollingState,
            scrollTop: virtuosoState.scrollTop,
          },
        }))
      })
    }
  }

  render() {
    return (
      <div>
        <div style={{ height: 300 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            virtuosoRef={this.virtuosoRef}
            virtuosoProps={{ isScrolling: this.isScrolling }}
          />
        </div>
        <hr />
        Current scrollTop:{' '}
        {this.state.isScrolling ? '...' : this.state.scrollTop}
      </div>
    )
  }
}
