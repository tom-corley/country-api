# Country API 

## Overview

A Country API that allows you to add, remove and view countries. 

## Getting Started

### Prerequisites

- Node.js
- NPM
- A cloud-based database hosting platform, such as Supabase 
  
### Installation

1. Clone the repository

    - Run `git clone https://github.com/yourusername/country-api.git` in the CLI of your choice

2. Navigate to the project directory

    - Navigate to the project with `cd country-api`

3. Install dependencies

    - Run `npm install` to install all dependencies for the project
4. Setup your database

  - Create a database instance on [Supabase](https://supabase.com/) (or other cloud-based database hosting platforms)
  - Retrieve the database URL & copy it
  - Create a `.env` file in the root directory with the following:
  
    ```
    DB_URL=<your_database_url>
    ```
    
  - Replace `<your_database_url>` with the database URL you just copied
  - Run `npm run setup-db` to setup the database
5. Setup your port
  - Add a `PORT` key assigned to the port of your choice in your `.env` file. 3000 is reccomended for this project.
  ```
  PORT=<your-port-here>
  ```
6. Run the server
  - Run `npm run dev` to run the server in development mode
  - Run `npm run start` to run the server in production mode

### Endpoints
    - `GET /countries` - Retrieve all countries
    - `GET /countries/:id` - Retrieve a country by ID
    - `POST /countries` - Add a new country
    - `DELETE /countries/:id` - Delete a country by ID
    - `PATCH /countries/:id` - Update a country by ID

