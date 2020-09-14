import React, {useState, useEffect} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {set} from 'mongoose';

const MyModal = (props) => {
  const {className, message, modalTitle} = props;
  // let message = props.message let className = props.calssNAme

  console.log(message != null);
  const [modal,
    setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    setModal(message != null)
  }, [message])

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className={className} toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>
          {message}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MyModal;