const Contact = require("../models/Contact");

exports.create = (contactData) => Contact.create(contactData);