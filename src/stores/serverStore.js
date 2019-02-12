const serverStore = {
  serversCount: 4,
  servers: [
    {
      id: 1,
      app_1: {
        id: null,
        name: ''
      },
      app_2: {
        id: null,
        name: ''
      },
    },
    {
      id: 2,
      app_1: {
        id: null,
        name: ''
      },
      app_2: {
        id: null,
        name: ''
      },
    },
    {
      id: 3,
      app_1: {
        id: null,
        name: ''
      },
      app_2: {
        id: null,
        name: ''
      },
    },
    {
      id: 4,
      app_1: {
        id: null,
        name: ''
      },
      app_2: {
        id: null,
        name: ''
      },
    },
  ],
  activeApps: {
    'Hadoop': [],
    'Rails': [],
    'Chronos': [],
    'Storm': [],
    'Spark': []
  },
  get () {
    return serverStore
  }
}



export default serverStore
