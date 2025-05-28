/**
 *
 * @param {'info' | 'error' | 'warn'} level
 * @param {string} message
 */
export const sendToServer = (level, message) => {
  throw new Error("You're so cool but this shouldn't be running!");
  return `You must mock this function: sendToServer(${level}, ${message})`;
};
