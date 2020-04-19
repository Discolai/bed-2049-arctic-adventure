import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'



class BlogPreview extends React.Component {
  render () {
    const {image, title, text, href, author, date} = this.props;

    return (
      <div className="blog-preview d-flex flex-column">
        <img src={image}></img>
        <Link to={href}>
          <h2 className="my-2">{title}</h2>
        </Link>
        <p>{text}</p>
        <Link to={href}>
          Read more <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
        </Link>
        <small>{author} {date}</small>
      </div>
    );
  }
}

export default BlogPreview;
