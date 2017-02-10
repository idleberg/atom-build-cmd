'use babel';

import { EventEmitter } from 'events';
import { platform } from 'os';

// Package settings
import meta from '../package.json';

this.config = {
  customArguments: {
    title: 'Custom Arguments',
    description: 'Specify your preferred arguments for `cmd`, supports [replacement](https://github.com/noseglid/atom-build#replacement) placeholders',
    type: 'string',
    'default': '/q /c {FILE_ACTIVE}',
    order: 0
  },
  manageDependencies: {
    title: 'Manage Dependencies',
    description: 'When enabled, third-party dependencies will be installed automatically',
    type: 'boolean',
    default: true,
    order: 1
  }
};

// This package depends on build, make sure it's installed
export function activate() {
  if (atom.config.get(meta.name + '.manageDependencies') && !atom.inSpecMode()) {
    this.satisfyDependencies();
  }
}

export function satisfyDependencies() {
  let k;
  let v;

  require('atom-package-deps').install(meta.name);

  const ref = meta['package-deps'];
  const results = [];

  for (k in ref) {
    if (typeof ref !== 'undefined' && ref !== null) {
      v = ref[k];
      if (atom.packages.isPackageDisabled(v)) {
        if (atom.inDevMode()) {
          console.log('Enabling package \'' + v + '\'');
        }
        results.push(atom.packages.enablePackage(v));
      } else {
        results.push(void 0);
      }
    }
  }
  return results;
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
      if (platform() === 'win32') {
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
      const customArguments = atom.config.get(meta.name + '.customArguments').trim().split(' ');

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
