import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loader: false,
            page: 1,
            pageSize: 20,
            totPageSize: 0,
            totalResults: 0
        }
    }

    async componentDidMount() {
        let date = new Date();
        let formateTodDate = date.toISOString().split('T')[0];
        let today = new Date();
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let formattedYesDate = yesterday.toISOString().split('T')[0];
        let url = `https://newsapi.org/v2/everything?q=apple&from=${formateTodDate}&to=${formattedYesDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page}&pageSize=${this.state.pageSize}`;

        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ totalResults: parseData.totalResults, articles: parseData.articles, loader: true });
    }

    handleChnagePageNext = async () => {
        let date = new Date();
        let formateTodDate = date.toISOString().split('T')[0];
        let today = new Date();
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let formattedYesDate = yesterday.toISOString().split('T')[0];
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page + 1}`;
        let url = `https://newsapi.org/v2/everything?q=apple&from=${formateTodDate}&to=${formattedYesDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ totPageSize: this.state.totPageSize + 20, page: this.state.page + 1, articles: parseData.articles, loader: true });
    }

    handleChnagePagePrevious = async () => {
        let date = new Date();
        let formateTodDate = date.toISOString().split('T')[0];
        let today = new Date();
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let formattedYesDate = yesterday.toISOString().split('T')[0];
        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page - 1}`;
        let url = `https://newsapi.org/v2/everything?q=apple&from=${formateTodDate}&to=${formattedYesDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ totalResults: this.state.totPageSize - 20, page: this.state.page - 1, articles: parseData.articles, loader: true });
    }
    render() {
        return (
            <>
                <div className='row'>
                    {
                        this.state.articles.map((articles) => {
                            if ((articles.title != null && articles.title != '[Removed]') && (articles.description != null && articles.description != '[Removed]')) {
                                return <div className='col-md-3 col-sm-2 my-3'>
                                    <NewsItem source={articles.source} author={articles.author} title={articles.title} description={articles.description} url={articles.url} urlToImage={articles.urlToImage} publishedAt={articles.publishedAt} content={articles.content} />
                                </div>
                            }
                        }
                        )
                    }
                    <div className='container shadow-lg border d-flex justify-content-between align-item-center py-3'>
                        <button disabled={this.state.page <= 1} className='btn btn-success' onClick={this.handleChnagePagePrevious}> &laquo; Previous</button>
                        <button disabled={this.state.totPageSize >= this.state.totalResults} className='btn btn-success' onClick={this.handleChnagePageNext}>Next &raquo;</button>
                    </div>
                </div>

            </>
        )
    }
}
