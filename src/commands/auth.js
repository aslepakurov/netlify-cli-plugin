const {Command, flags} = require('@oclif/command')

class AuthCommand extends Command {
  async run() {
    // const {flags} = this.parse(AuthCommand)
    // const name = flags.name || 'world'
    this.log('vgs auth')
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
