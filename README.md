
# MediManage

MediManage is a full-stack web application designed to streamline the management of medical records, patient information, and appointment scheduling for healthcare institutions. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), MediManage offers a user-friendly interface for both administrators and patients, ensuring efficient handling of medical data.

## Features

- **Role-Based Authentication:** Secure login and authentication system with different roles (Admin, Patient).
- **Appointment Management:** Patients can book, view, and manage their appointments with ease.
- **Medical Records:** Centralized storage and retrieval of patient medical records.
- **Dashboard:** Comprehensive dashboard for admins to manage patients, appointments, and view analytics.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend (Main Application):** React.js, Tailwind CSS
- **Frontend (Dashboard):** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Hosting:** Render (Backend), Render (Frontends)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aman-gupta-16/MediManage.git
   cd MediManage
   ```

2. **Backend Setup:**
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and configure your environment variables:
     ```env
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     COOKIE_EXPIRE=7
     FRONT_URL=http://localhost:5174
     DASHBOARD_URL=http://localhost:5175
     ```
   - Start the server in development mode:
     ```bash
     npm run dev
     ```

3. **Frontend (Main Application) Setup:**
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

4. **Frontend (Dashboard) Setup:**
   - Navigate to the `dashboard` directory:
     ```bash
     cd dashboard
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the dashboard development server:
     ```bash
     npm run dev
     ```

5. **Access the Application:**
   - Main Frontend: `http://localhost:5173`
   - Dashboard Frontend: `http://localhost:5174`
   - Backend API: `http://localhost:3000`

## Deployment on Render

### 1. **Backend Deployment:**
   - Deploy the backend on Render by connecting your GitHub repository and selecting the `backend` directory.
   - Ensure you set up the environment variables (e.g., `MONGO_URI`, `JWT_SECRET`) in the Render dashboard.
   - Set the build command to `npm install` and the start command to `npm run dev`.

### 2. **Frontend (Main Application) Deployment:**
   - Deploy the main frontend on Render by connecting your GitHub repository and selecting the `frontend` directory.
   - Set the build command to `npm install` and the start command to `npm run dev`.

### 3. **Frontend (Dashboard) Deployment:**
   - Deploy the dashboard frontend on Render by connecting your GitHub repository and selecting the `dashboard` directory.
   - Set the build command to `npm install` and the start command to `npm run dev`.

## Usage

- **Admin Role:**
  - Manage patient records.
  - View and manage appointments.
  - Access the admin dashboard for insights and analytics.

- **Patient Role:**
  - Register and login to access personal medical records.
  - Book and manage appointments.
  - Update profile information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Aman Gupta**
  - [GitHub](https://github.com/aman-gupta-16)
  - [LinkedIn](https://www.linkedin.com/in/aman-gupta-16/)
```
