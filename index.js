const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from my second node server automatic");
});

const users = [
  { id: 0, name: "sabana", email: "sabana@gmail.com", phone: "017" },
  { id: 1, name: "sabnur", email: "sabnur@gmail.com", phone: "017" },
  { id: 2, name: "sochorita", email: "sochorita@gmail.com", phone: "017" },
  { id: 3, name: "moushomi", email: "moushomi@gmail.com", phone: "017" },
  { id: 4, name: "rojina", email: "rojina@gmail.com", phone: "017" },
  { id: 5, name: "bobita", email: "sobita@gmail.com", phone: "017" }
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  // qurie perameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
