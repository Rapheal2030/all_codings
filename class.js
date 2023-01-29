const getPosts = () => {
    let fetchPosts = fetch("http://jsonplaceholder.typicode.com/posts")
    let displayfetch = ""

    fetchPosts.then((respond) => {
        respond.json().then((jsonData) => {
            console.log(jsonData)
            for (let i = 0; i < jsonData.length; i++) {
                let post = jsonData[i];

                displayfetch = displayfetch + ` ${post.title} <br> post body: ${post.body} <br> <hr>`;
            }
            document.getElementById("allPosts").innerHTML = displayfetch

        })
    })
}