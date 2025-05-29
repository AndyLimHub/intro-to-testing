import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';
import { sendToServer } from './send-to-server'; // <-- import actual function to assert

vi.mock('./send-to-server', () => ({
  sendToServer: vi.fn(),
}));

describe('logger', () => {
  describe('development', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'development');
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('logs to the console in development mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello World');

      expect(logSpy).toHaveBeenCalledWith('Hello World');
      expect(sendToServer).not.toHaveBeenCalled(); // production path should not run
    });
  });

  describe('production', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'production');
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should call sendToServer in production mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello World');

      expect(logSpy).not.toHaveBeenCalled();
      expect(sendToServer).toHaveBeenCalledWith('info', 'Hello World');
    });
  });
});
