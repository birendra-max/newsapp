import React, { Component } from 'react';
import '../App.css';

export default class NewsItem extends Component {
    render() {
        let { key, source, author, title, description, url, urlToImage, publishedAt, content, newnews } = this.props;
        let date = new Date(publishedAt);
        let formatePubDate = date.toISOString().split('T')[0];
        let today = new Date();
        let yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        let formattedDate = yesterday.toISOString().split('T')[0];

        return (
            <>
                <a href={url} className="d-flex justify-content-center align-items-center bg-gradient text-decoration-none" style={{ background: "linear-gradient(to bottom right, #e~9d5ff, #c3dafe)", height: "70vh" }}>
                    <div className="card shadow-lg overflow-hidden transform transition duration-500 hover:scale-105" style={{ maxWidth: "100%", height: "100%" }}>
                        <div className="position-relative">
                            <img className="card-img-top" src={urlToImage || 'https://focusnews24x7.com/wp-content/uploads/2022/08/123-white.png'} alt="Nature scene" style={{ height: "30vh" }} />
                            <div className="position-absolute top-0 end-0 bg-teal fw-bold px-2 py-1 m-2 rounded text-sm font-weight-bold text-danger">
                                {formatePubDate === formattedDate ? 'New' : ''}
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title mb-2 text-dark h5">{title ? title.replace(/\s+/g, ' ').slice(0, 50) + "..." : "Not Found"}</h2>
                            <p className="card-text text-muted mb-4">{description ? description.replace(/\s+/g, ' ').slice(0, 50) + '...' : 'Not Found'}</p>
                            <div className="d-flex align-items-center mb-4">
                                <svg className="bi bi-star-fill text-warning me-1" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.392.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.077-4.304c.197-.41.73-.41.927 0l2.077 4.304 4.898.696c.441.063.612.63.283.95l-3.524 3.356.83 4.73c.078.443-.354.79-.746.592l-4.222-2.211-4.222 2.211z" />
                                </svg>
                                <span className="text-muted ms-1">4.9 (128 reviews)</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="h6 text-dark">{formatePubDate}</span>
                                <button className="btn btn-success text-white font-weight-bold rounded-pill shadow-sm" type="button" style={{ float: "right" }}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        );
    }
}
