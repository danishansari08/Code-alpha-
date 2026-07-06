// JavaScript Helper Functions

// Log with styling
const log = (message, type = 'info') => {
  const styles = {
    info: 'color: #0066cc;',
    success: 'color: #00cc00;',
    error: 'color: #ff0000;',
    warning: 'color: #ff9900;'
  };
  console.log(`%c${message}`, styles[type] || styles.info);
};

// Delay execution
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Format date
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Deep clone object
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

// Add more helper functions as needed

module.exports = { log, delay, formatDate, deepClone };
