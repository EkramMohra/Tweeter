const tweeter = Tweeter()
const renderer = Renderer()

const post = function () {
    const post = $("#input").val()
    tweeter.addPost(post)
    $("#input").val('')
    renderer.renderPosts(tweeter.getPosts())
}

const deletePost = function (id) {
    tweeter.removePost(id)
    renderer.renderPosts(tweeter.getPosts())
}

$(document).on('click', '.comment_button', function() {

    let postID = $(this).data('id')
    const comment = $(this).closest(".post").find('input')
    const commentVal = comment.val()

    tweeter.addComment(commentVal , postID)
    comment.val('')
    renderer.renderPosts(tweeter.getPosts())
})

$(document).on('click', '.delete-comment', function() {

    let postID = $(this).data('id')
    let commentID = $(this).attr('id')

    tweeter.removeComment(postID , commentID)
    renderer.renderPosts(tweeter.getPosts())
})

renderer.renderPosts(tweeter.getPosts())