import "./styles.css";

const projectArray = [
    {
        name:"Tic-Tac-Toe",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi exercitationem veritatis corporis.",
        src:"TicTacToe"
    },
    {
        name:"Weather App",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi exercitationem veritatis corporis.",
        src:"WeatherApp"
    },
    {
        name:"Sketch",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi exercitationem veritatis corporis.",
        src:"Sketch"
    },
    {
        name:"To-Do List",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi exercitationem veritatis corporis.",
        src:"Todo"
    },
    {
        name:"ROCK, PAPER, SCISSORS",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi exercitationem veritatis corporis.",
        src:"RPS"
    },
    {
        name:"BMI Calculator",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi exercitationem veritatis corporis.",
        src:"BMI"
    },
    
]

const projectContainer = document.querySelector("#projectContainer")

projectArray.forEach((project) => {
    const div = document.createElement("div")
    div.className = 'card'
    div.innerHTML = `<img src="${require(`./images/${project.src}.png`)}" alt="project">
                     <div class="projectInfo">
                        <div class="projectName">
                            <h1>${project.name}</h1>
                            <span class="projectLink">
                                <i class="devicon-github-original-wordmark colored"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
                            </span>
                        </div>
                        <p>${project.description}</p>
                     </div>`

    console.log(div);
    projectContainer.appendChild(div)
})