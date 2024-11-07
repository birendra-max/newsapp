import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';

export default class NewsComponent extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loader: false,
            page: 1,
            pageSize: 10,
            disabled: false,
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({ loader: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loader: false });
    }

    handleChnagePageNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            this.setState({ loader: true });
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loader: false
            });
        }
    }

    handleChnagePagePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        this.setState({ loader: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loader: false
        });
    }

    render() {
        return (
            <>
                <div className='row shadow-lg mt-4 '>
                    <h1 className='text-dark fs-2 fw-bold my-3 border-bottom border-warning border-5'>Top Headlines</h1>
                    {this.state.loader ? (
                        <div className='container d-flex justify-content-center align-items-center'>
                            <Loader />
                        </div>
                    ) : (
                        this.state.articles.map((article) => {
                            if (
                                article.title && article.title !== '[Removed]' &&
                                article.description && article.description !== '[Removed]'
                            ) {
                                return (
                                    <div className='col-md-3 col-sm-2 my-3' key={article.url}>
                                        <NewsItem
                                            source={article.source}
                                            author={article.author}
                                            title={article.title}
                                            description={article.description}
                                            url={article.url}
                                            urlToImage={article.urlToImage}
                                            publishedAt={article.publishedAt}
                                            content={article.content}
                                        />
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })
                    )}
                    <div className='container d-flex justify-content-between align-items-center py-3'>
                        <button disabled={this.state.page <= 1} className='btn btn-success' onClick={this.handleChnagePagePrevious}> &laquo; Previous</button>
                        <button className='btn btn-success' id='next' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} onClick={this.handleChnagePageNext}>Next &raquo;</button>
                    </div>
                </div>
            </>
        );
    }
}
