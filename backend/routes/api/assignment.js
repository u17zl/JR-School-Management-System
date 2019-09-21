const express = require("express")
const router = express.Router()
const Assignment = require("../../model/Assignment")
const { check, validationResult } = require("express-validator")
var parse = require('date-fns/parse')
// @route GET api/assignments/
// @ desc   get all assignments
// @ access public

router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find()
    res.json(assignments)
  } catch (err) {
    console.log(err.message)
    res.send("Server Error")
  }
})

// @route post api/assignments/
// @ desc   create a new assignment
// @ access public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("startAt", "Start Date is required")
      .not()
      .isEmpty(),
    check("dueAt", "Due Date is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    let { name, description, startAt, dueAt } = req.body
    
    startAt = new Date(startAt)
    dueAt = new Date(dueAt)
    
    const assignment = new Assignment({ name, description, startAt, dueAt })
    await assignment.save()
    res.json(assignment)
    try {
    } catch (err) {
      console.log(err.message)
      res.send("Server Error")
    }
  }
)

// @route post api/assignments/
// @ desc   create a new assignment
// @ access public


router.delete("/",async (req,res)=>{
  try {
    const {id} = req.body
    await Assignment.findOneAndRemove({ _id: id})
    res.json({ msg: "profile and user deleted" })
  } catch (err) {
    console.log(err.message)
    res.status(500).send("Server Error")
  }
})








module.exports = router