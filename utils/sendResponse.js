const sendResponse = (res, status, message, success, data = null) => {
    const response = { message: message, success: success };
    if (data) {
      response.data = data;
    }
    return res.status(status).send(response);
  };
  module.exports = { sendResponse };