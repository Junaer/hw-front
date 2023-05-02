function validateUsername(username) {
      const regex = /^[a-zA-Z_-][a-zA-Z0-9_-]*[a-zA-Z_-]$/;
      const regexNumbers = /\d{4,}/;
      const regexStartEnd = /^[\d_-]|[\d_-]$/;
  
      if (!regex.test(username)) {
        return false;
      }
  
      if (regexNumbers.test(username)) {
        return false;
      }
  
      if (regexStartEnd.test(username)) {
        return false;
      }
  
      return true;
    }

module.exports = validateUsername