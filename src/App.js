import React from 'react';
import {
  Container, Card, Input, Icon, Button, Menu,
} from 'semantic-ui-react';

import { events, eventType, logo } from './utils/constants';
import {
  eventColor, eventIcon, filterEvents, getNameFromUrl,
} from './utils/utils';
import EventCard from './components/EventCard';
import './index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeSelector: ['all'],
      textSearch: '',
    };
    this.handleButtonSelector = this.handleButtonSelector.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
  }

  componentDidMount() {
    const query = window.location.search.split('=');
    if (query.length === 2) {
      this.setState(() => ({
        textSearch: getNameFromUrl(query[1]),
      }));
    }
  }

  handleButtonSelector(e, type) {
    const { typeSelector } = this.state;
    const el = e.target.closest('button');

    if (el.id !== 'button-all') {
      const btnAll = document.getElementById('button-all');
      btnAll.classList.add('basic');
      this.setState((prevState) => ({
        typeSelector: prevState.typeSelector.filter((temp) => temp !== 'all'),
      }));
    }

    if (typeSelector.includes(type)) {
      el.classList.add('basic');
    } else {
      el.classList.remove('basic');
    }

    this.setState((prevState) => {
      if (prevState.typeSelector.includes(type)) {
        return {
          typeSelector: prevState.typeSelector.filter((temp) => temp !== type),
        };
      }
      return {
        typeSelector: prevState.typeSelector.concat(type),
      };
    });
  }

  handleInputSearch({ target }) {
    this.setState(() => ({
      textSearch: target.value,
    }));
  }

  render() {
    const { textSearch, typeSelector } = this.state;
    return (
      <div>
        <Menu borderless fixed="top">
          <Menu.Item position="left" />
          <img
            src={logo}
            alt="Logo"
            className="sc-EHOje fNDaPb"
          />
          <Menu.Item position="right" />
        </Menu>
        <h1 style={{ textAlign: 'center', marginTop: '72px' }}>Vanhack Events</h1>
        <Container text className="App">
          <Input
            className="search-bar"
            placeholder="Search ..."
            fluid
            value={textSearch}
            onChange={this.handleInputSearch}
          />
          <div className="spacement">
            <Button
              id="button-all"
              onClick={(e) => this.handleButtonSelector(e, 'all')}
              color="blue"
            >
              All
            </Button>
            {Object.keys(eventType).map((key) => (
              <Button
                key={key}
                basic
                onClick={(e) => this.handleButtonSelector(e, eventType[key])}
                color={eventColor(eventType[key])}
              >
                <Icon name={eventIcon(eventType[key])} />
                {eventType[key]}
              </Button>
            )) }
          </div>
          <Card.Group>
            {events.map((event) => (
              <>
                { filterEvents(event, textSearch, typeSelector) && <EventCard event={event} /> }
              </>
            ))}
          </Card.Group>
        </Container>
      </div>
    );
  }
}
