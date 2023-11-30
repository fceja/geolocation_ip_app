# Description
Clicking the 'Get My Location' button will retreive users geo-coordinates and IP info. </br>
(requests user permission).

# Installation
![](https://img.shields.io/badge/Unix-informational?style=flat&logo=unix&logoColor=white&color=eaeaea)
![](https://img.shields.io/badge/OS-Linux-informational?style=flat&logo=linux&logoColor=white&color=eaeaea)
![](https://shields.io/badge/OS-MacOS-informational?style=flat&logo=Apple&logoColor=white&color=eaeaea)

1. Clone repo
2. Install Node
   - ```https://nodejs.org/en/download```
3. At project root, run:
   - ```npm install```
   - This will install all project package dependencies
4. Create a free account at [ipinfo](https://ipinfo.io/), this will give you an api token.
    - Update the environment variable in the ```.env``` file at project root:
      - ```REACT_APP_IP_INFO_API_TOKEN="{ipinfo_token}"```
        - replace ```{ipinfo_token}``` with api token value
5. At project root, run:
   - ```npm start```
   - App will be served on ```http://localhost:8080/```

# Technologies & Tools
<p>
  <a
    href="https://www.typescriptlang.org/"
    target="_blank"
    rel="noreferrer"
    style="text-decoration:none"
  >
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      alt="typescript"
      width="40"
      height="40"
    />
  </a>
  <a href="https://react.dev/" target="_blank" rel="noreferrer" style="text-decoration:none">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      alt="react"
      width="40"
      height="40"
    />
  </a>
  <a href="https://developers.google.com/maps" target="_blank" rel="noreferrer"">
    <img
      src="https://developers.google.com/static/maps/images/maps-icon.svg"
      alt="googlemaps"
      width="40"
      height="40"
    />
  </a>
  <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
      alt="sass"
      width="40"
      height="40"
    />
  </a>
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
      alt="html5"
      width="40"
      height="40"
    />
  </a>
  <a href="https://webpack.js.org" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
      alt="webpack"
      width="40"
      height="40"
    />
  </a>
</p>
