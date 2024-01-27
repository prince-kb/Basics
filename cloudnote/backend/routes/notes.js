const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//To create a note for an individual user using the reference of User schema
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("notes", "Enter a valid note with at least 1 character").isLength({
      min: 1,
    }),
  ],
  async (req, res) => {
    // const note1 = await Notes.find({user : req.user.id})
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, notes, tag } = req.body;
    const note = await Notes.create({
      user: req.user.id,
      title,
      notes,
      tag,
      // title : req.body.title,
      // notes : req.body.notes
    });
    console.log("Note added");
    res.send(note);
  }
);

//To fetch all notes created by a individual user
router.get("/fetchnotes", fetchuser, async (req, res) => {
  try {
    const n = await Notes.find({ user: req.user.id });
    // console.log(n);
    // console.log(req.user.id)
    res.json(n);
  } catch {
    return res.status(400).json({ errors: errors.array() });
  }
});

//To update a note of the user
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  let newNote = {};
  try {
    const currentNote = await Notes.findById(req.params.id);
    if (currentNote.user.toString() != req.user.id) {
      // console.log(" c = " + currentNote.user);
      // console.log("r = " + req.params.id);
      return res.status(401).json("Authorization revoked");
    }
    if (!currentNote) {
      return res.json("Cannot find associated note");
    }
    const { title, notes, tag } = req.body;
    if (title) {
      newNote.title = title;
    }
    if (notes) {
      newNote.notes = notes;
    }
    if (tag) {
      newNote.tag = tag;
    }
  } catch (err) {
    console.log("Cannot find associated note id");
    return res.status(200).send("ERROR");
  }

  await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ newNote });
});

//To delete all notes of the user
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    const currentNote = await Notes.findById(req.params.id);
    if (currentNote.user.toString() != req.user.id) {
      return res.status(401).json("Authorization revoked");
    }
    if (!currentNote) {
      return res.json("Cannot find associated note");
    }
    await Notes.findByIdAndDelete(req.params.id);
    console.log(currentNote);
    res.json({ Success: "Note deleted" });
  } catch (err) {
    console.log("Cannot find associated note id");
    return res.status(200).send("ERROR");
  }
});
module.exports = router;
