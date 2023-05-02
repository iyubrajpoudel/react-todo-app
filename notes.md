# Publish React App to Github Pages

## Install gh-pages

```
npm install gh-pages
```
or 
```
npm install gh-pages --save-dev
```

## Add github repository path to homepage property

In the package.json file, add a homepage property that follows this structure:  
http://{github-username}.github.io/{repo-name}

In my case its : https://github.com/iyubrajpoudel/react-to-do-app

I will add a homepage property with value as repo path

```json
"homepage": "https://github.com/iyubrajpoudel/react-to-do-app"
```

## Add predeploy and deploy scripts to scripts property in package.json

```
"scripts": {
    ...
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build"
}

```

package.json will looks like

```json
{
  "name": "react-to-do-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "gh-pages": "^5.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "homepage": "https://github.com/iyubrajpoudel/react-to-do-app"
}
```

## Commit changes

```bash
git add .
```
```bash
git commit -m "setup gh-pages"
```
```bash
git push
```

## Deploy using deploy script

Simply run `npm run deploy` command to deploy to github pages.

```
npm run deploy
```