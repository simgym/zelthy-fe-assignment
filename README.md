<!-- DO NOT REMOVE EXISTING CONTENTS OF THIS FILE, EVEN IN YOUR REPOSITORY -->

# Frontend assignment repository template

This is a template repository for submitting assignment for the Frontend developer internship at Zelthy.

Assignment link: https://zelthy.com/assignments/frontend-intern

Submission form: https://forms.gle/o8tUdshRWS33tg8X6

## Vite React TypeScript Starter

A starter project using Vite, React, TypeScript, and Tailwind CSS.

### Features

Fast development with Vite

Type safety with TypeScript

Styling with Tailwind CSS

## Installation & Setup

### Clone the Repository

1. If you are reading this on GitHub, click the "code" dropdown in the top right corner of the page and select "Create a new repository".

2. Next you will be redirected to create a new repository page on GitHub with this repository as a template. Fill the repository name and description and click "Create repository".

3. And thats it! A new repository using this template has been created for you!

### Install Dependencies

npm install

### Start Development Server

npm run dev

## Configuration

### Tailwind CSS

Ensure Tailwind CSS is properly set up:

npx tailwindcss init -p

If styles are not working, check tailwind.config.js and ensure the content paths are correct.

## Usage

- **Header Features**

  - Contains navigation options and a theme toggle button.

- **User List & Availability**

  - By default, you'll see a list of users.
  - Click on a user to view their available time slots based on the selected date in the calendar.

- **Managing Your Schedule**

  - Click on **"Manage my schedule"** in the header to create, update, or delete your availability slots.

- **Scheduling Settings**

  - **Your Timezone:** Set your preferred timezone.
  - **New Slot Time:** Define your availability slots.

- **Copying Available Slots**
  - To copy time slots for a specific day, click the **Copy All** under the **Available Slots** section.
  - The copy button appears only if slots exist for that day.

## Happy coding!
