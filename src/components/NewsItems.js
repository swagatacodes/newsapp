import React from 'react'
const NewsItems = (props) => {
  let { title, description, imageUrl, url, author, date, source } = props;
  return (
    <div>
      <div className="card">
        <div className='container' style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: '0',
          position: "absolute"
        }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
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

export default NewsItems
