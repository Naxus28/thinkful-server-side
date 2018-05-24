export default (message, status, res) => {
  console.log(message);
  res
    .status(status)
    .send(message)
};