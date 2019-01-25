const {Command, flags} = require('@oclif/command')
const fs = require('fs')
const opn = require('opn')

class AuthCommand extends Command {
  async run() {
    const netlifyConfigBuffer = fs.readFileSync('.netlify/state.json')
    const netlifyConfig = JSON.parse(netlifyConfigBuffer.toString('utf8'))

    if (!netlifyConfig.siteId) {
      throw new Error('Could parse your site id. Did you link this folder to netlify-cli?')
    }

    const url = `https://netlify-addon-genpop.verygoodsecurity.io/auth?siteId=${netlifyConfig.siteId}`
    // const url = `http://localhost:5000/auth?siteId=${netlifyConfig.siteId}`
    opn(url, {wait: false})
  }
}

AuthCommand.description = `Describe the command here
...
Extra documentation goes here
`

AuthCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = AuthCommand
