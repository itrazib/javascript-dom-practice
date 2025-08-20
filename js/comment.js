document.getElementById('btn-post').addEventListener('click', function(){
            const postComment = document.getElementById('post-comment');
            const comment = postComment.value;
            
            const commentDiv = document.getElementById('comment-container');
            // console.log(commentDiv)
            const commentP = document.createElement('p');
            commentP.classList.add('comment');
            commentP.innerText = comment;
        //   console.log(commentP)
          commentDiv.appendChild(commentP);

          postComment.value = '';
        })