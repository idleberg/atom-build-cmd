import { configSchema, getConfig } from './config';
import { EventEmitter } from 'events';
import { name } from '../package.json';
import { platform } from 'os';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import Logger from './log';
import which from 'which';

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
        : Boolean(which.sync('wine', {
          nothrow: true
        }));
    }

    settings() {
      const cwdPath = '{FILE_ACTIVE_PATH}';

      const defaultArguments = [
        '/q',
        '/c',
        '{FILE_ACTIVE}'
      ];

      // User arguments
      const customArguments = getConfig('customArguments').trim().split(' ');

      const isWindows = platform() === 'win32';

      const exec = isWindows
        ? 'cmd.exe'
        : 'wine';

      const env = isWindows
        ? undefined
        : {
          'WINEDEBUG': '-all'
        };

      if (!isWindows) {
        defaultArguments.unshift('cmd');
        customArguments.unshift('cmd');
      }

      return [
        {
          name: 'Batch',
          exec: exec,
          args: defaultArguments,
          cwd: cwdPath,
          env: env,
          sh: false,
          atomCommandName: 'batch:run-script'
        },
        {
          name: 'Batch (user)',
          exec: exec,
          args: customArguments,
          cwd: cwdPath,
          env: env,
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
