import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import {Container, Row, Col} from 'react-bootstrap'

const GalleryFeatureGrid = ({ gridItems }) => (
  <Container fluid>
    <Row >
      {gridItems.map(item => (
        <Col key={item.text} xs="auto" md="auto" className="text-center">
          <div
            style={{
              width: '200px',
              //display: 'inline-block',
            }}
          >
            <h1>{item.heading}</h1>
            <PreviewCompatibleImage imageInfo={item} />
            <p>{item.text}</p>          
          </div>
        </Col>
      ))}
    </Row>
  </Container>
)

GalleryFeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default GalleryFeatureGrid
