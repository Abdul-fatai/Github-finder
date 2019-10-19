class Github {
    constructor (){
        this.client_id = '244497ebf7a6c99955ac';
        this.client_secret = '1229ede62daf93ca92e0ef5ba4ae5a49fb6cdca7';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser (user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}