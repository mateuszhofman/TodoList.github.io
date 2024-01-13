const addTaskBtn = document.querySelector('.add');
const addMenu = document.querySelector('.add-task');
const addBackBtn = document.querySelector('.add-back');
const addInput = document.querySelector('.add-task-input');
const addInfo = document.querySelector('.add-task-info');

const ulList = document.querySelector('.todo-box ul');
const errorInfo = document.querySelector('.error');

const saveAdd = document.querySelector('.save-task');
const completeBtn = document.querySelector('.complete');

const editMenu = document.querySelector('.edit-task');
const editBtn = document.querySelector('.edit');
const editInput = document.querySelector('.edit-task-input');
const editInfo = document.querySelector('.edit-task-info');
const editBackBtn = document.querySelector('.edit-back');
const saveEditBtn = document.querySelector('.save-edit');

const deleteBtn = document.querySelector('.delete');
const allTasks = document.getElementsByTagName('li');

const settingsBtn = document.querySelector('.settings-btn');
const settingsMenu = document.querySelector('.settings');

const userName = document.querySelector('.name');
const userInput = document.querySelector('.username');
const settingsSaveBtn = document.querySelector('.settings-save');

const avatarInput = document.querySelector('.avatar');
const avatarImg = document.querySelector('.small-img');

let idNumber = 0;

const showAddMenu = () => {
	addMenu.style.display = 'block';
};
const hideAddMenu = () => {
	addMenu.style.display = 'none';
	addInput.value = '';
	addInfo.textContent = '';
};

const hideEditMenu = () => {
	editMenu.style.display = 'none';
	editInput.value = '';
	editInfo.textContent = '';
};

const addNewTodo = () => {
	if (addInput.value !== '') {
		idNumber++;
		newTodo = document.createElement('li');
		newTodo.innerHTML = addInput.value;
		newTodo.setAttribute('id', `todo-${idNumber}`);
		ulList.appendChild(newTodo);
		errorInfo.textContent = '';
		addInput.value = '';
		addInfo.textContent = '';
		addMenu.style.display = 'none';
		createToolsArea();
	} else {
		addInfo.textContent = 'Enter the content of the task!';
	}
};

const createToolsArea = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('tools');
	newTodo.appendChild(toolsPanel);

	const completeBtn = document.createElement('button');
	const editBtn = document.createElement('button');
	const deleteBtn = document.createElement('button');

	completeBtn.classList.add('complete');
	editBtn.classList.add('edit');
	deleteBtn.classList.add('delete');

	completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
	editBtn.textContent = 'EDIT';
	deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

	toolsPanel.appendChild(completeBtn);
	toolsPanel.appendChild(editBtn);
	toolsPanel.appendChild(deleteBtn);
};

const checkClick = (e) => {
	if (e.target.closest('button').classList.contains('complete')) {
		e.target.closest('li').classList.toggle('completed');
		e.target.closest('button').classList.toggle('completed');
	} else if (e.target.closest('button').classList.contains('edit')) {
		editTask(e);
	} else if (e.target.closest('button').classList.contains('delete')) {
		deleteTask(e);
	}
};

const deleteTask = (e) => {
	const deleteTodo = e.target.closest('li');
	deleteTodo.remove();
	if (allTasks.length === 0) {
		errorInfo.textContent = 'The task list is empty.';
	}
};

const editTask = (e) => {
	const oldTodo = e.target.closest('li').id;
	todoToEdit = document.getElementById(oldTodo);
	editInput.value = todoToEdit.firstChild.textContent;

	editMenu.style.display = 'block';
};

const editToDo = () => {
	if (editInput.value !== '') {
		todoToEdit.firstChild.textContent = editInput.value;
		editMenu.style.display = 'none';
		editInfo.innerText = '';
	} else {
		editInfo.innerText = 'Enter the content of the task!';
	}
};

const showSettings = () => {
	settingsMenu.classList.toggle('active');
};

const editName = () => {
	if (userInput.value !== '') {
		userName.textContent = userInput.value;
		userInput.value = '';
	}
};

const editAvatar = () => {
	if (avatarInput.value !== '') {
		avatarImg.style.backgroundImage = `url(${avatarInput.value})`;
		avatarInput.value = '';
	}
};

const saveSettings = () => {
	editAvatar();
	editName();
	settingsMenu.classList.remove('active');
};

addTaskBtn.addEventListener('click', showAddMenu);
addBackBtn.addEventListener('click', hideAddMenu);
editBackBtn.addEventListener('click', hideEditMenu);
saveAdd.addEventListener('click', addNewTodo);
ulList.addEventListener('click', checkClick);
saveEditBtn.addEventListener('click', editToDo);
settingsBtn.addEventListener('click', showSettings);
settingsSaveBtn.addEventListener('click', saveSettings);
