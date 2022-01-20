import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import "./News.css";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import axios from "axios";
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const updateNews = async () => {
        props.setProgress(10);
        const { data } = await axios.get(
            `https://inshorts-news-api-8vpo9a88a.vercel.app/news?category=business`
        );
        props.setProgress(50);
        setArticles(data.data);
        props.setProgress(70);
        setLoading(false);
        props.setProgress(100);
    };
    useEffect(() => {
        window.scroll(0, 0);
        updateNews();
    }, []);



    return (
        <Typography paragraph>
            <h1 className="heading news text-center">
                Market News <i className="far fa-newspaper"></i>
            </h1>
            {loading && <Spinner />}
            <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title : ""}
                                    description={element.content ? element.content : ""}
                                    imageUrl={element.imageUrl}
                                    newsUrl={element.readMoreUrl}
                                    author={element.author}
                                    date={element.date}
                                    time={element.time}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Typography>
    );
};

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "business",
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;