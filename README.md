# WEB103 Project 3 - After Hours

Submitted by: **Sumaiya Shumu**

About this web app: **After Hours is a virtual community space where users can explore different locations and discover events happening at each location. Users can select locations through a visual interface, view location-specific events, and browse all available events. The application uses React, Express, and a PostgreSQL database hosted on Render.**

Time spent: **6 hours**

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x] **NOTE: The walkthrough includes a view of the Render dashboard demonstrating that the PostgreSQL database is available**
  - [x] **NOTE: The walkthrough includes a demonstration of the table contents using `SELECT * FROM events;`**
- [x] **The web app displays a title**
- [x] **Website includes a visual interface that allows users to select a location they would like to view**
  - [x] **A visual interface is used instead of a non-visual list of links**
- [x] **Each location has a detail page with its own unique URL**
- [x] **Clicking on a location navigates to its corresponding detail page and displays a list of all events from the `events` table associated with that location**

## Optional Features

The following **optional** features are implemented:

- [x] An additional page shows all possible events
- [ ] Users can sort or filter events by location
- [ ] Events display a countdown showing the time remaining before that event
- [ ] Events appear with different formatting when the event has passed

## Additional Features

The following **additional** features are implemented:

- [x] Responsive event card layout
- [x] Location-specific event retrieval through the API
- [x] Dark event cards for improved readability
- [x] Navigation between the Home and Events pages
- [x] Event dates and times are formatted for easier reading

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='YOUR_GIF_LINK_HERE' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **ScreenToGif**

## Notes

One of the main challenges encountered while building the app was connecting the React frontend to the Express backend and PostgreSQL database hosted on Render.

I also had to configure environment variables and the external Render database connection correctly so that the local Express server could retrieve data from PostgreSQL.

Another challenge was connecting each visual location to its corresponding database record and ensuring that each location page displayed only the events associated with that location.

## License

Copyright 2026 Sumaiya Shumu

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.