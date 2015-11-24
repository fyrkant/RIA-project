**This is the project-repository for the course RIA-development with Javascript.**

Project description
This spring I started working with an advertising page for freecycling, i.e adverts with things that people
 who wants to give away to someone else instead of throwing them away. I finished most of it but I had one thing remaining,
 the login functions. As that is something very crucial to a site like that I want to explore the world of login
 during this project.


I will work with a simple form for creating adverts, a loginsystem that connects the users to only their adverts with
the possibility to remove or change an advert.

I will work in JavaScript, using ReactJS for the front-end and Firebase for the advert/user-database. The project will be published
with Github Pages.


Usecases:

View adverts
1. Navigate to firstpage
2. List of the three last adverts are displayed
3. Click on "view all"
3. All adverts are listed

================
CRUD-witout logged in
Create advert
1. User choose "create advert" from firstpage
2. User is redirected to login-page
3. After successful login: user is directed to newThing-form

Update advert
1. User navigate to hens advert and choose "update"
2. User is redirected to login-page
3. After successful login: user is directed to advert in update-mode
 
Delete advert
1. User navigate to hens advert and choose "delete"
2. User is redirected to login-page
3. After successful login: user is directed to advert in delete-mode

===================
Login
1. User clicks in login
2. User provides correct user-credentials
3. User is logged in
4a. If user has adverts, a list of adverts is displayed together with link to "register new advert"
4b. If user has no adverts, a link to "register new advert" is displayed

===================
CRUD-after login
Same as above but without login-redirect...

===================

*Display advert*

Title

Photo

Name

Description

"Login to update or delete"
