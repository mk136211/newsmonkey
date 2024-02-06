import React from 'react'
const NewsItem =(props)=> {
 
    let {title , description,urlToImage,url,author,date,source}=props; 
    return (
      <div>
          <div className="card">
            <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:0}}>
          <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
  <img src={!urlToImage?"https:assets.bwbx.io/images/users/iqjWHBFdfxIU/icH_KSFEisKE/v1/1200x800.jpg":urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5> 
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
}

export default NewsItem
