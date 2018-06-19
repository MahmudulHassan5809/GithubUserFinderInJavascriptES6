//Init github
const github = new GitHub;

//init Ui Class
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
 
  //Get input Text
  const userText = e.target.value;

  if (userText !== '') {
  	//Make Http Call
  	github.getUser(userText)
  	.then(data => {
  		console.log(data);
  		if (data.profile.message === 'Not Found') {
  			//Show Alert
  			ui.showAlert('User Not Found','alert alert-danger');
  		} else {
  			//Show Profile
  			ui.showProfile(data.profile);
  			ui.showRepos(data.repos);
  		}
  	})
  	//console.log(userText);
  } else {
  	//clear Profile
  	ui.clearProfile();
  } 

});