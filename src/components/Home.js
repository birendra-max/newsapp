import React, { Component } from 'react';
import TopHeadlines from './TopHeadlines';
import YesterdayNews from './YesterdayNews';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <TopHeadlines />
          <YesterdayNews />
        </div>
      </>
    )
  }
}
