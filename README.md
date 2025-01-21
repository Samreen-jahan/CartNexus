# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# MERN Stack Product Management Application
🛠️ Project Overview
This is a MERN Stack application designed for managing products. It provides functionality to create, read, update, and delete (CRUD) products. Users can switch between light mode and dark mode for an improved user experience.

# 🚀 Features
# Product Management:

Create a new product with metadata (name, price) and an image URL.
View a list of all products with image previews.
Update product details, including name, price, and image URL.
Delete products from the list.
# User Interface:

Clean and responsive UI built using React.
Light/Dark Mode Toggle for better accessibility.
# Backend Logic:

Products are stored in MongoDB with metadata 
Supports seamless CRUD operations through Node.js and Express.

# 🧑‍💻 Tech Stack
# Frontend:

React
Zustand (for state management)
Tailwind CSS (for styling)
Backend:

# Node.js
Express.js
Database:

MongoDB (NoSQL)


🌟 Key Features
# Product Creation:

Accepts image URLs instead of file uploads.
Metadata includes product name and price.
Images are fetched, encoded in Base64, and stored in MongoDB.
# Product Listing:

Fetches and decodes Base64 images for display.
Lists all available products with their metadata.
# Update Product:

Allows users to edit product details and update image URLs.
# Delete Product:

Deletes the selected product from the database and UI.
# Light/Dark Mode:

Toggle between light and dark themes for accessibility.



# 🛠️ Installation and Setup
Clone the repository:

git clone <repository-url>
cd <project-folder>

# Install dependencies:

# For the backend:

cd backend
npm install
# For the frontend:

cd frontend
npm install

Configure the environment:

Create a .env file in the backend folder with the following:
plaintext
Copy
Edit
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
# Run the application:

# Start the backend:

cd backend
npm start
# Start the frontend:

cd frontend
npm start
Access the app at: http://localhost:3000

# 🔮 Future Enhancements
Add file upload functionality with Multer for uploading images directly.
Implement advanced image similarity using machine learning.
Add pagination for large product lists.
Enhance the UI with animations and better accessibility.
# 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.