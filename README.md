 # Professional Furniture Store Web Application

Welcome to the Professional Furniture Store Web Application! This web app is designed to help showcase and manage a furniture store's products using a clean and modern interface. Whether you are browsing on a desktop, tablet, or phone, this app will adjust to give you the best experience possible.

## Demo Link
You can see how the application works by visiting this demo link: [Demo of the Furniture Store Web Application](https://roaring-genie-69241e.netlify.app/)

## Features
This web application comes with several useful features:
- **Responsive Design**: The app automatically adjusts its layout to look good on various screen sizes, from mobile phones to large desktop screens.
- **Interactive Elements**: You can click buttons and hover over social media icons that react to your interactions, making the experience more engaging.
- **Stylish UI**: With a modern design aesthetic, smooth transitions, and hover effects, the user interface is both appealing and user-friendly.

## Technologies Used
To build this web application, we used:
- **React.js**: A library for building user interfaces in a way that is efficient and easy to manage.
- **CSS**: To style the application and ensure it looks good and functions well across devices.
- **JavaScript**: For adding interactivity and functionality to the application.

## Getting Started
If you'd like to run this application locally on your own computer, follow these simple steps:

### Installation

1. **Clone the Repository**: This means you're copying the project files to your computer. You can do this by using the following command in your terminal:
  
   git clone https://github.com/eungobs/commerce.git

2. **Navigate to the Project Directory**: Change into the folder where the project files are located:
   cd commerce
 

3. **Install Dependencies**: This step installs all the necessary tools and libraries that the app needs to run. Use the following command:
   npm install
  

4. **Start the Development Server**: Finally, you can start the app by running:
   npm start
 
   After starting the server, the application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure
Here is how the project files are organized:

- **src/App.js**: This is the main file where the main structure of the application is built.
- **src/App.css**: This file contains styles that control how things look and adjust based on the size of the screen.
- **public/index.html**: The basic HTML layout of the application.

### Layout Components
- **Body**: Sets a gradient background and centers the main content.
- **Container**: Organizes the layout for the main content area.
- **Left Side & Right Side**: Styles for displaying products and a search area.
- **Buttons**: Custom styles for buttons that change appearance when hovered over.
- **Social Media Icons**: Icons for social media that change on hover for interaction.
- **Search Container**: A clickable area for search with effects for better user interaction.

## Media Queries
Media queries are a way to ensure the application looks good on all devices. They specify how styles should change based on the size of the screen:
- **General Media Queries**: Used to adjust styles for different screen widths (like making things stack vertically).
- **Device-Specific Media Queries**: Customizes the layout specifically for popular devices like iPhones or certain Android phones.

### Example Media Queries
Here’s an example of how we ensure the application behaves well on smaller screens:
css
@media (max-width: 980px) {
  .container {
    flex-direction: column; // Stack elements vertically
  }
}


## Usage
- **Clickable Buttons**: There are both white and black buttons styled to be easily clickable, and they change color when you hover over them.
- **Search Container**: Clickable search area that indicates interactivity when you hover.
- **Social Media Icons**: Interactive icons that scale up and change color when hovered over, making them engaging to interact with.

## Contributing
If you want to help improve this application, here’s how to do it:
1. **Fork the Repository**: Make a copy of the project to your own account.
2. **Create a Feature Branch**: Work on your new feature in a separate branch.
3. **Commit Your Changes**: Save your work with a message explaining what you did.
4. **Push to the Branch**: Send your changes back to GitHub.
5. **Open a Pull Request**: Propose your changes to be merged into the original project.

## Acknowledgments
A big thank you goes to:
- **React.js**: For providing a powerful framework to build our user interface.
- **CSS**: For making our application visually appealing and responsive.

If you have any questions or need further assistance, feel free to reach out! Happy browsing!
