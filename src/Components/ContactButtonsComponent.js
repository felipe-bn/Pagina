import React from "react";
import '../Assets/Styles/ContactButtonsComponentStyles.css'

function ContactButtonsComponent(){
    return(
        <div className="card">
            <a className="socialContainer containerOne" href="https://www.instagram.com/padrossfelipe_/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
                <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                ></path>
                </svg>
            </a>

            <a className="socialContainer containerTwo" href="https://x.com/FelipePadr99869" target="_blank" rel="noopener noreferrer">
                <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="socialSvg twitterSvg"
                >
                <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                ></path>
                </svg>
            </a>

            <a className="socialContainer containerThree" href="https://www.linkedin.com/in/felipe-padros-32765422b" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
                </svg>
            </a>

            <a className="socialContainer containerFour" href="https://github.com/felipe-bn" target="_blank" rel="noopener noreferrer">
            <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  height="16"
  width="16"
  xmlns="http://www.w3.org/2000/svg"
  className="socialSvg whatsappSvg"
>
  <path
    d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.796 8.207 11.387.6.113.827-.261.827-.577v-2.229c-3.338.726-4.043-1.605-4.043-1.605-.546-1.387-1.334-1.758-1.334-1.758-1.089-.745.083-.73.083-.73 1.206.085 1.839 1.24 1.839 1.24 1.071 1.832 2.809 1.302 3.494.996.107-.777.419-1.302.762-1.603-2.666-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.377 1.236-3.215-.123-.305-.536-1.527.117-3.18 0 0 1.006-.322 3.303 1.23a11.507 11.507 0 0 1 3.006-.404c1.02.005 2.041.136 3.006.404 2.295-1.552 3.303-1.23 3.303-1.23.653 1.653.241 2.875.118 3.18.768.838 1.236 1.905 1.236 3.215 0 4.607-2.807 5.624-5.478 5.927.43.37.815 1.098.815 2.221v3.293c0 .318.226.692.832.575C20.561 21.794 24 17.301 24 12 24 5.373 18.627 0 12 0z"
  ></path>
</svg>
            </a>
        </div>
    );
}

export default ContactButtonsComponent;