// test Route are ok to work or not by GET req
exports.testControllerGet = async (req, res) => {
  res.status(200).json({ success: true, message: "Get request successful" });
};
