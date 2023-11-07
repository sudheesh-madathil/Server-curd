var express = require('express');
var router = express.Router();

const User = require('./model/userschema');
/* GET users listing. */
router.post('/',(req, res) => {

  const userData = new User({
    name:req.body.name,
    place:req.body.place
  })
 userData.save().then((user)=>{
  res.send(user)
  console.log("data saved",user);


 })



});
router.get('/',(req,res)=>{
   User.find().then((data)=>{
    res.send(data)
  })
})

//delete data


router.delete("/:_id", (req, res) => {
  const username = req.params._id;
  console.log(username,"user id");
  User.findByIdAndDelete({_id: username })
    .then((data) => {
      if (data) {
        res.send(`Deleted user: ${data._id}`);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((error) => {
      res.status(500).send("Error deleting user");
    });
});

//edit  
router.put("/:_id", (req, res) => {
  const userId = req.params._id; // Retrieve the _id from URL parameters
  const updatedData = req.body; // Assuming the updated data is in the request body
  console.log(updatedData,"hjjjjjjjjjjjjjjjjjj");

  User.findByIdAndUpdate(userId, updatedData, { new: true })
    .then((data) => {
      if (data) {
        res.send(`Updated user: ${data._id}`);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((error) => {
      res.status(500).send("Error updating user");
    });
});


module.exports = router;