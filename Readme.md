# Polling Application

A simple React Polling Application, where users are given few choices, can vote for one,and check the **trend** of the poll.


---

## Requirements

For development, you will require need Node.js and postgres installed in your system.

#### Node can be installed from : [NodeJS](https://nodejs.org/en/)
#### Postgresql can be installed from : [NodeJS](https://www.postgresql.org/)

---

## Libraries/Frameworks Used
1. [ReactJS](https://reactjs.org/) 
    * React was used to design the frontend of the project.
2. [ExpressJS](https://expressjs.com/)
    * Express is a Node.js web application framework that provides a robust set of features for web and mobile applications.Backend Routing in this project was done using express.
3. [node-postgres](https://www.npmjs.com/package/pg/)
    * PG a library that helps us with postgres operations.
4. [ChartJS](https://www.chartjs.org/)
    * ChartJS was used to display line charts and bar charts in our project.
4. [React-Redux](https://react-redux.js.org/)
5. [Sequelize](https://sequelize.org/master/index.html)


---


## Installation
    * Server 
        -cd pollingAppServer
        -npm install

        NOTE : Don't change the server port (4000)
        
    * client
        -cd polling-frontend
        -npm install
        -npm run build
        
    *Setup the database
      (Make sure postgres is installed and Sequelize is installed globally )
       -cd pollingAppServer
       - Change the postgress Username and password in './config/config.json'.
       -Sequelize db:create
       -Sequelize db:migrate

## Running the App
  
    * Start the server
        -cd pollingAppServer
        -npm start
    * Start the react app
        - cd polling-frontend
        - serve -s build -g 3000 (make sure serve is installed globally)
_Go to  [localhost](http://localhost:3000/)_

_yaay !!!_

---


    

