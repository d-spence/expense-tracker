# **Expense Tracker**

Fullstack MERN application for tracking income and expenses. Users can add or delete transactions and the app will display calculated balance, income and expense values. The added transactions are saved to a Mongo database and retrieved on page load.

### **Config**

You should create a `config.env` file within the `/config` folder which the dotenv package will load when the server starts. This file should contain these values:

- *NODE_ENV* (set to production or development)
- *PORT* (set manually or obtain from chosen cloud platform)
- *MONGO_URI* (mongo atlas database uri)

### **Build**

In your terminal, navigate to the `/client` directory and run the `npm run build` command. This will generate the necessary build files in `/client/build` for deployment on the Node Express server. Also set `NODE_ENV=production` in your `config.env` file. Doing this tells the server to send the build directory's `index.html` when the site's `/` (root) address is visited.

### ***API***

The API can be accessed through the *`/api/v1/transactions`* url while the server is running. The allowed routes are as follows:

- GET *`/api/v1/transactions`* : Gets the list of transactions, returned as JSON.
- POST *`/api/v1/transactions`* : Add a transaction by sending *text:String* and *amount:Number* values in request body.
- DELETE *`/api/v1/transactions/:id`* : Delete a transaction with the matching *id* value.

### **Attributions**

This app is based on a tutorial by [Traversy Media](https://www.youtube.com/watch?v=XuFDcZABiDQ&t=1s) on YouTube, but has been modified with differences in code and features.
