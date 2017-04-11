# **Club Manager**
#### Brendan Grubb, 4/7/2017


&nbsp;
## Description
**Club Manager** is a Javascript application that demonstrates my ability to build a project using the Angular framework. With this application, a user can manage the membership roster of a club. This app's functionality is demonstrated with a sample organization called Star Trek Club: a group of Trek fans that get together monthly to watch and discuss episodes from the Star Trek franchise. A user can view a list of all members of Star Trek Club, plus member detail pages where their profile is flushed out. An admin is able to add, edit or delete members. Check out a live version of the site deployed via Firebase Hosting [here](club-manager-e168f.firebaseapp.com)!


&nbsp;
## Setup/Installation Requirements
##### _To view and use this application:_
* It is necessary to download and install the following programs to use this application
  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (with NPM)
  * [Bower](https://bower.io/)
  * [Typescript](https://www.npmjs.com/package/typescript)
  * [Angular2 CLI](https://github.com/angular/angular-cli)
* Go to my [Github repository](https://github.com/Brendangrubb/meal-tracker)
* Download the zip file via the green button and unzip the file
* Open Terminal and navigate to **_club-manager-master_** project folder
* Open the application in Atom (or text editor of choice)
  * Create a file with the following path _src/app/api-keys.ts_
  * Add the following code:
      _export var masterFirebaseConfig = {<br>
      &nbsp;apiKey: "YOUR API KEY HERE",<br>
      &nbsp;authDomain: "YOUR DB DOMAIN HERE",<br>
      &nbsp;databaseURL: "YOUR DB URL HERE",<br>
      &nbsp;storageBucket: "YOUR STORAGEBUCKET INFO HERE,<br>
      &nbsp;messagingSenderId: "YOUR SENDER ID HERE"<br>
    };_
  * Generate credentials from Firebase (or database of choice) and add to api-keys.ts file
* Type the following commands in Terminal:
  * npm install
  * bower install
  * ng serve
* Visit [http://localhost:4200](http://localhost:4200)
* The application will be ready to use!


&nbsp;
## Planning

#### Basic UX
* A user can view a list of current members of Star Trek Club. A user can click on any member from that list for a detail view of that member profile. A user can filter the list of current Star Trek Club members to exclude members who have not seen all episodes of the franchise. An admin user can add, delete or update members of Star Trek Club.

#### MVP Checklist
  * **Initial Files**
    * create project using cli
    * add and link repository
    * write README
    * install extra dependencies  (bootstrap --add to angular-cli.json, angularfire2 firebase --add to tsconfig.json)
    * generate app.routing.ts
    * basic page layouts, minimal styling as I generate components...to make staring at this project for 8 hours a little more pleasant

  * **About, Header and Splash Page Routes**
    * generate about-layout and dummy content
    * generate header-nav bar with links to about, member list and admin
    * generate splash page-welcome page with club image

  * **Create Model and Firebase**
    * generate and populate member.model (name, picture, bio, favorite series, amount of franchise watched)
    * add seed file
    * set up Firebase
      * generate DB on Firebase site
      * add credentials to api-keys.ts, add to module
      * import seed data, change rules

  * **Member List Service and Route**
    * generate member list component
    * add to router
    * print member list on route
    * generate project.service
    * migrate get member list function to Service

  * **Member Detail Route**
    * generate member detail component
    * add dynamic routing path to router
    * link members from list on member list component
    * inject project.service
    * print dynamic member details on page

  * **Add Admin Route**
    * generate admin component
    * add to router
    * inject project.service
    * use service to list all members
    * generate add new member component
      * use service to save to DB
    * generate edit member component
      * use service to edit DB
    * add delete member functionality to member list component

  * **Add Pipe**
    * generate superfan filter pipe
    * employ on member list component

#### Style
  * change icon
  * choose global font
  * set media page sizes
  * layout (forms, columns)
  * color scheme

#### Refactor
  * try to break site
  * check dryness of code
  * delete console.logs
  * check spacing
  * doublecheck README for setup instructions and other information
  * amend UI and add uncompleted extra projects to 'Future Versions' list


&nbsp;
## Known Bugs
* No known bugs

&nbsp;
## Technologies Used
* Angular2 (w/ cli)
* Firebase
* Typescript
* Node and npm
* Bower
* CSS
* Bootstrap
* HTML

&nbsp;
_If you have any questions or comments about this program, you can contact me at [brendangrubb@gmail.com](mailto:brendangrubb@gmail.com)._

Copyright (c) 2017 Brendan Grubb

This software is licensed under the GPL license
