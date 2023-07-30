<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Instagram][instagram-shield]][instagram-url]
[![Github][github-shield]][github-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">  
  <a href="https://github.com/Kronk21/UPSS-Laravel-React.git">
    <img src="./react/src/assets/Logo-Blanco.png" alt="Logo">
  </a>

<h3 align="center">UPSS Wireless</h3>

  <p align="center">
    Single Page Application of an E-commerce with a React frontend and a Laravel API as a backend
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](#readme-top)

### Built With

-   [![React][React.js]][React-url]
-   [![Laravel][Laravel.com]][Laravel-url]
-   [![React-Router][React-Router-shield]][React-Router-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Make sure you have environment setup properly.

-   Node.js
-   PHP 8.1
-   Composer

### Installation

First download the project (or clone using GIT)

```sh
git clone https://github.com/Kronk21/UPSS-Laravel-React.git
```

#### Laravel backend

1. Copy `.env.example` into `.env` and configure database credentials
2. Navigate to the project's root directory using terminal
3. Install composer packages
    ```
    composer install
    ```
4. Run migrations
    ```
    php artisan migrate --seed
    ```
5. Start local server by executing
    ```
    php artisan serve
    ```

#### React frontend

1. Open a new terminal and navigate to the `react` folder
2. Copy `react/.env.example` into `react/.env` and adjust the `VITE_API_BASE_URL` parameter
3. Install NPM packages
    ```
    npm install
    ```
4. Start vite server for React
    ```
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!--  -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/cesar-serrano-113597260/
[instagram-shield]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[instagram-url]: https://www.instagram.com/cesarserrano21/
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/Kronk21

<!--  -->

[product-screenshot]: https://i.imgur.com/6JQ9A4y.png

<!--  -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[React-Router-shield]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-Router-url]: https://reactrouter.com/en/main

<!--  -->

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
