import React from 'react';
import {
  Menu, Grid, Modal, Button, Icon,
} from 'semantic-ui-react';

import ConfirmationModal from './ConfirmationModal';
import { eventColor, eventIcon, parseNameToUrl } from '../utils/utils';
import { eventType } from '../utils/constants';

export default class ModalEvent extends React.Component {
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
        open={open}
        onClose={this.handleModalClose}
        onOpen={this.handleModalOpen}
        closeOnDimmerClick
        closeOnDocumentClick
        trigger={(
          <Button
            color={event.type === eventType.premiumWebinar ? 'yellow' : 'blue'}
            color={eventColor(event.type) || 'black'}
          >
            More Details
          </Button>
  )}
      >
        <Modal.Header>
          <div className="container-edges">
            {event.name}
            <div className="container-text-icon">
              <h3 style={{ marginRight: '12px' }}>{event.type}</h3>
              <Icon name={eventIcon(event.type)} color={eventColor(event.type)} />
            </div>
          </div>
        </Modal.Header>
        <Modal.Content>
          <Grid stackable style={{ padding: '12px' }} textAlign="center">
            <Grid.Row columns={3}>
              <Grid.Column>
                <Icon name="calendar" />
                Date:
                {' '}
                {event.date}
              </Grid.Column>
              <Grid.Column>
                <Icon name="map" />
                Location:
                {' '}
                {event.location}
              </Grid.Column>
              <Grid.Column>
                <Icon name="clock" />
                Duration:
                {' '}
                {event.duration}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="divider" />
          <Button
            color="blue"
            icon="linkedin"
            target="_blank"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}?event=${parseNameToUrl(event.name)}`}
          />
          <div style={{ marginBottom: '72px', marginTop: '12px' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum odio orci, sed aliquam nisi varius sed. Phasellus maximus risus neque, eget pretium mi cursus sit amet. Morbi cursus purus vitae ultricies dictum. Sed quis eros tempor, sodales dui quis, egestas massa. Phasellus congue vulputate magna. Aenean neque arcu, efficitur sit amet ornare nec, aliquet eget sapien. Curabitur id augue metus. Duis a dolor odio. Nullam in feugiat purus. Sed viverra pulvinar porta. Donec facilisis, urna id molestie iaculis, est felis auctor ante, non suscipit diam lectus et purus. Aenean eleifend risus magna, vel maximus orci varius sed.
            </p>
            <p>
              Cras vitae dictum nisi. Nullam sapien orci, malesuada eget varius at, blandit sed ipsum. Fusce ut dolor maximus elit gravida suscipit. Aenean fringilla pharetra enim at pharetra. Morbi eleifend mollis neque, ut fringilla eros luctus id. Sed laoreet egestas dapibus. Aliquam lobortis lacus elit, quis ullamcorper ipsum tincidunt ut. Phasellus ut sollicitudin justo. Vestibulum eu mauris in dolor venenatis finibus in nec mi. Donec hendrerit massa sit amet leo scelerisque pharetra. Curabitur vehicula nisl magna, ac luctus purus rhoncus eget.
            </p>
            <p>
              Etiam sed neque sit amet ex pulvinar viverra. Integer leo turpis, ullamcorper quis purus hendrerit, placerat facilisis turpis. Vestibulum eget ligula eget justo euismod fringilla. In id justo aliquam tellus ullamcorper consequat sit amet a sem. Suspendisse potenti. Maecenas quis diam porttitor, iaculis nulla at, egestas lectus. In eu libero metus. Pellentesque ut dapibus metus. Aliquam et egestas risus. Integer sed ante pellentesque, bibendum urna vitae, dignissim leo. Vestibulum eros velit, euismod sit amet lacus vel, auctor interdum erat. Fusce imperdiet justo massa, in convallis mi fermentum et. Fusce ut tellus aliquet diam dignissim fringilla sit amet ac sem. Proin non sem eget arcu ultrices ornare sed sed purus. Donec vel nisl lacinia, efficitur ante ac, pellentesque sem.
            </p>
          </div>
          <Menu borderless fixed="bottom">
            <Menu.Item position="left" />
            <Menu.Item>
              <ConfirmationModal event={event} />
            </Menu.Item>
            <Menu.Item>
              <Button onClick={this.handleModalClose} color="red">Close</Button>
            </Menu.Item>
          </Menu>
        </Modal.Content>
      </Modal>
    );
  }
}
