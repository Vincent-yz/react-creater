# react-creater

This package is about to create react app, and was made base on [create-react-app](https://github.com/facebookincubator/create-react-app#readme)

## get start

### install

`npm install -g react-creater`

### creating your app

`rc create fileName`

### start server

`rc start`

### build

`rc build`

## modify seed project
when you run `cr create` and a new project was created, it's acturally a copy of a default project in this package.
And if you're not pleasure with default project, you can even change it into whatever you want.

You could find the default project at `GlobalPath/rc/seeds`.
Remind that you'd better not to remove below files:
'seeds/index.js',

'seeds/build/index.html'
for the reason that they are needed to run your project

