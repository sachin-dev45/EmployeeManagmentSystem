🏢 Employee Management System

A full-stack Employee Management System designed to efficiently manage employee data with secure authentication, scalable backend architecture, and a responsive frontend interface.

This system is built using Spring Boot for backend services and React.js for frontend UI, following REST API architecture and modern software development practices.

📌 Project Overview

The Employee Management System enables organizations to manage employee records efficiently, including user authentication, data operations, and structured API communication between frontend and backend systems.

✨ Key Features
🔐 Authentication & Security
User Registration and Login
Secure password handling
Email-based user identification
👥 Employee Management
Create employee records
View employee details
Update employee information
Delete employee records
⚙️ System Features
RESTful API architecture
DTO-based data handling
Pagination support for large datasets
Derived query methods using Spring Data JPA
🎨 Frontend Features
Responsive UI using React
API integration using Axios
Clean and user-friendly interface
Component-based architecture
🏗️ System Architecture
Frontend (React.js)
        ↓
REST API (Spring Boot)
        ↓
Service Layer
        ↓
Repository Layer (JPA/Hibernate)
        ↓
MySQL Database
🛠️ Tech Stack
Backend
Java 17+
Spring Boot
Spring Data JPA
Hibernate
MySQL
REST APIs
Frontend
React.js
JavaScript (ES6+)
Axios
HTML5 / CSS3 / Bootstrap
Tools & Environment
Maven
Node.js & npm
Git & GitHub
Postman (API Testing)
📁 Project Structure
EmployeeManagmentSystem-Project
│
├── Backend
│   ├── src/main/java
│   ├── src/main/resources
│   ├── pom.xml
│   └── application.properties
│
├── Frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── node_modules
│
└── README.md
⚙️ Backend Setup (Spring Boot)
1. Configure Database

Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
2. Run Backend
mvn clean install
mvn spring-boot:run

Backend runs at:

http://localhost:8080
💻 Frontend Setup (React)
1. Install Dependencies
cd Frontend
npm install
2. Start Application
npm start

Frontend runs at:

http://localhost:3000
🔗 API Documentation
Authentication APIs
Method	Endpoint	Description
POST	/register	Register new user
POST	/login	Authenticate user
Employee APIs
Method	Endpoint	Description
GET	/employees	Fetch all employees
GET	/employees/{id}	Fetch employee by ID
POST	/employees	Add new employee
PUT	/employees/{id}	Update employee
DELETE	/employees/{id}	Delete employee
📊 Database Design
Employee Table
id (Primary Key)
name
email
department
salary
User Table
id (Primary Key)
email
password
🚀 Future Enhancements
🔐 JWT-based authentication
👮 Role-based access control (Admin / User)
☁️ Cloud deployment (AWS / Azure)
📧 Email notifications
📱 Mobile responsive UI improvements
🐳 Docker containerization
👨‍💻 Developer

Sachin Waghmare
GitHub: sachin-dev45
