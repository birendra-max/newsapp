import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <h1 className='text-dark fs-2 fw-bold my-3 border-bottom border-warning border-5'>Latest News</h1>
          <NewsComponent/>
        </div>
        <Footer />
      </>
    )
  }
}
