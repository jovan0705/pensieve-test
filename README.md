## RUNNING BACKEND
1. Move to backend directory with `cd backend` command on terminal.
2. `npm i` to install the dependencies.
3. `npm i -D nodemon sequelize-cli` to run development dependencies.
4. Run `npx sequelize-cli db:create` to create the database.
5. Run `npx sequelize-cli db:migrate` to migrate the tables.
6. Run `npx sequelize-cli db:seed:all` to seed the initial datas.
7. Run `npm run dev` to run the server.

NOTE: You can skip part 2 and 3 if the package already installed.
## RUNNING FRONTEND
1. Move to backend directory with `cd frontend` command on terminal.
2. `npm i` to install the dependencies.
3. Run `npm start` to run the server.

NOTE: You can skip part 2 if the package already installed.

### NOTE - You have to use node with version >= 18
