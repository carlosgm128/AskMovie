import React, { Component } from 'react'

class Credits extends Component{
    render(){
        return (
            <div className="credits">
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <div className="image is-64x64">
                                <img 
                                    src="   https://pbs.twimg.com/profile_images/378800000695355359/1ee75af1352028174d68fc62c7157abd_400x400.jpeg" 
                                    alt="LogoImg"
                                />
                            </div>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>Carlos Garcia</strong>
                                 <small>
                                    <a
                                        href="https://twitter.com/ItsCan_XD" 
                                        target="_blank"
                                        rel="noopener noreferrer">
                                            @ItsCan_XD
                                    </a>
                                </small>
                            <br />
                                    This web site was made with 
                                    <a  
                                        rel="noopener noreferrer"
                                        href="https://www.omdbapi.com/"
                                        target="_blank">
                                                OMDb API
                                    </a> 
                                        check out the web site and styled with
                                    <a  
                                        rel="noopener noreferrer"
                                        href="https://bulma.io/"
                                        target="_blank"> Bulma 
                                    </a>
                                    thanks to all of you for providing beatifull tools
                            </p>
                        </div>
                            <nav className="level is-mobile">
                                <div className="level-left">
                                <a href="/" className="level-item" aria-label="reply">
                                    <span className="icon is-small">
                                    <i className="fas fa-reply" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a href="/" className="level-item" aria-label="retweet">
                                    <span className="icon is-small">
                                    <i className="fas fa-retweet" aria-hidden="true"></i>
                                    </span>
                                </a>
                                <a href="/" className="level-item" aria-label="like">
                                    <span className="icon is-small" >
                                    <i className="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                                </div>
                            </nav>
                        </div>
                    </article>
                    </div>
                </div>
        )
    }
}

export default Credits