# Country Explorer

## Overview

This React frontend is designed to interact with the Countries API, a Node.js server providing information about countries using the REST Countries API. It allows users to query country details and embed Google Maps for specific locations.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [License](#license)

## Project Overview

The React Country Information App is designed to display detailed information about various countries. It leverages React components to organize and present data, including time zone, currency details, geographical location, and more. The app also incorporates interactive maps to visualize the geographical position of the selected country.

## Features

- **Country Information:** View detailed information about a selected country.
- **Time Display:** Display the current time in the selected country's time zone.
- **Flag and Emblem:** View the flag and coat of arms of the selected country.
- **Membership and Independence Status:** Display whether the country is a UN member and independent.
- **Statistics Cards:** Present key statistics such as capital, continent, sub-region, population, languages, and more.
- **Interactive Maps:** Visualize the geographical location of the selected country.

### Dependencies

- Node.js installed on your machine
- NPM (Node Package Manager) installed

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to cloned repository on the local machine and run

   ```bash
   npm install
   ```

3. Creating .env file in root directory specifing the API-endpoints.

   ```bash
   REACT_APP_API_URL="https://country-api-ez0o.onrender.com/?country="
   REACT_APP_EMBED_API_URL="https://country-api-ez0o.onrender.com/embed-map"
   ```

4. Run application

- To launch the application on local machine, navigate to root directory of project and run the following command:
  ```bash
  npm start
  ```
- Open your browser and navigate to http://localhost:3000 to view the app.

# Licence

This project is licensed under the ISC License.
