const serverStore = {
  serversCount: 4,
  servers: [
    {
      id: 1,
      app_1: {
        name: ''
      },
      app_2: {
        name: ''
      },
    },
    {
      id: 2,
      app_1: {
        name: ''
      },
      app_2: {
        name: ''
      },
    },
    {
      id: 3,
      app_1: {
        name: ''
      },
      app_2: {
        name: ''
      },
    },
    {
      id: 4,
      app_1: {
        name: ''
      },
      app_2: {
        name: ''
      },
    },
  ],
  // server: {
  //   id: null,
  //   app_1: {
  //     name: ''
  //   },
  //   app_2: {
  //     name: ''
  //   },
  // },
  get () {
    return serverStore
  }
}



export default serverStore
