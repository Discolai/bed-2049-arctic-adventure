import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header';
import Footer from '../footer';

import Container from 'react-bootstrap/Container';
import BlogPreview from './blogPreview';

import blog2_aurora from "../../img/blog2_aurora.jpg"

class Blog extends React.Component {
  render () {
    return (
      <div className="bg-light">
        <div className="bg-white">
          <Header></Header>
        </div>
        <Container>
          <h1 className="my-4">Blog</h1>
          <div className="blog-preview-wrapper">
            <BlogPreview
              image={blog2_aurora}
              title="Travelers guide to the aurora"
              href="/blog/travelers_guide_to_the_aurora"
              text={`
                What are polar lights? This green sometimes purple glow that
                trails over the skies, it almost looks like magic. It is
                actually the sun that is behind this lightshow. Every time
                a solar flair occurs it slingshot charged particles out in
                space around it with almost the speed of light. When this
                flair is directed
              `}
              author="Kevin Jenssen"
              date="March 20, 2020"
              />
            <BlogPreview
              title="The Norwegian way"
              href="/blog/the_norwegian_way"
              text={`
                The aurora dancing over the night sky is one of the most amazing
                things you can experience in Tromsø during the winter season.
                It can be experienced throughout most of Tromsø, but you get
                the best experience out in the wilderness where you are not
                disturbed by street lights etc. Combine this with dog sledding
                `}
              author="Kevin Jenssen"
              date="March 11, 2020"
              />
          </div>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}

export default Blog;
