import React, { Component } from "react";
import NewsItem from './NewsItem'

export default class YesterdayNews extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loder: false,
            page: 1,
            pageSize: 50,

        }
    }

    async componentDidMount() {
        let today = new Date();
        let formateTodayDate = today.toISOString().split('T')[0];
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let formatYestdDate = yesterday.toISOString().split('T')[0];
        let url = `https://newsapi.org/v2/everything?q=apple&from=${formatYestdDate}&to=${formateTodayDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let yesData = await fetch(url);
        let parseYesData = await yesData.json();
        this.setState({ articles: parseYesData.articles, loder: true, totalResults: parseYesData.totalResults});
        console.log(url)
    }

    handleChnagePageNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {
            this.setState({ disabled: true });
        }
        else {
            let today = new Date();
            let formateTodayDate = today.toISOString().split('T')[0];
            let yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            let formatYestdDate = yesterday.toISOString().split('T')[0];
            let url = `https://newsapi.org/v2/everything?q=apple&from=${formatYestdDate}&to=${formateTodayDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            let yesData = await fetch(url);
            let parseYesData = await yesData.json();
            this.setState({
                page: this.state.page + 1,
                articles: parseYesData.articles,
                loader: true
            })
        }
    }

    handleChnagePagePrevious = async () => {
        let today = new Date();
        let formateTodayDate = today.toISOString().split('T')[0];
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let formatYestdDate = yesterday.toISOString().split('T')[0];
        let url = `https://newsapi.org/v2/everything?q=apple&from=${formatYestdDate}&to=${formateTodayDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        let yesData = await fetch(url);
        let parseYesData = await yesData.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseYesData.articles,
            loader: true
        })
    }

    render() {
        return (
            <>
                <div className="row shadow-lg" style={{ marginTop: "10%" }}>
                    <h1 className="text-dark fs-2 my-3 fw-bold border-5 border-bottom border-warning">Yesterday News</h1>
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
                    <div className='container d-flex justify-content-between align-item-center py-3'>
                        <button disabled={this.state.page <= 1} className='btn btn-success' onClick={this.handleChnagePagePrevious}> &laquo; Previous</button>
                        <button className='btn btn-success' id='next' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} onClick={this.handleChnagePageNext}>Next &raquo;</button>
                    </div>
                </div>
            </>
        )
    }
}