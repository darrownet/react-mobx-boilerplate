# React Mobx Boilerplate
A modest boilerplate for the aspiring developer who would like to implement Mobx for application level state management.

---

## Developer Requirements
+ Node 8.12.0 or higher  
+ NPM 6.4.1 or higher 
+ Yarn 1.13.0 or higher (optional)
+ Operating System: Mac OSX 10.10 or higher/Windows 7 or higher  

---

## Installation
Clone the repo and run either of the following
+ npm install
+ yarn install

##### Setup
Create a .env.default and a .env file at the root level of the project.

Populate the .env.default file with the following...  
+ API_BASE_URL=  
NODE_ENV=  
PORT=

Populate the .env file with the following...  
+ API_BASE_URL=TBD  
NODE_ENV=development  
PORT=3005

Once the .env and .env.default files are created run **npm start**

---

## Development
##### Scripts
+ **npm run build:** Runs the **clean-build** script and then creates a new build folder

+ **npm run clean-build:** Deletes the build folder

+ **npm run local:** Starts webpack dev server on localhost port 3030
    
+ **npm run server:** Starts the Application Server on localhost port 3005

+ **npm start** Starts webpack dev server on localhost port 3030 and the Application Server on localhost port 3005
    + A browser window should launch with the url **localhost:3030/**. The URL can be changed to preview the Application Server - **localhost:3005/**
    + NOTE: In development mode the Application Server, loads the css and javascript compiled by webpack


##### Workflow
###### development mode (mostly for developing the React App)
- Set the NODE_ENV in the .env file to development
- Run the command **npm run local**. if you'd like to develop against the Application Server in addition to the webpack dev server, **npm start**
- A browser window should open at http:localhost:3030
- The react application should run
- As you you work on the application, styling changes are instantly propagated to the browser (JavaScript/React updates will most likely update in the console and require a manual browser refresh - this is intentional as it disincentivizes monkey patching development behavior)

###### production mode (mostly for developing the server)
- Set the NODE_ENV in the .env file to production
- Run the command **npm run build** (VERY IMPORTANT! You will not be able to test a production scenario if you do not run a build first.)
- Run the command **npm run server**
- Open browser window at **localhost:3005/** to preview the application in production mode
- When making changes to server.js the server should restart automatically
---

## Troubleshooting:
Kills all node processes: pkill -f node
