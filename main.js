const posts = [{
	id: 0,
	text: 'My first day at school was awesome!',
	likes: 15,
	dislikes: 2,
	comments: [{
		id: 'c0',
		text: 'Glad to hear that!',
		fullName: 'Mommy',
	},
	{
		id: 'c1',
		text: 'We are so proud of you!',
		fullName: 'Daddy',
	}]
},
{
	id: 1,
	text: 'Winter is comming',
	likes: 0,
	dislikes: 200,
	comments: [{
		id: 'c4',
		text: 'I hate it..',
		fullName: 'Lily88',
	},
	{
		id: 'c5',
		text: 'Sad..',
		fullName: 'Mandy2000',
	}]
}];

function getPost(){
	const data = posts.map(function(post){
		return `<h1>${post.text}</h1>
		<h2>likes: ${post.likes}<br>
		dislikes: ${post.dislikes}<br></h2>
		<ul>
			${post.comments.map(function(comment){
				return `<li>${comment.fullName}: ${comment.text}</li>`
			}).join('')}
		</ul>`	
	}).join('')
	return data
}
//getPost()

const showPost = function(){
	document.getElementById('post').innerHTML = getPost()
}
showPost()




