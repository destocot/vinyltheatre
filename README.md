
<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/destocot/vinyltheatre">
    <img src="client/public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Vinyl Theatre</h3>

  <p align="center">
    Your Vinyl Album Universe
    <br />
    <a href="https://github.com/destocot/vinyltheatre"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://vinyltheatre.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/destocot/vinyltheatre/issues">Report Bug</a>
    ·
    <a href="https://github.com/destocot/vinyltheatre/issues">Request Feature</a>
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
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<img src="https://i.imgur.com/XeTWYXQ.png" alt="homepage" width="65%" height="auto">

This project is a multi-page, full-stack application designed for the creation of music profiles. It offers several key features and optimizations aimed at enhancing the user experience and security:

<b>User Sessions</b>: The application utilizes JSON web tokens, state management, and cookies to optimize user sessions. This ensures a secure and seamless experience for users throughout their interaction with the platform.

<b>User Engagement</b>: To improve user engagement and satisfaction, the project incorporates CSS pseudo-classes and toast notifications. These elements provide real-time feedback and a more interactive experience for users.

<b>Responsive Design</b>: The application is built with responsive design principles in mind. It adapts to various screen sizes, including devices with a minimum width of 320px, thanks to the use of CSS media queries. This ensures that users can access and use the platform on a wide range of devices.

This project aims to provide a robust and user-friendly platform for creating music profiles, prioritizing security, engagement, and accessibility across different devices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![Vite][Vite.js]
- ![Axios][Axios.js]
- ![Express][Express]
- ![CSS 3][CSS]
- ![HTML 5][HTML]
- ![Javascript][javascript.js]
- ![Node.JS][node.js]
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
```sh
git clone https://github.com/destocot/vinyltheatre.git
```

2.Then, navigate to the client directory in your terminal and install the necessary dependencies:

```sh
cd client
npm install
```
3. Navigate to the server directory in your terminal and install the necessary dependencies:
```sh
cd ../server
npm install
```

4. Createa a .env in the server folder and add your MongoDB connection string as follows:
```sh
MONGODB_URI=your_mongodb_uri_here
```

5. Finally run your development server for both client and server with the following commands
  ```sh
  cd client
  npm run dev
  ```

and

```sh
cd server
npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=029
[linkedin-url]: https://linkedin.com/in/khurramali1

[Vite.js]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Axios.js]: https://img.shields.io/badge/Axios-20232A?style=for-the-badge&logo=axios&logoColor=white
[Express]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Javascript.js]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Node.JS]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
