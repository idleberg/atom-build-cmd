'use babel';

import os from 'os';

export function provideBuilder() {
  return class CmdProvider {
    constructor(cwd) {
      this.cwd = cwd;
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

      return {
        name: 'Batch',
        exec: 'cmd',
        args: args,
        cwd: cwdPath,
        sh: false,
        atomCommandName: 'batch:run-script'
      };
    }
  };
}
