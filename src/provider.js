import { configSchema, getConfig } from './config';
import { EventEmitter } from 'events';
import { platform } from 'os';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import Logger from './log';
import { name } from '../package.json';

export { configSchema as config };

export function provideBuilder() {
  return class CmdProvider extends EventEmitter {
    constructor(cwd) {
      super();
      this.cwd = cwd;
      atom.config.observe('build-cmd.customArguments', () => this.emit('refresh'));
    }

    getNiceName() {
      return 'Command Prompt';
    }

    isEligible() {
      if (getConfig('alwaysEligible') === true) {
        Logger.log('Always eligible');
        return true;
      }

      return platform() === 'win32'
        ? true
        : false;
    }

    settings() {
      const cwdPath = '{FILE_ACTIVE_PATH}';

      const args = [
        '/q',
        '/c',
        '{FILE_ACTIVE}'
      ];

      // User settings
      const customArguments = getConfig('customArguments').trim().split(' ');

      return [
        {
          name: 'Batch',
          exec: 'cmd',
          args: args,
          cwd: cwdPath,
          sh: false,
          atomCommandName: 'batch:run-script'
        },
        {
          name: 'Batch (user)',
          exec: 'cmd',
          args: customArguments,
          cwd: cwdPath,
          sh: false,
          atomCommandName: 'batch:run-script-with-user-settings'
        }
      ];
    }
  };
}

export function activate() {
  Logger.log('Activating package');

  // This package depends on build, make sure it's installed
  if (getConfig('manageDependencies') === true) {
    satisfyDependencies(name);
  }
}

export function deactivate() {
  Logger.log('Deactivating package');
}
