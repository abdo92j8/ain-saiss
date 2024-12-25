#!/bin/bash

# Create the directory structure
mkdir -p public
mkdir -p src/components
mkdir -p src/assets

# Create the components in src/components folder
touch src/components/Header.js
touch src/components/HeroSection.js
touch src/components/AboutUs.js
touch src/components/Products.js
touch src/components/Sustainability.js
touch src/components/Contact.js
touch src/components/Footer.js

# Create the assets/styles.css file
touch src/assets/styles.css

# Create the main App.js file
touch src/App.js

echo "Project structure created successfully!"
