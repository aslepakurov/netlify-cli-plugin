const {Command, flags} = require('@oclif/command')
const fs = require('fs')
const opn = require('opn')

class AuthCommand extends Command {
  async run() {
    const netlifyConfigBuffer = fs.readFileSync('.netlify/state.json')
    const netlifyConfig = JSON.parse(netlifyConfigBuffer.toString('utf8'))

    const url = `https://netlify-addon-genpop.verygoodsecurity.io/auth?siteId=${netlifyConfig.siteId}`
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
