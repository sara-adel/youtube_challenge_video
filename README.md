# Youtube Channels videos 
it's is a project to get list of videos retrieved from integrated YouTube channel.

# Description
videos is integrated with Youtube Api to list videos of specific channel and show (Thumbnail, title , date of publish) 
of each video then show details of selected video like ((Title - Upload date - Duration - number of likes - number of
views - Description - Thumbnail)

# Tools 
- Design :
[HTML](https://www.w3schools.com/html/) and [CSS] [Bootstrap](https://getbootstrap.com/)
- Code :
[JavaScript](https://www.w3schools.com/js/default.asp) with Angular framwork 

# Application Structure
```
 ├── index.htmt                 # Application entry point 
    ├── assets                  # Contain images and application assets 
    |
    |── css                     # Contain Css design classes and bootstrap file 
    |
    |── js                      # Contain core of application
    |     ├── assets            # Contain js libraries (angular files and jquery and bootstrap)
    |     ├── controllers       # Contain js angular controller 
    |     ├── directives        # Contain js angular Html directives (star rating ) 
    |     ├── filters           # Contain js angular Html custom filter (convert duration from Iso formate) 
    |     ├── services          # Contain js angular services (youtube , localstorage)
    |     ├── mainScript.js     # main js script to define Application 
    |
    |── templates                     # Contain html design (main page and details page)
    |
    └── ...

```

# Run Application 

```
go to localhost folder 
git clone this repo 


```
