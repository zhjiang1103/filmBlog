# FilmBlog
 ⚡ Create a working full-stack app with React and Express in minutes by running your client using Vite, your server using Express, and dumping your db in the template ⚡

## Step-by-Step Instructions - To use this project as your starting point  🚀  
### To create the whole project


1. Go to your source directory in your terminal and run the command `https://github.com/zhjiang1103/filmBlog.git NAMENEWDIRECTORY`

2. To clean the owner git out of the main directory, run the command `rm -rf .git`

3. Run the command `git init` to start your own git track 

4. Go to the server folder in the project (`cd server`) and run the command `npm install`

5. Inside your server folder, open the file `.env.example` and copy the correct option for your configuration found there to your new .env file. 

Here is what your `.env` might look like:

```
DB_URI="postgresql://localhost/DATABASENAME"
``` 

6. Go to the client folder in the project (`cd .. and cd client`) and run the command `npm install`

🔎 The `npm install` command installs the required dependencies defined in the package.json files and generates a node_modules folder with the installed modules.

7. If you want to run both servers concurrently (which is already a npm dependency on the server) you can keep the script in the package.json in the server that reads `"dev": " concurrently 'npm start' 'cd .. && cd client && npm run dev' "`. If you run the command `npm run dev` from within your server, both the client and backend servers will start.

10. Go to localhost:5173 and you should see something like this  💪

![You will something like this in your terminal.](https://github.com/zhjiang1103/filmBlog/blob/individualFilm/Screen%20Shot%202023-10-20%20at%204.43.21%20PM.png?raw=true)

⚡ **Notes** ⚡  
* React requires **Node >= 14.0.0** & **npm >= 5.6**
* Please note that your backend server will run from `port 5000`, and your frontend React server will run from `port 5173` (the default Vite port).

* Confused about why use Vite? 🤔 → Check out the [Create a new React app with Vite](https://scrimba.com/articles/create-react-app-with-vite/)

⚙️ Links that you could need:

* The instructions for [pg](https://node-postgres.com/apis/pool)  
* Setup [postgres correctly](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md)


