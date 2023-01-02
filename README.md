# Textanger
my messanger
# example of response
const posts = [{
	id: 0,
	text: 'My first day at school was awesome!',
	likes: 15,
	dislikes: 2,
	comments: [{
		id: 'c0',
		text: 'Glad to hear that!',
		fullName: 'Mommy',
	}, {
		id: 'c1',
		text: 'We are so proud of you!',
		fullName: 'Daddy',
	}]
}, {
	id: 1,
	text: 'Winter is comming',
	likes: 0,
	dislikes: 200,
	comments: [{
		id: 'c4',
		text: 'I hate it..',
		fullName: 'Lily88',
	}, {
		id: 'c5',
		text: 'Sad..',
		fullName: 'Mandy2000',
	}]
}];

# example of one post:
<div>
    <h1>I am first post text</h1>
    <h2>likes: 2</h1>
    <h2>dislikes: 2</h1>
    <ul>
      <li>[name of author of comment]: I am first comment</li>
      <li>[name of author of comment]: I am second comment</li>
    </ul>
  </div>
