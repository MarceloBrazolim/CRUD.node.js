
# CRUD node.js

"Make an Application in node.js that performs the four basic database operations":
 - Create
 - Read
 - Update
 - Delete


## Running locally

Clone the project

```bash
  git clone https://github.com/MarceloBrazolim/CRUD.node.js.git
```

Enter the project directory

```bash
  cd CRUD.node.js
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  yarn dev
```


## Testing

#### To run the tests, input the following commands on [Insomnia](https://insomnia.rest/download):

▶ Create (POST):
```url
  http://localhost:3000/users
```
```json
{
  "name": "test_name"
}
```

<br>

#### ▶ Read (GET):
- ##### all:
```url
  http://localhost:3000/users
```
- ##### one:
```url
  http://localhost:3000/users/1
```

<br>

▶ Update (PUT):
```url
  http://localhost:3000/users/1
```
```json
{
  "name": "name_test"
}
```

<br>

▶ Delete (DEL):
```url
  http://localhost:3000/users/1
```
