const enterButton = document.getElementById('submit');
const enterMessage = document.getElementById('message');
const enterUser = document.getElementById('name');
enterButton.addEventListener('click', publishMessage);

function publishMessage(){
	const post ={};
	post.text = enterMessage.value;
	console.log(post.text);
	post.date = Date.now();
	console.log(post.date);
	post.uid = enterUser.value;
	console.log(post.uid);
	enterMessage.value="";
	createPost(post);
}
function createDiv(_class, text){
	const div = document.createElement('div');
	div.classList.add(_class);
	div.textContent = text;
	return div;
}
function createPost(data){
	const post = createDiv('timeline');
	const message = createDiv('p-message', data.text);
	const info = createDiv('info');
	const author = createDiv('p-author', "by " + data.uid)
	const d = new Date(data.date);
	const date = createDiv('p-date', "on " + (d.getMonth()+1) + '/' + d.getDate() +'/'+ d.getFullYear());

	post.appendChild(message);
	post.appendChild(info);
	info.appendChild(author);
	info.appendChild(date);
	
	timeline.insertBefore(post,timeline.firstElementChild);
}
