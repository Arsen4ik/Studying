class TaskList extends HTMLElement {
    constructor() {
        super();

        this.tasks = [];
        this.attachShadow({ mode: 'open' });
        this.render();

    }

    connectedCallback() {
        const shadowRoot = this.shadowRoot.getElementById('addTaskButton')
        console.log(shadowRoot);
        shadowRoot.addEventListener('click', () => {
            const newTaskInput = this.shadowRoot.getElementById('newTaskInput');
            console.log(newTaskInput.value);
            if (newTaskInput.value) {
                this.addTask(newTaskInput.value);
                newTaskInput.value = '';
            }
        });
    }

    addTask(taskText) {
        this.tasks.push({ text: taskText, completed: false });
        this.render();
    }

    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.render();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .addTasks {
                    height: 100px;
                    background-image: linear-gradient(to bottom right, #2563eb, #4f46e5, #7c3aed);
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                }
                .addTasks > input {
                    height: 30px;
                    width: 30%;
                    max-width: 400px;
                    min-width: 150px;
                    outline: none;
                    font-size: large;
                    padding: 0 5px;
                    border-radius: 3px;
                    border: none;
                    box-shadow: 0 4px #d6d3d1;
                }
                .addTasks > button {
                    font-size: large;
                    width: 100px;
                    height: 30px;
                    border: none;
                    border-radius: 3px;
                    background-color: #9333ea;
                    box-shadow: 0 5px 0 #6b21a8;
                    color: white;
                }
                .task {
                    margin: 30px auto;
                    width: 300px;
                    border-radius: 3px;
                    background-color: #9333ea;
                    box-shadow: 0 5px 0 #6b21a8;
                    list-style-type: none;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    color: white;
                    padding: 10px;
                    gap: 20px;
                }
                .task > p {
                    margin: 0;
                    text-align: center;
                }
                .task > button {
                    padding: 5px;
                    color: white;
                    border: 2px solid white;
                    background-color: inherit;
                    border-radius: 3px;
                }
                .task > input:checked + p {
                    text-decoration: underline;
                }
            </style>
            <div class="addTasks">
                <input id="newTaskInput" type="text" placeholder="New Task">
                <button id="addTaskButton" onclick="this.connectedCallback">Add Task</button>
            </div>
            <ul>
            ${this.tasks.map((task, index) => `
                <li class="task">
                    <input type="checkbox" 
                        ${task.completed ? 'checked' : ''} 
                        onchange="document.querySelector('task-list').toggleTask(${index})">
                    <p>${task.text}</p>
                    <button onclick="document.querySelector('task-list').removeTask(${index})">Delete</button>
                </li>
            `).join('')}
        </ul>
        `;
        this.connectedCallback()
    }
}
customElements.define('task-list', TaskList);