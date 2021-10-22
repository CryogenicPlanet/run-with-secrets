import * as core from '@actions/core'

import {execSync} from 'child_process'

async function run(): Promise<void> {
  try {
    const jsonSecrets: string = core.getInput('secrets')
    const command: string = core.getInput('command')

    const secrets = JSON.parse(jsonSecrets)

    execSync(command, {env: {...process.env, secrets}})
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
