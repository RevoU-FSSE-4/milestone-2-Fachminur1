import React from 'react';
import { NewsArticle } from '../items/items';

interface NewsProps {
    item: NewsArticle;
}

const News: React.FC<NewsProps> = ({ item }) => {
    const websiteUrl = item.url;
    const match = websiteUrl.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img);
    const website = match ? match[0] : "";

    const date = item.publishedAt;
    const formatDate = date.replace('T', ' ');
    const formatTime = formatDate.replace('Z', '');

    return (
        <a href={websiteUrl} className="article">
            <div className="article-image">
                <img src="default-image-url" alt="" />
            </div>
            <div className="article-content">
                <div className="article-source">
                    <img src="default-source-image-url" alt="" />
                    <span>{website}</span>
                </div>
                <div className="article-title">
                    <h2>{item.title}</h2>
                </div>
                <p className="article-description">
                    {/* Description Here */}
                </p>
                <div className="article-details">
                    <small><b>Published At: </b>{formatTime}</small>
                </div>
            </div>
        </a>
    );
}

export default News;
