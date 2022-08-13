const html = document.getElementById('html');

html.onmouseover = () => {
    html.src = "resources/images/html5-logo-EF92D240D7-seeklogo.com.png";
};
html.onmouseleave = () => {
  html.src = "resources/images/html5_logo-01.png";
};

const css = document.getElementById('css');

css.onmouseover = () => {
    css.src = "resources/images/CSS3_logo_and_wordmark.svg.png";
};
css.onmouseleave = () => {
  css.src = "resources/images/png-transparent-web-development-html-cascading-style-sheets-css3-world-wide-web-angle-web-design-logo.png";
};

const js = document.getElementById('js');

js.onmouseover = () => {
    js.src = "resources/images/JavaScript-logo.png";
};
js.onmouseleave = () => {
  js.src = "resources/images/javascript-logo-851B872133-seeklogo.com.png";
};

const react = document.getElementById('react');

react.onmouseover = () => {
    react.src = "resources/images/React-icon.svg.png";
};
react.onmouseleave = () => {
  react.src = "resources/images/logo-react.svg";
};

const github = document.getElementById('github');

github.onmouseover = () => {
    github.src = "resources/images/Octocat.png";
};
github.onmouseleave = () => {
  github.src = "resources/images/unnamed.png";
};