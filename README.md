# file-share-pern
### To start server do:
cd server  
npm run start
### To start client do:
cd client  
npm start
## AFTER START PROJECT UPDATE .env IN SERVER FOLDER!
### TABLES
###### files
id - integer  
name - character varying - 255  
path - character varying - 255  
date - character varying - 255  
owner - character varying - 255  
###### problems
id - integer  
email - character varying - 255  
problem - text  
isresolved - boolean  
answer - text  
title - character varying - 255
###### users
id - integer  
name - character varying - 255  
email - character varying - 255  
role - character varying - 255  
password - character varying - 255  
key - character varying - 255  
