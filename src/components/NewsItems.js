import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, url, author, date,source } = this.props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zindex: '1', left:"81%"}}>
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text "><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
} 
