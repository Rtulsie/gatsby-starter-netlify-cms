import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import {Container, Row, Col, Modal} from 'react-bootstrap'

const FeatureGrid = ({ gridItems }) => (
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
              <Modal.Dialog>
                  <Modal.Header>
                    <Modal.Title>{item.heading}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <PreviewCompatibleImage imageInfo={item} />
                    <p>{item.text}</p>
                  </Modal.Body>
              </Modal.Dialog>
          </div>
          
        </Col>
      ))}
    </Row>
  </Container>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
