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
            disabled:false,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, loader: true, totalResults: parseData.totalResults });
    }

    handleChnagePageNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {
            this.setState({disabled:true});
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loader: true
            })
        }
    }

    handleChnagePagePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loader: true
        })
    }
    render() {
        return (
            <>
                <div className='row'>
                    {
                        this.state.articles.map((articles) => {
                            if ((articles.title != null && articles.title != '[Removed]') && (articles.description != null && articles.description != '[Removed]')) {
                                return <div className='col-md-3 col-sm-2 my-3' key={articles.url}>
                                    <NewsItem source={articles.source} author={articles.author} title={articles.title} description={articles.description} url={articles.url} urlToImage={articles.urlToImage} publishedAt={articles.publishedAt} content={articles.content} />
                                </div>
                            }
                        }
                        )
                    }
                    <div className='container shadow-lg border d-flex justify-content-between align-item-center py-3'>
                        <button disabled={this.state.page <= 1} className='btn btn-success' onClick={this.handleChnagePagePrevious}> &laquo; Previous</button>
                        <button className='btn btn-success' id='next' disabled={this.state.disabled==true} onClick={this.handleChnagePageNext}>Next &raquo;</button>
                    </div>
                </div>

            </>
        )
    }
}
