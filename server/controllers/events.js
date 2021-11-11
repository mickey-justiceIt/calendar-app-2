const Event = require("../../../../api/models/Event");
const errorHandler = require("../../../../api/utils/errorHandler");


module.exports.getEvents = async (req, res) => {
  const events = await Event.find({ id: req.params.id });
  try {
    await events.save();
    res.status(200).json(events);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.create = async (req, res) => {
  const event = await new Event({
    title: req.body.title
  });
  try {
    await event.save();
    res.status(200).json(event);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Event.deleteMany({ id: req.body.id },);
    res.status(200).json({
      message: "event deleted",
    });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.update = async (req, res) => {
  try {
    const event = await Event.findOneAndUpdate(
      { id: req.body.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(event);
  } catch (e) {
    errorHandler(res, e);
  }
};


