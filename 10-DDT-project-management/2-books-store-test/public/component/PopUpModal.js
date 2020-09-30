import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class PopUpModal extends React.Component {
    
    toggle = () => {
        this.props.close()
    }
    
  render() {
      const {className, title, children} = this.props
    return (
      <Modal isOpen={this.props.show} toggle={this.toggle}  >
        <ModalHeader toggle={this.toggle} className={className}>{title}</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default PopUpModal