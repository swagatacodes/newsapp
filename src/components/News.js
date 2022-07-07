import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8
      }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    
    constructor(props) {
        super();
        this.state = {
            articles: [],
            page:1,
            loading: false
        }

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=20d639c63ad24a2bb8fda0b85093a528&page=1&pageSize=${this.props.pageSize}`;
        console.log("url",url)
        this.setState({loading:true})
        let data = await fetch(url);
        let jsonData = await data.json();
        console.log(jsonData);
        this.setState({ articles: jsonData.articles, totalresult: jsonData.totalResults, loading: false })
    };
    
    previouspage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=20d639c63ad24a2bb8fda0b85093a528&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        console.log("previous page button clicked")
        this.setState({loading:true})
        let data = await fetch(url);
        let jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            page: this.state.page - 1,
            articles: jsonData.articles,
            loading: false
        })
        console.log("current page is ",this.state.page);
    }

    nextpage = async () => {
        if(this.state.page < (Math.ceil(this.state.totalresult/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=20d639c63ad24a2bb8fda0b85093a528&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            page: this.state.page + 1,
            articles: jsonData.articles,
            loading: false
        })
    }
    else{}
}

    render() {
        return (
            <div className='container my-3 text-center'>
                <h2 className="mb-3">News Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-3' key={element.url}>
                            <NewsItems url={element.url} title={element.title?element.title:""} description={element.description?element.description:""} 
                            imageUrl={element.urlToImage?element.urlToImage:"https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/kcci/5191270-5191270.jpg?crop=1.00xw:0.753xh;0,0&resize=1200:*"}
                            author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                {!this.state.loading?
                <div className="d-flex justify-content-between my-3">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previouspage}>&larr; Previous</button>
                <button disabled={this.state.page +1 > (Math.ceil(this.state.totalresult/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.nextpage}>Next &rarr;</button>
                </div>
                :''}
                
                
                
            </div>
        )
    }
}
