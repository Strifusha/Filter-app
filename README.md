Vehicle Information App

## Description
This project is a Next.js application that allows users to fetch and display vehicle types and car models based on the selected make and year. The application utilizes Tailwind CSS for styling and supports dark mode.


## Features
- Fetch and display vehicle types
- Select vehicle makes and years
- Display car models based on the selected make and year
- Responsive design with Tailwind CSS
- Dark mode support
- Requirements
- Node.js (version 14 or higher)
- npm or Yarn


## Setup
1. Clone the repository:
git clone [https://github.com/your-username/your-repo.git]
cd your-repo

2. Install dependencies:
npm install
# or
yarn install

3. Set up environment variables:
Create a `.env.local` file in the root directory of the project and add the following variables:

NEXT_PUBLIC_VEHICLE_TYPES_API_URL=[https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json]

NEXT_PUBLIC_CAR_MODELS_API_URL=[https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear]

4. Run the development server:
npm run dev
# or
yarn dev

Open your browser and navigate to http://localhost:3000 to view the application.

## Folder Structure
/pages: Contains Next.js page components and API routes.
/components: Reusable UI components like dropdowns, loaders, and result displays.
/styles: Contains global CSS and Tailwind configuration.
/public: Static assets such as images and fonts.
/utils: Utility functions and API integration logic.