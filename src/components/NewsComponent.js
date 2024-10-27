import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { json } from 'react-router-dom';

export default class NewsComponent extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let today = new Date();
        let todaydate = today.toISOString().split('T')[0]
        let yesterdaydate = new Date(today);
        yesterdaydate.setDate(today.getDate() - 1);
        let formattedDate = yesterdaydate.toISOString().split('T')[0];
        let url = `https://newsapi.org/v2/everything?q=apple&from=${formattedDate}&to=${todaydate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5`
        const resp = await fetch(url);
        const jsonData = await resp.json();
        this.setState({ articles: jsonData.articles });
    }

    render() {
        return (
            <>
                <div className='row'>
                    {
                        this.state.articles.map((elements) => {
                            return <div className='col-md-3 col-sm-2 my-3'>
                                <NewsItem source={elements.source} author={elements.author} title={elements.title} description={elements.description} url={elements.url} urlToImage={elements.urlToImage} publishedAt={elements.publishedAt} content={elements.content} newnews={"yes"} />
                            </div>
                        }
                        )
                    }
                </div>
            </>
        )
    }
}
