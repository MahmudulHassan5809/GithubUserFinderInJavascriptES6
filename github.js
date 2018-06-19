class GitHub  {
	constructor() {
		this.client_id = '996aec44142eee78c7e4';
		this.client_secret = 'e4f2671f4bbdb3203a91df3cb9210c1dd207045f';
		this.repos_count = 5;
		this.repos_short = 'created: asc';
	}

	async getUser(user){
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profileData = await profileResponse.json();

		const repos = await repoResponse.json();

		return {
			profile : profileData,
			repos
		}
	}
}