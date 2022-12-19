In windows run (windows R) type cmd for (command line)

check node installation
node - v
if not installed download it from the nodejs website (https://nodejs.org/en/) and install it as per your Operating System.


check for typescript installation
tsc -v

Error if not typescript not installed
'tsc' is not recognized as an internal or external command,
operable program or batch file.

if not then run the following command
npm i --g typescript (-- means if the older version is installed it will overwrite it)
or
npm i -g typescript (-- means if the older version is installed it will overwrite it)
or
npm install --g typescript (-- means if the older version is installed it will overwrite it)
or
npm install -g typescript (-- means if the older version is installed it will overwrite it)

All are  the same commands will do the same job

check for VScode installation
code<space><dot>

if you want to open any folder of windows in the cmd then type cmd in the address bar of the explorer while in that folder the command prompt will be open with that address. In my case it is D:\Panaverse Training\TypeScript\practise\calculator

now initializing the tsconfig.json file

in command prompt pass the command

tsc --init

the command line will show the following details

Created a new tsconfig.json with:                                                                                         
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig


now initializing the node package manager 

npm init -y

the command line will show the following details

Wrote to D:\Panaverse Training\TypeScript\practise\calculator\package.json:

{
  "name": "calculator",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

now goto tsconfig.json

and ammend the following 


please note that the target and module are uncommented 

from "target": "es2016" to  "target": "ES2022"  change number 1    
from "module": "commonjs" to "module": "NodeNext" change number 2

<<<<<<< HEAD
please note that the moduleresolution is commented first uncomment the 
=======
please note that the moduleResolution is commented first uncomment the 
>>>>>>> 8a8f48333da35daa38fb9a0aff280b6fa8d0aa1c

"moduleResolution": "node"

and then change it 

from "moduleResolution": "node" to "moduleResolution": "NodeNext"
 
and save the file

now in package.json make the following changes.

add the new line after "main": "index.js",

"type": "module",

Now add types of the nodes in the project from the command line.

npm i @types/node -D  		(developer dependency added in the project due to -D)
npm i @types/inquirer -D  	(developer dependency added in the project due to -D)
npm i @types/chalk -D  		(developer dependency added in the project due to -D)
npm i @types/chalk-animation -D (developer dependency added in the project due to -D)

check package.json

"devDependencies": 
{
"@types/chalk": "^2.2.0",
"@types/chalk-animation": "^1.6.1",
"@types/inquirer": "^9.0.3",
"@types/node": "^18.11.9"
}


Now add inquirer package in the project from the command line.

npm i inquirer
npm i chalk
npm i chalk-animation

check package.json

"dependencies": 
{
"chalk": "^5.1.2",
"chalk-animation": "^2.0.3",
"inquirer": "^9.1.4"
}

Now create .gitignore on the main stream where all the files are lying telling git and mention the packages which are not meant to be uploaded on the github.

if accidently deleted the node_modules file then just npm -i in the cmd line will install it again.

tsc && node index.js

one line compile and run the project."# CLI-Calculator" 
"# CLI-Calculator" 

to upload the file as a package to npm

npm login
provide username and password to login
once logged in 

type command

npm publish --access=public ( if the naming convention is provided in my case its(@esjayeff/calculator) if the calculator name already been taken by multiple users then this is the way to do the job.

else 

npm publish (is enough to do the job)

