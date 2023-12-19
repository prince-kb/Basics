import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title,desc,imgurl,url,date,author,source}=this.props;
    return (
      <div className='container my-2 position-relative'>
        <button type="button" className="btn btn-warning position-absolute" style={{zIndex : '1',right : '0%',padding : '0'}}>
          <span className="badge badge-light badge-pill">By {source}</span>
</button>
        <div className="card">
  <img src={imgurl? imgurl : "https://cdn.xxl.thumbs.canstockphoto.com/image-not-available-written-in-chalk-on-a-blackboard-stock-image_csp8317846.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" >

      {title}</h5>
    <p className="card-text">{desc}</p>
    <p className='card-text' ><small className='text-muted'>Last edited at {new Date(date).toGMTString()} by {author ? author : "Unknown"} </small></p>
    <a href={url} rel= 'noreferrer' target='_blank' className="btn btn-sm btn-info">Read More ...</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
