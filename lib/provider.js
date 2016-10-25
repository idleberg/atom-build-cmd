'use babel';

import { install } from 'atom-package-deps';
import { EventEmitter } from 'events';
import os from 'os';

// Package settings
import meta from '../package.json';

this.config = {
  customArguments: {
    title: 'Custom Arguments',
    description: 'Specify your preferred arguments for `cmd`, supports [replacement](https://github.com/noseglid/atom-build#replacement) placeholders',
    type: 'string',
    'default': '/q /c {FILE_ACTIVE}',
    order: 0
  }
};

// This package depends on build, make sure it's installed
export function activate() {
  if (!atom.inSpecMode()) {
    install(meta.name);
  }
}

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
      if (os.platform() === 'win32') {
        // all 32-bit Windows comes with cmd.exe
        return true;
      }
      return false;
    }

    settings() {
      const cwdPath = '{FILE_ACTIVE_PATH}';

      const args = [
        '/q',
        '/c',
        '{FILE_ACTIVE}'
      ];

      // User settings
      const customArguments = atom.config.get('build-cmd.customArguments').trim().split(' ');

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
