# Reactivities
This project is a social media styled application to create and attend activities. Built with .NET Core &amp; React with Typescript.

This project is hosted on Heroku at https://reactivities-project.herokuapp.com/

## Overview
This project allows users to register an account and create and manage activities. Users can attend other users' activities, leave comments, upload photos to their profile, follow other users, and much more. 
![image](https://user-images.githubusercontent.com/45472470/164537869-63a37a65-283c-49c8-bea7-b648c0feb402.png)

![image](https://user-images.githubusercontent.com/45472470/164538185-d11c27e9-08b5-4157-8bc9-e8ca4894152d.png)



## Setup
To set up this project locally, clone the repository and open in the code editor of your choice. This was created in Visual Studio Code. 

To run the API server, cd into the API folder and run the command 'dotnet watch run'. It will be available on localhost:5000. 

To run the client in development mode, cd into the client-app directory and first run 'npm install' to install the corresponding packages. Start the client on localhost:3000 with 'npm start'.

In the client-app directory, run the 'npm run build' command to build the app for production on localhost:5000.

## Details and Features
* A multi-project ASP .NET Core solution that follows Clean Architecure and the CQRS and Mediator pattern

![image](https://user-images.githubusercontent.com/45472470/164535371-6c734920-ffe4-44fb-8ed5-c02e2a06b4b3.png)

* Built with the .NET Core Web API and React with Typescript with the help of create-react-app
* .NET Core identity is used for authentication across the app
* Integrated wth .NET Core SignalR to provide real time web communication with the comments feature
* Uses MobX as a state managment library for the client
* Entity Framework Core used as the ORM
* Initially used SQLite as DB and then moved to Postgres for production
* Semantic UI React provides the user with a sleek UI
* Integrated Cloudinary to create a photo upload widget with dropzone and cropper components
* Ability for users to optionally create account through Facebook
* Email verification functionality with the help of SendGrid
* Holder of an 'A' security rating courtesy of https://securityheaders.com/


