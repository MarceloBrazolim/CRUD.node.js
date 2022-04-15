
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
  - _URL_
```url
  http://localhost:3000/users
```
  - _JSON_
```json
{
  "name": "test_name"
}
```

▶ Read (GET):
#### all:
  - _URL_
```url
  http://localhost:3000/users
```

#### one:
  - _URL_
```url
  http://localhost:3000/users/1
```

▶ Update (PUT):
  - _URL_
```url
  http://localhost:3000/users/1
```
  - _JSON_
```json
{
	"name": "name_test"
}
```

▶ Delete (DEL):
  - _URL_
```url
  http://localhost:3000/users/1
```
