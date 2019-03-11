const browserStorage = {
  setKey: (keyName, value) => {
    localStorage.setItem(keyName, JSON.stringify(value))
  },

  getKey: keyName => {
    return JSON.parse(localStorage.getItem(keyName))
  },

  removeKey: keyName => {
    return localStorage.removeItem(keyName)
  }
}

export default browserStorage
