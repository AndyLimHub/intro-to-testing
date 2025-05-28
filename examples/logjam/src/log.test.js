import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

const sendMock = vi.mock('./send-to-server', () => ({
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
      expect(sendMock.sendToServer).toHaveBeenCalled;
    });
  });

  describe('production', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'production');
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should not call console.log in production mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello World');
      expect(logSpy).not.toHaveBeenCalled();
      expect(sendMock.sendToServer).toHaveBeenCalled;
    });
  });
});
