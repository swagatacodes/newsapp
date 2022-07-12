import React from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Spinner2 from './Spinner2';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalize_first_letter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        console.log("url:", url)
        let data = await fetch(url);
        props.setProgress(30)
        let jsonData = await data.json();
        props.setProgress(70)
        console.log(jsonData);
        setArticles(jsonData.articles)
        setTotalResults(jsonData.totalResults)
        setLoading(false)
        props.setProgress(100)

    }
    useEffect(() => {
        document.title = `${capitalize_first_letter(props.category)} - NewsMonkey`
        updateNews()
    }, [])


    /* const previouspage = async () => {
        setPage(page - 1);
        updateNews()
    }

    const nextpage = async () => {
        setPage(page + 1);
        updateNews()
    } */

    const fetchMoreNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let jsonData = await data.json();
        setArticles(articles.concat(jsonData.articles))
        setTotalResults(jsonData.totalResults)
    }

    return (
        <div className='container my-3 text-center'>
            <h2 className='mb-4' style={{marginTop:"80px"}}>News Headlines from {props.category}</h2>
            {loading && <Spinner />}

            <div className='container'>
                <div className='row'>
                    {!loading && articles.map((element) => {
                        return <div className='col-md-3' key={element.url}>
                            <NewsItems url={element.url} title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                imageUrl={element.urlToImage ? element.urlToImage : "https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/kcci/5191270-5191270.jpg?crop=1.00xw:0.753xh;0,0&resize=1200:*"}
                                author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <InfiniteScroll
                
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchMoreNews}
                    hasMore={articles.length < totalResults}
                    loader={<Spinner2 />} />

            </div>


            {/* {!loading ?
                    <div className="d-flex justify-content-between my-3">
                        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={previouspage}>&larr; Previous</button>
                        <button disabled={page + 1 > (Math.ceil(totalResults / props.pageSize))} type="button" className="btn btn-dark" onClick={nextpage}>Next &rarr;</button>
                    </div>
                    : ''} */}



        </div>
    )


}

News.defaultpropTypes = {
    country: 'in',
    category: 'General',
    pageSize: 8
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    apikey: PropTypes.string
}

export default News