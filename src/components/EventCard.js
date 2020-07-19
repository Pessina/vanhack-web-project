import React from 'react';
import {
  Card, Icon,
} from 'semantic-ui-react';

import ModalEvent from './ModalEvent';
import { eventColor, eventIcon } from '../utils/utils';

const EventCard = ({ event }) => (
  <Card
    key={event.id}
    meta={event.date}
    fluid
    color={eventColor(event.type)}
    header={(
      <div className="center">
        <h2>{event.name}</h2>
        <Icon name={eventIcon(event.type)} color={eventColor(event.type)} />
      </div>
      )}
    description={event.description}
    extra={(
      <div className="center" style={{ alignItems: 'center' }}>
        {event.type}
        <ModalEvent event={event} />
      </div>
      )}
  />
);

export default EventCard;
