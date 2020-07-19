const eventType = {
  premiumWebinar: 'Premiun-only Webinar',
  leap: 'Leap',
  recruitingMission: 'Recruiting Mission',
  vanHackathon: 'VanHackathon',
  meetup: 'Meetup',
  openWebinar: 'Open Webinar',
};

const events = [
  {
    id: 17,
    name: 'Hack 17',
    date: '10/04/2020',
    duration: '24h',
    location: 'VanHack Office',
    description: 'On this hackathon you will work on solutions to track the covid-19 outbreak spread',
    type: eventType.vanHackathon,
  },
  {
    id: 1,
    name: 'React with Node',
    date: '02/03/2020',
    duration: '2h',
    location: 'Avenida Albert Eistein, 1404',
    description: 'The event will be for all kind of developers that are interested on React and Node development, from beginners to adavanced developer',
    type: eventType.meetup,
  },
  {
    id: 2,
    name: 'Future of Web Development',
    date: '10/07/2020',
    duration: '1h',
    location: 'Online',
    description: 'On this webinar we invited 3 senior webdevelpers to talk about the future of webdevelopment',
    type: eventType.premiumWebinar,
  },
  {
    id: 3,
    name: 'Hack Covid-19',
    date: '10/04/2020',
    duration: '24h',
    location: 'VanHack Office',
    description: 'On this hackathon you will work on solutions to track the covid-19 outbreak spread',
    type: eventType.vanHackathon,
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor.',
    date: '14/09/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.leap,
  },
  {
    id: 5,
    name: 'Lorem ipsum dolor.',
    date: '10/04/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.recruitingMission,
  },
  {
    id: 6,
    name: 'Lorem ipsum dolor.',
    date: '10/04/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.openWebinar,
  },
  {
    id: 7,
    name: 'Recruiting 7',
    date: '10/04/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.recruitingMission,
  },
  {
    id: 8,
    name: 'Recruiting 8',
    date: '10/04/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.recruitingMission,
  },
  {
    id: 9,
    name: 'Open Webinar 9',
    date: '10/04/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.openWebinar,
  },
  {
    id: 16,
    name: 'Hack 16',
    date: '10/04/2020',
    duration: '24h',
    location: 'VanHack Office',
    description: 'On this hackathon you will work on solutions to track the covid-19 outbreak spread',
    type: eventType.vanHackathon,
  },
  {
    id: 10,
    name: 'Leap 10',
    date: '14/09/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.leap,
  },

  {
    id: 18,
    name: 'Hack 18',
    date: '10/04/2020',
    duration: '24h',
    location: 'VanHack Office',
    description: 'On this hackathon you will work on solutions to track the covid-19 outbreak spread',
    type: eventType.vanHackathon,
  },
  {
    id: 12,
    name: 'Leap 12',
    date: '14/09/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.leap,
  },
  {
    id: 14,
    name: 'Hack 14',
    date: '10/04/2020',
    duration: '24h',
    location: 'VanHack Office',
    description: 'On this hackathon you will work on solutions to track the covid-19 outbreak spread',
    type: eventType.vanHackathon,
  },
  {
    id: 11,
    name: 'Leap 11',
    date: '14/09/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.leap,
  },
  {
    id: 15,
    name: 'Hack 15',
    date: '10/04/2020',
    duration: '24h',
    location: 'VanHack Office',
    description: 'On this hackathon you will work on solutions to track the covid-19 outbreak spread',
    type: eventType.vanHackathon,
  },

  {
    id: 19,
    name: 'Premium Webinar 19',
    date: '10/07/2020',
    duration: '1h',
    location: 'Online',
    description: 'On this webinar we invited 3 senior webdevelpers to talk about the future of webdevelopment',
    type: eventType.premiumWebinar,
  },
  {
    id: 13,
    name: 'Leap 13',
    date: '14/09/2020',
    duration: '2h',
    location: 'VanHack Office',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris leo, congue ac massa nec, accumsan molestie leo. Cras commodo risus quis augue euismod efficitur...',
    type: eventType.leap,
  },
];

const logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2IiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTM2IDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTExOC45NjggMjEuODg4NUMxMTkuMyAyMi4wMjYxIDExOS4zNzYgMjIuMTc2OCAxMTkuMjM1IDIyLjUxODFDMTE4Ljk4OCAyMy4xMTEzIDExOC43NzkgMjMuNzIxIDExOC41ODUgMjQuMzQwNkMxMTguNDgzIDI0LjY3MiAxMTguMzQyIDI0LjczMTYgMTE4LjAyIDI0LjYwNzRDMTE3LjE4MSAyNC4zMDM5IDExNi4yODYgMjQuMTgzNiAxMTUuMzk2IDI0LjI1NDVDMTEzLjk2IDI0LjMyNTcgMTEzLjAzNSAyNS4xNzQgMTEyLjgxIDI2LjU4MjNDMTEyLjcgMjcuMzA2IDExMi43MDcgMjguMDQyNSAxMTIuODI4IDI4Ljc2NDNDMTEzLjAwNSAyOS45MDQyIDExMy42ODMgMzAuNTM3MSAxMTQuODc2IDMwLjczNzVDMTE2LjAxNSAzMC45MDMyIDExNy4xNzYgMzAuODU2NSAxMTguMjk4IDMwLjZDMTE4LjY1IDMwLjUyODggMTE4Ljc1MSAzMC42IDExOC43OTYgMzAuOTQ5NkMxMTguODg1IDMxLjYwNDEgMTE5LjAwNSAzMi4yNTM1IDExOS4xNDkgMzIuODk4QzExOS4yMTcgMzMuMTk5NiAxMTkuMTc2IDMzLjMxMzkgMTE4Ljg1MSAzMy4zOTUxQzExNi44OTggMzMuODc4MyAxMTQuODU5IDMzLjg5MDMgMTEyLjkwMSAzMy40Mjk5QzExMC42MDEgMzIuODk0NyAxMDkuMzE5IDMxLjM3NzEgMTA5LjA1NSAyOC45OTk2QzEwOC45MjYgMjcuODM5OCAxMDguODg5IDI2LjY4IDEwOS4yMjEgMjUuNTMwMkMxMDkuODg0IDIzLjEzNjEgMTExLjk0OSAyMS41MTA4IDExNC41NTkgMjEuMzMwMkMxMTQuOTI0IDIxLjMwNTQgMTE1LjI5IDIxLjMzMDIgMTE1LjY1NSAyMS4zMzAyTDExNS42NTIgMjEuMzE3QzExNi43ODYgMjEuMjUzNSAxMTcuOTIxIDIxLjQ0OSAxMTguOTY4IDIxLjg4ODVaTTEyMy41NzMgMTcuMDE0MkMxMjMuOTY1IDE3LjAwMjYgMTI0LjAyMSAxNy4xNTM0IDEyNC4wMiAxNy40OTQ3QzEyNC4wMDYgMjAuMTA3NSAxMjQuMDIgMjIuNzIwMyAxMjQuMDIgMjUuMzMzVjI1Ljk5NThDMTI0LjU2NSAyNS4yNzE3IDEyNS4wMTQgMjQuNjcwMyAxMjUuNDc0IDI0LjA2NTZDMTI2LjAxNyAyMy4zNDEgMTI2LjU1OSAyMi42MTUzIDEyNy4xMDEgMjEuODg4NUMxMjcuMjAzIDIxLjc1MSAxMjcuMjkgMjEuNTk4NiAxMjcuNTA0IDIxLjYwMDNIMTMxLjI1OEwxMjguOTkzIDI0LjQ0ODNDMTI4LjM4NCAyNS4yMTA0IDEyNy43ODIgMjUuOTc5MiAxMjcuMTY5IDI2LjczMTRDMTI2Ljk3NSAyNi45NjgzIDEyNi45MjUgMjcuMTMyMyAxMjcuMTY5IDI3LjM5NDFDMTI3LjgxNCAyOC4wNzg0IDEyOC40MjQgMjguNzk1OCAxMjkuMDUyIDI5LjQ5NDlDMTI5Ljc2MiAzMC4yODUyIDEzMC42ODQgMzAuNzIxIDEzMS42NzEgMzEuMDQ1N1YzMS41Njc2TDEzMS42NTkgMzEuNTYxQzEzMS40MTcgMzIuMDg5NSAxMzEuNDE1IDMyLjY2NjEgMTMxLjM0MiAzMy4yMTc4QzEzMS4yOTEgMzMuNjA3MSAxMzEuMTc3IDMzLjc3MTIgMTMwLjczNCAzMy43NDYzQzEyOC43NDQgMzMuNjM3IDEyNy4xNDIgMzIuODgzMSAxMjUuOTgzIDMxLjIyM0MxMjUuMzk4IDMwLjM4NDYgMTI0LjczOSAyOS41OTc3IDEyNC4wMiAyOC42NjMyVjI5LjM0MjVDMTI0LjAyIDMwLjU4MDEgMTI0LjAwOCAzMS44MTYxIDEyNC4wMiAzMy4wNTM4QzEyNC4wMiAzMy4zODUxIDEyMy45MzMgMzMuNTE2IDEyMy41ODUgMzMuNTA3N0MxMjIuNjQ1IDMzLjQ4OTUgMTIxLjcwMSAzMy40OTEyIDEyMC43NjYgMzMuNTA3N0MxMjAuNDU5IDMzLjUwNzcgMTIwLjM0MSAzMy40MzQ4IDEyMC4zNDEgMzMuMTAxOEMxMjAuMzUgMjcuODc2MiAxMjAuMzUgMjIuNjUwMSAxMjAuMzQxIDE3LjQyMzVDMTIwLjM0MSAxNy4wOTIxIDEyMC40MzQgMTcuMDA3NiAxMjAuNzU0IDE3LjAxNDJDMTIxLjY5NSAxNy4wMzQxIDEyMi42MzggMTcuMDQwNyAxMjMuNTczIDE3LjAxNDJaTTYzLjM0NDcgMjEuNTgyQzY1LjAwMyAyMS45Nzk3IDY1Ljc4NTcgMjMuMDMxNyA2NS44MzIxIDI0Ljc0OTlDNjUuODQ2NSAyNS4zNDE5IDY1Ljg0MTcgMjUuOTMzOSA2NS44MzY5IDI2LjUyNjRMNjUuODMyMSAyNy40MTU3TDY1LjgzMzggMjcuNDIzOUM2NS44MzM4IDI4LjI3NzIgNjUuODYzNiAyOS4xMzIxIDY1LjgyMjEgMjkuOTg1NEM2NS43OTczIDMwLjUxNzIgNjUuOTk3OSAzMC43OTIyIDY2LjUwODcgMzAuODAzOEM2Ni44NDAzIDMwLjgwMzggNjYuOTEgMzAuOTQ4IDY2Ljg4ODQgMzEuMjQ3OEM2Ni44Mzg3IDMxLjkyMzggNjYuODEyMSAzMi42MDMxIDY2Ljc4NTYgMzMuMjgyNEM2Ni43ODU2IDMzLjQ1OTcgNjYuNzQ3NSAzMy41ODU2IDY2LjUzMzYgMzMuNTkyMkM2NS40MTU5IDMzLjYyODcgNjQuMjk4MiAzMy42NDM2IDYzLjI2NjcgMzMuMTExN0M2My4wODg1IDMzLjAzODQgNjIuOTM2NSAzMi45MTMyIDYyLjgzMDYgMzIuNzUyMkM2Mi42MTgzIDMyLjI5ODMgNjIuNDA2MSAzMi40NzcyIDYyLjEyMjUgMzIuNjcyN0M2MC43NDM3IDMzLjY3NDYgNTguOTcwNyAzMy45NjMgNTcuMzQ1IDMzLjQ0OTdDNTUuOTEzOSAzMy4wMjg5IDU1LjEyNDYgMzIgNTUuMDM1IDMwLjUwMzlDNTQuOTMwNiAyOC43NTkzIDU1LjUzMjUgMjcuNjUwOSA1Ni45NDg3IDI3LjAyNDZDNTcuODc0IDI2LjYwMzggNTguODY5IDI2LjQ5MjggNTkuODYzOSAyNi40NThDNjAuNTQzOCAyNi40MzMyIDYxLjIyMzcgMjYuNDM5OCA2MS45MDM2IDI2LjQ1OEM2Mi4xNzU2IDI2LjQ1OCA2Mi4yNTY4IDI2LjM3MDIgNjIuMjY4NSAyNi4wOTg1QzYyLjMwNjYgMjQuOTk4NCA2MS45NjY2IDI0LjU4NTggNjAuODU4OSAyNC40MjAxQzU5LjUxOSAyNC4yMzI5IDU4LjIyMDYgMjQuNTE5NiA1Ni45Mjg4IDI0Ljc5OTZDNTYuNTcyMyAyNC44Nzc0IDU2LjQzMTMgMjQuODMyNyA1Ni4zNTM0IDI0LjQ2ODJDNTYuMjA1OCAyMy44MjU0IDU2LjAyMTcgMjMuMTkwOCA1NS44MzEgMjIuNTU2MkM1NS43NjE0IDIyLjMyMjYgNTUuODE0NCAyMi4yMTE2IDU2LjA0ODIgMjIuMTI3MUM1OC40Mjc5IDIxLjI1NTcgNjAuODU3MyAyMC45OTIyIDYzLjM0NDcgMjEuNTgyWk0xMDQuNDA1IDIxLjUxNzRDMTA2LjE3IDIxLjg2ODcgMTA3LjAzOSAyMi45MjQxIDEwNy4wODMgMjQuNzI4M0MxMDcuMTA1IDI1LjU4MTYgMTA3LjA4MyAyNi40MzQ4IDEwNy4wODMgMjcuMjg4MUgxMDcuMDkzVjI3LjI5OEMxMDcuMDkzIDI4LjE4NjEgMTA3LjEyMiAyOS4wNzU4IDEwNy4wODMgMjkuOTYwNUMxMDcuMDU5IDMwLjUxNTUgMTA3LjI3OSAzMC43ODg5IDEwNy44MTEgMzAuODA1NUMxMDguMTU2IDMwLjgwNTUgMTA4LjE5MSAzMC45NDQ2IDEwOC4xNjUgMzEuMjU0NUMxMDguMTA3IDMxLjg5NCAxMDguMSAzMi41NDAxIDEwOC4wODMgMzMuMTg0NkMxMDguMDgzIDMzLjQ1NDcgMTA3Ljk3OSAzMy42MDA1IDEwNy42ODUgMzMuNjA3MUMxMDYuNzYgMzMuNjI1NCAxMDUuODQgMzMuNjA3MSAxMDQuOTUxIDMzLjMwNTZDMTA0LjU5OSAzMy4xODk2IDEwNC4yNDMgMzMuMDIwNiAxMDQuMDY5IDMyLjY4OTNDMTAzLjg3MSAzMi4zMTMyIDEwMy43MDEgMzIuNDYyMyAxMDMuNDc3IDMyLjYyMTNDMTAyLjAwNiAzMy42NTg1IDEwMC4zOTkgMzMuOTU4NCA5OC42Njc3IDMzLjQ0OTdDOTcuMjEwMSAzMy4wMjcyIDk2LjM5NzUgMzEuOTk2NyA5Ni4yOTk3IDMwLjQ5MDdDOTYuMTgwMyAyOC43NzkyIDk2Ljg0MzYgMjcuNjE3OCA5OC4yNzY0IDI2Ljk5NjVDOTkuMjg2MyAyNi41NjA3IDEwMC4zNjEgMjYuNDcxMyAxMDEuNDQ1IDI2LjQ1M0MxMDIuMDAzIDI2LjQ0MzEgMTAyLjU2MSAyNi40MzE1IDEwMy4xMTkgMjYuNDUzQzEwMy40NSAyNi40Njk2IDEwMy41MiAyNi4zNDM3IDEwMy41MjMgMjYuMDM1NUMxMDMuNTIzIDI0LjkyMDUgMTAzLjI1OSAyNC41NzkyIDEwMi4xMzkgMjQuNDIwMUMxMDAuODAyIDI0LjIyOTYgOTkuNTAzNSAyNC41MjEyIDk4LjIxMTcgMjQuNzk3OUM5Ny44NjM0IDI0Ljg3MjUgOTcuNzE0MiAyNC44NDEgOTcuNjM0NiAyNC40NjY1Qzk3LjQ5NyAyMy44NDAzIDk3LjMwMyAyMy4yMjM5IDk3LjEyNzIgMjIuNjA1OUM5Ny4wNTI2IDIyLjM1MjUgOTcuMDY3NSAyMi4yMTk5IDk3LjM2NzYgMjIuMTA4OUM5OS42MTI1IDIxLjI2MDIgMTAyLjA1IDIxLjA1NTMgMTA0LjQwNSAyMS41MTc0Wk00Mi40NzM2IDE4LjA1NjRDNDIuODE4NSAxOC4wNTY0IDQyLjk1MjggMTguMTY5IDQzLjA0NzMgMTguNDg1NUM0NC4xOTI2IDIyLjI5ODMgNDUuMzQ2MiAyNi4xMDkgNDYuNTA4MiAyOS45MTc0QzQ2LjU3MjggMzAuMTMyNiA0Ni42NDU2IDMwLjM0NDQgNDYuNzU0OSAzMC42Nzg1QzQ3LjExMDEgMjkuNzEyIDQ3LjQyODUgMjguODU3MSA0Ny43NDAzIDI3Ljk4NzJDNDguODcyMyAyNC44NDcxIDUwLjAwMDUgMjEuNzA1MiA1MS4xMjQ4IDE4LjU2MTdDNTEuMjU0MiAxOC4yMDA1IDUxLjQxMzMgMTguMDQxNCA1MS44MjI5IDE4LjA2NDZDNTIuNzQ0OSAxOC4wOTk0IDUzLjY3MDMgMTguMDk0NSA1NC41OTM5IDE4LjA2NDZDNTUuMDQgMTguMDUxNCA1NS4xMTMgMTguMTQ1OCA1NC45NDM4IDE4LjU3MTZDNTMuNTk1NiAyMS45NjQ4IDUyLjI3MDcgMjUuMzY0NSA1MC45MzkxIDI4Ljc2NzZDNTAuMzg2OSAzMC4xNzU5IDQ5LjgyOCAzMS41ODQyIDQ5LjI5NDEgMzIuOTk3NEM0OS4xNTQ4IDMzLjM2ODYgNDguOTg0IDMzLjU0MjUgNDguNTQ3OCAzMy41MjkzQzQ3LjI5NDIgMzMuNDk0NSA0Ni4wMzcyIDMzLjQ5OTQgNDQuNzgzNSAzMy41MjkzQzQ0LjM3NzMgMzMuNTM3NSA0NC4yMTY0IDMzLjM5NTEgNDQuMDkwNCAzMy4wMjIzQzQyLjQ1NjQgMjguMjE2NCA0MC44MTIgMjMuNDExNyAzOS4xNTcgMTguNjA4MUMzOS4xMDcyIDE4LjQ2MjMgMzkuMDMyNiAxOC4zMjQ4IDM4Ljk2OTYgMTguMTgzOVYxOC4wNzk2QzQwLjEzMDQgMTguMDc2MiA0MS4zMDYxIDE4LjA3NjIgNDIuNDczNiAxOC4wNTY0Wk03Ni44MDk5IDIxLjM3NjZDNzguNTAxNCAyMS42OTggNzkuMjc5MSAyMi42MTkyIDc5LjQ0NDkgMjQuMzM3M0M3OS41NzU5IDI1LjY5MjYgNzkuNTE2MiAyNy4wNTEyIDc5LjUyNzggMjguNDA4MUM3OS41Mzk1IDI5LjkzOSA3OS41MTc5IDMxLjQ3MzIgNzkuNTM5NCAzMy4wMDQxQzc5LjUzOTQgMzMuMzgwMSA3OS40NTk5IDMzLjUzMDkgNzkuMDUxOSAzMy41MTc3Qzc4LjE0NjUgMzMuNDg5NSA3Ny4yMzk0IDMzLjQ5MjggNzYuMzM0IDMzLjUxNzdDNzUuOTcwOCAzMy41Mjc2IDc1Ljg2MTQgMzMuNDE5OSA3NS44NjMgMzMuMDUyMUM3NS44Nzk2IDMwLjg1ODUgNzUuODYzIDI4LjY2NDkgNzUuODcxMyAyNi40NzEzQzc1Ljg4MDcgMjYuMTA1OSA3NS44NTE4IDI1Ljc0MDUgNzUuNzg1MSAyNS4zODExQzc1LjY1MjQgMjQuNzU0OCA3NS4zNjM5IDI0LjQ5NDcgNzQuNzEzOCAyNC40NDY3QzczLjgyNTIgMjQuMzg4MyA3Mi45MzQxIDI0LjUxNzYgNzIuMDk4NyAyNC44MjYxQzcxLjcyMDcgMjQuOTU4NiA3MS41NjY0IDI1LjEzMjYgNzEuNTcxNCAyNS41NjY3QzcxLjU5NzkgMjguMDM4NiA3MS41NzE0IDMwLjUxMDYgNzEuNTkzIDMyLjk4NDJDNzEuNTkzIDMzLjM4MTggNzEuNTA1MSAzMy41MzQyIDcxLjA3ODkgMzMuNTIxQzcwLjE3MzUgMzMuNDkxMiA2OS4yNjY0IDMzLjUwMTEgNjguMzYxIDMzLjUyMUM2OC4wNDA5IDMzLjUyMSA2Ny45MDQ5IDMzLjQ2MTMgNjcuOTA0OSAzMy4wOTE5QzY3LjkxOTMgMjkuMzgzOSA2Ny45MTkzIDI1LjY3NTUgNjcuOTA0OSAyMS45NjY0QzY3LjkwNDkgMjEuNjM1MSA2OC4wMTQ0IDIxLjU1MjIgNjguMzI2MiAyMS41NTcyQzY5LjIzMTYgMjEuNTczOCA3MC4xMzg3IDIxLjU4NyA3MS4wNDQxIDIxLjU1NzJDNzEuNDgzNSAyMS41NDA2IDcxLjY0MTEgMjEuNjczMiA3MS41ODk2IDIyLjEwNzJDNzEuNTQzOCAyMi4zMDE1IDcxLjU2MzYgMjIuNTA1NCA3MS42NDYgMjIuNjg3MUw3MS42NTYgMjIuNjc3MkM3Mi4wNTIzIDIyLjQ0ODYgNzIuNDMzNyAyMi4yMTgzIDcyLjgxNjggMjIuMDA0NUM3NC4wMjk4IDIxLjMyNDggNzUuNDQ2NSAyMS4xMDIgNzYuODA5OSAyMS4zNzY2Wk05NC40MjkxIDE4LjA0NDhDOTQuNzE0NCAxOC4wNDQ4IDk0LjgyMjIgMTguMTExIDk0LjgyMjIgMTguNDE5MkM5NC44MTMzIDIzLjMxMzQgOTQuODEzMyAyOC4yMDgyIDk0LjgyMjIgMzMuMTAzNUM5NC44MjIyIDMzLjQ0OTcgOTQuNjg2MiAzMy41MDI4IDk0LjM5MSAzMy40OTk0QzkzLjQzMjUgMzMuNDg2MiA5Mi40NzQgMzMuNDc5NiA5MS41MTM5IDMzLjQ5OTRDOTEuMTMwOCAzMy41MDk0IDkxLjA1MjkgMzMuMzU4NiA5MS4wNTYyIDMzLjAwMjRDOTEuMDcxMSAzMS4yMDgxIDkxLjA1NjIgMjkuNDEzOCA5MS4wNzExIDI3LjYxOTRDOTEuMDcxMSAyNy4yMzUxIDkwLjk3OTkgMjcuMTIyNCA5MC41NzM3IDI3LjEyMjRDODguNjk0MyAyNy4xNDQ1IDg2LjgxMTYgMjcuMTQ0NSA4NC45MjU1IDI3LjEyMjRDODQuNTU0MSAyNy4xMjI0IDg0LjQ1NzkgMjcuMjM2NyA4NC40NjEyIDI3LjU5NjJDODQuNDc3OCAyOS4zNzQgODQuNDQ5NiAzMS4xNTAxIDg0LjQ4MTEgMzIuOTI2MkM4NC40ODk0IDMzLjQwNjcgODQuMzM2OSAzMy41MTEgODMuODkwOCAzMy40OTI4QzgzLjAyMDIgMzMuNDU4IDgyLjE0NjMgMzMuNDUzIDgxLjI3NTcgMzMuNDkyOEM4MC43NzgyIDMzLjUxNzcgODAuNzA2OSAzMy4zMjcxIDgwLjcxMTggMzIuODkxNEM4MC43MzAxIDMwLjUwMzkgODAuNzIwMSAyOC4xMTgxIDgwLjcyMDEgMjUuNzMyM0w4MC43Mzg0IDI1Ljc1ODhDODAuNzM4NCAyMy4zNTQ4IDgwLjc0ODMgMjAuOTU0MSA4MC43MzAxIDE4LjU0NjhDODAuNzMwMSAxOC4xNTA4IDgwLjg0MTIgMTguMDQ5NyA4MS4yMjc2IDE4LjA0OTdDODIuMTY3OCAxOC4wNzc5IDgzLjEwOTcgMTguMDcyOSA4NC4wNDY3IDE4LjA0OTdDODQuMzkxNiAxOC4wNDk3IDg0LjQ4OTQgMTguMTQ5MSA4NC40ODYxIDE4LjQ5MDRDODQuNDcxMiAyMC4yNSA4NC40OTc3IDIyLjAwOTUgODQuNDY2MiAyMy43NjlDODQuNDU3OSAyNC4yNDc4IDg0LjYwODggMjQuMzQyMyA4NS4wNTQ5IDI0LjMzNTdDODYuODc5IDI0LjMxMDggODguNzE2NCAyNC4zMTQxIDkwLjU0NzEgMjQuMzM1N0M5MC45NTAxIDI0LjMzNTcgOTEuMDgyNyAyNC4yNDI5IDkxLjA3NjEgMjMuODIwNEM5MS4wNTEyIDIyLjA2MDkgOTEuMDc2MSAyMC4zMDEzIDkxLjA1NjIgMTguNTQxOEM5MS4wNTYyIDE4LjE0NTggOTEuMTY0IDE4LjA0NDggOTEuNTUzNyAxOC4wNDQ4QzkyLjUxMjIgMTguMDcyOSA5My40NzA3IDE4LjA2MyA5NC40MjkxIDE4LjA0NDhaTTYyLjAyOTcgMjguNjE2OEM2MS4xNTA4IDI4LjY2OTkgNjAuMjUyIDI4LjUxNDEgNTkuMzkzIDI4LjgxNTZDNTguODAyNiAyOS4wMjI4IDU4LjUzNTcgMjkuNDQwMyA1OC42MDIgMzAuMDAzNkM1OC42NTUxIDMwLjQ2NDIgNTkuMDQ4MSAzMC43ODcyIDU5LjY0MzQgMzAuODQ2OUM2MC4yMTY5IDMwLjg4NDggNjAuNzkyNyAzMC44Mjg4IDYxLjM0ODEgMzAuNjgxMkM2Mi4yNTY4IDMwLjQ3MDggNjIuMjU2OCAzMC40NzI1IDYyLjI1NTIgMjkuNTY0NUM2Mi4yNTUyIDI5LjMzNzUgNjIuMjUzNSAyOS4xMTIyIDYyLjI1NTIgMjguODkzNUM2Mi4yNTUyIDI4LjczNzggNjIuMjE3IDI4LjYwNTIgNjIuMDI5NyAyOC42MTY4Wk0xMDIuMDY0IDI4LjYyODRDMTAxLjYxNyAyOC42MDYxIDEwMS4xNjkgMjguNjU1OSAxMDAuNzM3IDI4Ljc3NTlIMTAwLjczNkMxMDAuMTI0IDI4Ljk3OCA5OS43OTM3IDI5LjQyODcgOTkuODU2NyAyOS45NzA0Qzk5LjkxNDcgMzAuNDY3NSAxMDAuMzQzIDMwLjc5ODggMTAwLjk4OSAzMC44NDY5QzEwMS42MzYgMzAuODk0OSAxMDIuMjY1IDMwLjc0NDIgMTAyLjg5OCAzMC42MjgyQzEwMy4zNjEgMzAuNTQzNyAxMDMuNTUzIDMwLjM3NDcgMTAzLjUzMSAyOS44NTQ1QzEwMy40ODIgMjguNjA2OSAxMDMuNTE3IDI4LjYwNjkgMTAyLjA2NCAyOC42Mjg0WiIgZmlsbD0iIzIxQUFFQiIvPgo8cGF0aCBkPSJNMi43MTYyNyAxNy45NDUzTDcuMzEzMDIgMjYuOTQxOEM3LjQ3ODg1IDI2LjM3MzUgNy42MjQ3OCAyNS45MjI4IDcuNzU3NDQgMjUuNDY4OUM5LjEzNjAzIDIwLjc5MzQgMTAuNTEwNyAxNi4xMTk1IDExLjg4MTYgMTEuNDQ3M0MxMS45ODYxIDExLjA4NzggMTIuMTM1MyAxMSAxMi40OTM1IDExQzE0LjQ4MzQgMTEuMDE4MiAxNi40ODMzIDExLjAwODMgMTguNDc4MiAxMS4wMDgzSDE4Ljk0OTJDMTguNTkyNiAxMi4yMjI3IDE4LjI1MSAxMy4zOTI0IDE3LjkwNjEgMTQuNTYwNUMxNS41NjQ2IDIyLjQ5NDQgMTMuMjI2NSAzMC40Mjg4IDEwLjg5MTYgMzguMzYzOEMxMC43NjcyIDM4Ljc4OTYgMTAuNjAxNCAzOC45MTg4IDEwLjE2MDMgMzguOTEwNUM4LjQ4MDQ1IDM4Ljg4MDcgNi43OTg5NSAzOC44OTA3IDUuMTE3NDYgMzguOTEwNUM0Ljg2Nzk5IDM4Ljk0MjggNC42MzE0NyAzOC43OTEgNC41NTY5NiAzOC41NTFDMy4xMjk3MyAzNS4zNiAxLjY5MjU1IDMyLjE3MjkgMC4yNDU0MjggMjguOTg5NkMwLjE1OTUyNCAyOC44MjQ0IDAuMTM2NTQ0IDI4LjYzMzYgMC4xODA3NTUgMjguNDUyOEMxLjAyODE0IDI0Ljk5MTcgMS44NTU2MiAyMS41MzQgMi43MTYyNyAxNy45NDUzWiIgZmlsbD0iIzIxQUFFQiIvPgo8cGF0aCBkPSJNMzQuMzM2NCAxMS4wNTQ3QzM0LjAyMTMgMTIuMTMzMyAzMy43MTEyIDEzLjIwODUgMzMuMzkyOCAxNC4yOTA0QzMxLjAxNDggMjIuMzQxNCAyOC42MzggMzAuMzkyOSAyNi4yNjIyIDM4LjQ0NUMyNi4xNjEgMzguNzkxMyAyNi4wMjUxIDM4LjkwNzIgMjUuNjU2OSAzOC45MDM5QzIzLjU5OSAzOC44ODQgMjEuNTQxMSAzOC44OTQgMTkuNDgzMiAzOC44OTRDMTkuNDA2OSAzOC44OTQgMTkuMzI4OSAzOC44ODI0IDE5LjE5OTYgMzguODc0MUMxOS41MDE0IDM3Ljg0NjkgMTkuNzk2NiAzNi44NDQ1IDIwLjA5MTcgMzUuODQyMUMyMC43NjMzIDMzLjU1OTEgMjEuNDI4MyAzMS4yNzI3IDIyLjExNjUgMjguOTk0NkMyMi4yMzQyIDI4LjYwNjkgMjIuMTY2MiAyOC41MDkxIDIxLjc2MzMgMjguNTEyNEMxOS45ODg5IDI4LjUyOSAxOC4yMTI5IDI4LjUxMjQgMTYuNDM4NSAyOC41MTI0QzE1LjgxNjcgMjguNTEyNCAxNS44MTE3IDI4LjUxMjQgMTUuOTc1OSAyNy44OTI4QzE2LjQ3MzQgMjYuMDMyMiAxNi45NzkxIDI0LjE3MzMgMTcuNDY4MyAyMi4zMDk0QzE3LjU1NDYgMjEuOTc4IDE3LjY5NzIgMjEuODU1NCAxOC4wNDM4IDIxLjg2MDRDMTkuOTI3NiAyMS44OTAyIDIxLjgxMTQgMjEuODg1MiAyMy42OTUyIDIxLjkyNUMyNC4xMDgxIDIxLjkzMzMgMjQuMjU3MyAyMS43ODQyIDI0LjM1ODUgMjEuNDA5N0MyNS4zMzAyIDE4LjA1NDcgMjYuMzIxOSAxNC43MDYzIDI3LjMwNjkgMTEuMzU2MkMyNy4zNjY2IDExLjE1NDEgMjcuNDE5NyAxMC45OTg0IDI3LjcwMzIgMTFDMjkuODc1NiAxMS4wMTY2IDMyLjA0MyAxMS4wMTMzIDM0LjIxMDMgMTEuMDE2NkMzNC4yNTM2IDExLjAyNDggMzQuMjk1OCAxMS4wMzc1IDM0LjMzNjQgMTEuMDU0N1oiIGZpbGw9IiM0NkMxRjEiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIxMzIiIGhlaWdodD0iMjgiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=';

export {
  eventType,
  events,
  logo,
};
