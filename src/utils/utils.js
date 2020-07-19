import { eventType } from './constants';

const eventColor = (type) => {
  switch (type) {
    case eventType.premiumWebinar:
      return 'yellow';
    case eventType.leap:
      return 'red';
    case eventType.recruitingMission:
      return 'purple';
    case eventType.vanHackathon:
      return 'blue';
    case eventType.meetup:
      return null;
    case eventType.openWebinar:
      return null;
    default:
      return null;
  }
};

const eventIcon = (type) => {
  switch (type) {
    case eventType.premiumWebinar:
      return 'desktop';
    case eventType.leap:
      return 'handshake';
    case eventType.recruitingMission:
      return 'address card outline';
    case eventType.vanHackathon:
      return 'code';
    case eventType.meetup:
      return 'users';
    case eventType.openWebinar:
      return 'desktop';
    default:
      return null;
  }
};

const filterEvents = (event, textSearch, typeSelector) => {
  const selectType = typeSelector.includes('all') ? true : typeSelector.includes(event.type);
  const selectText = textSearch === '' ? true : event.name.toLowerCase().includes(textSearch.toLowerCase());
  if (selectType && selectText) {
    return (
      true
    );
  }
  return false;
};

const parseNameToUrl = (name) => name.replace(/\s/g, '-');
const getNameFromUrl = (name) => name.replace(/-/g, ' ');

export {
  eventColor,
  eventIcon,
  filterEvents,
  parseNameToUrl,
  getNameFromUrl,
};
