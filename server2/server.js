const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(CORS());

let mockUserData = [
    {
      userID: "1",
      username: "Client1",
      password: "password1",
      name: "Client1 Test1",
      email: "Client1@test.com",
      phone: "111-111-1111",
      role: "Client",
      reservationIDs: ["1", "2", "4", "6"],
    },
    {
      userID: "2",
      username: "Client2",
      password: "password2",
      name: "Client2 Test2",
      email: "Client2@test.com",
      phone: "222-222-2222",
      role: "Client",
      reservationIDs: ["1", "2", "3", "6"],
    },
    {
      userID: "3",
      username: "Client3",
      password: "password3",
      name: "Client3 Test3",
      email: "Client3@test.com",
      phone: "333-333-3333",
      role: "Client",
      reservationIDs: ["3", "4", "5", "6"],
    },
    {
      userID: "4",
      username: "Instructor1",
      password: "password11",
      name: "Instructor11 Test11",
      email: "Instructor11@test.com",
      phone: "101-101-1010",
      role: "Instructor",
      reservationIDs: [],
    },
    {
      userID: "5",
      username: "Instructor2",
      password: "password22",
      name: "Instructor22 Test22",
      email: "Instructor22@test.com",
      phone: "202-202-2020",
      role: "Instructor",
      reservationIDs: [],
    },
    {
      userID: "6",
      username: "Instructor3",
      password: "password33",
      name: "Instructor33 Test33",
      email: "Instructor33@test.com",
      phone: "303-303-3030",
      role: "Instructor",
      reservationIDs: [],
    },
  ];
  
let mockClassData = [
{
    classID: "1",
    startDate: "Aug 22,2021",
    startTime: "6:00pm",
    duration: "60",
    status: "Finished",
    location: "New York City, NY",
    type: "Yoga",
    intensity: "Hard",
    capacity: "50",
    instructorID: "4",
    className: "Hot Yoga For Your Back",
    reservedClientIDs: ["1", "2"],
},
{
    classID: "2",
    startDate: "Aug 23,2021",
    startTime: "7:00pm",
    duration: "70",
    status: "Finished",
    location: "Boston, MA",
    type: "Pilates",
    intensity: "Easy",
    capacity: "25",
    instructorID: "5",
    className: "Pilates For Your Shoulders",
    reservedClientIDs: ["1", "2"],
},
{
    classID: "3",
    startDate: "Aug 24,2021",
    startTime: "8:00pm",
    duration: "45",
    status: "Upcoming",
    location: "Los Angeles, CA",
    type: "Cardio",
    intensity: "Medium",
    capacity: "30",
    instructorID: "6",
    className: "Run Around Your House Like A Maniac",
    reservedClientIDs: ["2", "3"],
},
{
    classID: "4",
    startDate: "Aug 25,2021",
    startTime: "6:30pm",
    duration: "50",
    status: "Upcoming",
    location: "Miami, FL",
    type: "Boxing",
    intensity: "Hard",
    capacity: "15",
    instructorID: "6",
    className: "Air Punching like a Pro",
    reservedClientIDs: ["1", "3"],
},
{
    classID: "5",
    startDate: "Aug 26,2021",
    startTime: "9:30pm",
    duration: "30",
    status: "Upcoming",
    location: "Chicago, IL",
    type: "Yoga",
    intensity: "Easy",
    capacity: "50",
    instructorID: "5",
    className: "Yoga for Grandma",
    reservedClientIDs: ["3"],
},
{
    classID: "6",
    startDate: "Aug 27,2021",
    startTime: "12:30pm",
    duration: "25",
    status: "Upcoming",
    location: "Nashville, TN",
    type: "Cardio",
    intensity: "Medium",
    capacity: "35",
    instructorID: "4",
    className: "Lunchtime Jumping Jacks",
    reservedClientIDs: ["1", "2", "3", "4"],
},
];
  
  
  
  
  let userId = mockUserData.length;
  

  
  app.get("/users", (req, res) => {
    res.send(mockUserData);
  });
  
  app.get("/users/:id", (req, res) => {
    const user = mockUserData.filter(user => `${user.userID}` === req.params.id)[0];
    res.status(200).json(user);
  });
  
  app.post("/users", (req, res) => {
    if (req.body.username !== undefined) {
      const newUser = req.body;
      newUser["id"] = userId;
      mockUserData.push(newUser);
    }
    ++userId;
    res.status(201).json(mockUserData);
  });
  
  app.put("/users/:id", (req, res) => {
    if (!req.params.id)
      res.status(400).send("Your request is missing the user id");
    if (
      req.body.userID === undefined ||
      !req.body.username ||
      !req.body.password ||
      !req.body.name ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.role ||
      !req.body.reservationIDs
    ) {
      res
        .status(422)
        .send("Make sure your request body has all the fields it needs");
    }
    mockUserData = mockUserData.map(user => {
      if (`${user.userID}` === req.params.id) {
        return req.body;
      }
      return user;
    });
    res.status(200).send(mockUserData);
  });
  
  app.delete("/users/:id", (req, res) => {
    if (!req.params.id)
      res.status(400).send("Your request is missing the user id");
      mockUserData = mockUserData.filter(user => `${user.userID}` !== req.params.id);
    res.status(202).send(req.params.id);
  });


//   -------------------------------------------------------------------------------------------------------
//   -------------------------------------------------------------------------------------------------------
//   -------------------------------------------------------------------------------------------------------
let classId = mockClassData.length;

  app.get("/classes", (req, res) => {
    res.send(mockClassData);
  });
  
  app.get("/classes/:id", (req, res) => {
    const item = mockClassData.filter(item => `${item.classID}` === req.params.id)[0];
    res.status(200).json(item);
  });
  
  app.post("/classes", (req, res) => {
    if (req.body.className !== undefined) {
      const newClass = req.body;
      newClass["id"] = classId;
      mockClassData.push(newClass);
    }
    ++classId;
    res.status(201).json(mockClassData);
  });
  
  app.put("/classes/:id", (req, res) => {
    if (!req.params.id)
      res.status(400).send("Your request is missing the class id");
    if (
      req.body.classID === undefined ||
      !req.body.startDate ||
      !req.body.startTime ||
      !req.body.duration ||
      !req.body.status ||
      !req.body.location ||
      !req.body.type ||
      !req.body.intensity ||
      !req.body.capacity ||
      !req.body.instructorID ||
      !req.body.className ||
      !req.body.reservedClientIDs

    ) {
      res
        .status(422)
        .send("Make sure your request body has all the fields it needs");
    }
    mockClassData = mockClassData.map(item => {
      if (`${item.classID}` === req.params.id) {
        return req.body;
      }
      return item;
    });
    res.status(200).send(mockClassData);
  });
  
  app.delete("/classes/:id", (req, res) => {
    if (!req.params.id)
      res.status(400).send("Your request is missing the class id");
      mockClassData = mockClassData.filter(item => `${item.classID}` !== req.params.id);
    res.status(202).send(req.params.id);
  });

//   -------------------------------------------------------------------------------------------------------
//   -------------------------------------------------------------------------------------------------------
//   -------------------------------------------------------------------------------------------------------

  
  
  app.get("/", function(req, res) {
    res.send("App is working 👍");
  });
  
  app.listen(5000, () => {
    console.log("Server listening on port 5000");
  });