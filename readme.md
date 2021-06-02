# Expense Tracker

Fullstack MERN application for tracking income and expenses. Users can add or delete transactions and the app will display calculated balance, income and expense values. The added transactions are saved to a Mongo database and retrieved on page load.

### Config

You should create a 'config.env' file within the /config folder which the dotenv package will load when the server starts. This file should contain these values:

- NODE_ENV (set to production or development)
- PORT (set manually or obtain from chosen cloud platform)
- MONGO_URI (mongo atlas database uri)

### Attributions

This app is based on a tutorial by [Traversy Media](https://www.youtube.com/watch?v=XuFDcZABiDQ&t=1s) on YouTube, but has been modified with differences in code and features.
