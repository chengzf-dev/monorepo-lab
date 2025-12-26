/**
 * Formats a wallet address by truncating the middle part.
 * @param {string} address - The wallet address to format.
 * @param {number} [start=6] - Number of characters to keep at the start.
 * @param {number} [end=4] - Number of characters to keep at the end.
 * @returns {string} The formatted address.
 */
function formatWalletAddress(address, start = 6, end = 4) {
  if (!address) return '';
  if (address.length <= start + end) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
}

module.exports = {
  formatWalletAddress,
};
