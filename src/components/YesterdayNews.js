import React, { Component } from "react";
import NewsItem from './NewsItem';
import Loader from "./Loader";

export default class YesterdayNews extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loader: false,
            page: 1,
            pageSize: 20,
            status: false
        };
    }

    async componentDidMount() {
        let today = new Date();
        let formateTodayDate = today.toISOString().split('T')[0];
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let formatYestdDate = yesterday.toISOString().split('T')[0];
        let url = `https://newsapi.org/v2/everything?q=apple&from=${formatYestdDate}&to=${formateTodayDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        this.setState({ loader: true });
        let yesData = await fetch(url);
        let parseYesData = await yesData.json();
        this.setState({ articles: (parseYesData.articles) ? parseYesData.articles : [], totalResults: parseYesData.totalResults, loader: false, status: parseYesData.status });
    }

    handleChnagePageNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize) && this.state.totalResults >= 100)) {
            let today = new Date();
            let formateTodayDate = today.toISOString().split('T')[0];
            let yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            let formatYestdDate = yesterday.toISOString().split('T')[0];
            let url = `https://newsapi.org/v2/everything?q=apple&from=${formatYestdDate}&to=${formateTodayDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            this.setState({ loader: true })
            let yesData = await fetch(url);
            let parseYesData = await yesData.json();
            this.setState({
                page: this.state.page + 1,
                articles: (parseYesData.articles) ? parseYesData.articles : [],
                loader: false,
                status: parseYesData.status
            });
        }
    }

    handleChnagePagePrevious = async () => {
        let today = new Date();
        let formateTodayDate = today.toISOString().split('T')[0];
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let formatYestdDate = yesterday.toISOString().split('T')[0];
        let url = `https://newsapi.org/v2/everything?q=apple&from=${formatYestdDate}&to=${formateTodayDate}&sortBy=popularity&apiKey=9553338b85234fcd96160d02645268e5&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        this.setState({ loader: true })
        let yesData = await fetch(url);
        let parseYesData = await yesData.json();
        this.setState({
            page: this.state.page - 1,
            articles: (parseYesData.articles) ? parseYesData.articles : [],
            loader: false,
            status: parseYesData.status
        });
    }

    render() {
        return (
            <>
                <div className="row shadow-lg" style={{ marginTop: "10%" }}>
                    <h1 className="text-dark fs-2 my-3 fw-bold border-5 border-bottom border-warning">Yesterday News</h1>

                    {
                        (this.state.articles && this.state.articles.length > 0) ?
                            this.state.loader ? (
                                <div className='container d-flex justify-content-center align-items-center'><Loader /></div>
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
                            ) : <h1 className='text-danger fs-5 text-center fw-bold'>No News Found</h1>
                    }
                    <div className='container d-flex justify-content-between align-items-center py-3'>
                        <button disabled={this.state.page <= 1} className='btn btn-success' onClick={this.handleChnagePagePrevious}> &laquo; Previous</button>
                        <button className='btn btn-success' id='next' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize) && this.state.totalResults >= 100} onClick={this.handleChnagePageNext}>Next &raquo;</button>
                    </div>
                </div>
            </>
        );
    }
}
