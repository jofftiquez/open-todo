# open-todo

Open source real-time collaborative todo application using firebase 🔥.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Usage

A `.config.json` file is required to run this application. This config file contains the app settings and **firebase** config. 

**.config.json template**

```json
{
  "name": "ToDo na to!",
  "firebase": {
    "apiKey": "...",
    "authDomain": "...",
    "databaseURL": "...",
    "projectId": "...",
    "storageBucket": "...",
    "messagingSenderId": "..."
  },
  "theme": {
    "primary": "#43A047",
    "secondary": "#424242",
    "accent": "#82B1FF",
    "error": "#FF5252",
    "info": "#2196F3",
    "success": "#4CAF50",
    "warning": "#FFC107"
  }
}
```