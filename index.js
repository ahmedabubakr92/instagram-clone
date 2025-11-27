const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const feedContainerEl = document.getElementById("feed-container")


function render() {
    let postHTML = ""
    for (let i = 0; i < posts.length; i++) {
        postHTML += `
            <div class="post-container">
                <section class="content-header">
                    <img class="post-profile-avatar" src="${posts[i].avatar}" alt="${posts[i].name} avatar">
                    <div class="content-header-text">
                        <p class="name">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </section>
                
                <section class="content-post">
                    <img src="${posts[i].post}" 
                    alt="Post by ${posts[i].name}"
                    ondblclick="incrementLikes(${i})">
                </section>
                
                <section class="content-action">
                    <div class="btns">
                        <button class="like-btn">
                            <img id="like-icon-${i}" class="icon" src="images/icon-heart.png"
                            onclick="incrementLikes(${i})">
                        </button>
                        <button class="comment-btn">
                            <img class="icon" src="images/icon-comment.png">
                        </button>
                        <button class="share-btn">
                            <img class="icon" src="images/icon-dm.png">
                        </button>
                    </div>
                    
                    <p class="likes-count" id="like-count-${i}">
                        ${posts[i].likes} likes
                    </p>
                    
                    <p class="comments">
                        <span class="comment-user">${posts[i].username}</span> ${posts[i].comment}
                    </p>
                </section>
            </div> 
        `
    }

    feedContainerEl.innerHTML = postHTML
}

render()

function incrementLikes(index) {

    posts[index].likes += 1

    const specificLikeCount = document.getElementById(`like-count-${index}`)
    specificLikeCount.textContent = `${posts[index].likes} likes`
    const heartIcon = document.getElementById(`like-icon-${index}`)
    
    heartIcon.classList.add("liked")
}
