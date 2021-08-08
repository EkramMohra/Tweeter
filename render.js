const Renderer = function () {
    
    const renderPosts = function(posts){
        $('#posts').empty();

        for (const post of posts) {
            const aDynamicPost =
                    `<div data-id="${post['id']}" class="post">
                        <h3 class="post-text">${post["text"]}</h3>
                        <ul id="${post['id']}_comments" class="comments"></ul>
                        <button  id="${post['id']}_delete" class="delete" onclick="deletePost('${post['id']}')">Delete Post</button>
                    </div>
                    `;
            const elem = $(aDynamicPost)
            $("#posts").append(elem)

            for (const comment of post["comments"]) {
                $('#'+post['id']+'_comments').append(`<li class="comment_item" id="${comment["id"]}_comment">
                                                        <Span id="${comment['id']}" data-id="${post['id']}" class="delete-comment">X </span>${comment["text"]}
                                                      </li>`);
            }
            $('#'+post['id']+'_comments').append(` 
                <input class="comment_input" placeholder="Got something to say?">
                <button  id="${post['id']}_comment" data-id="${post['id']}" class="comment_button" >Comment</button>
                
                `);
            // onclick="addComment('${post['id']}')"
        }
    }

    return {renderPosts: renderPosts}
}