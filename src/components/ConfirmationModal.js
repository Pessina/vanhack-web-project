import React from 'react';
import {
  Modal, Button,
} from 'semantic-ui-react';
import { eventType } from '../utils/constants';

export default class ConfirmationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleModalOpen() {
    this.setState(() => ({ open: true }));
  }

  handleModalClose() {
    this.setState(() => ({ open: false }));
  }

  render() {
    const { open } = this.state;
    const { event } = this.props;
    return (
      <Modal
        style={{ width: '300px' }}
        open={open}
        onClose={this.handleModalClose}
        trigger={(
          <Button color="green" onClick={this.handleModalOpen}>Apply</Button>
    )}
      >
        {event.type !== eventType.premiumWebinar
       && (
       <>
         <Modal.Header>Thanks</Modal.Header>
         <Modal.Content>
           <p>
             Your application for the event
             {' '}
             <b>{event.name}</b>
             {' '}
             was successful. You can check our website to more information about us
             .
             {' '}
             <a href="https://vanhack.com/">vanhack.com</a>
           </p>
           <Button color="blue" onClick={this.handleModalClose}>Ok</Button>
         </Modal.Content>
       </>
       )}
        {event.type === eventType.premiumWebinar
       && (
       <>
         <Modal.Header>This is a premium event</Modal.Header>
         <Modal.Content>
           <p>
             Sorry, this event is just for VanHack premium members. If you wanna know more about our premium plans check
             {' '}
             <a href="https://vanhack.com/premium">Premium plans</a>
           </p>
           <Button href="https://vanhack.com/premium" color="green">Check Plans</Button>
           <Button onClick={this.handleModalClose} color="red">Ok</Button>
         </Modal.Content>
       </>
       )}
      </Modal>
    );
  }
}
