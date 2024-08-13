package com.project.questapp.services;
import com.project.questapp.entities.Comment;
import com.project.questapp.entities.Post;
import com.project.questapp.entities.User;
import com.project.questapp.requests.CommentCreateRequest;
import com.project.questapp.requests.CommentUpdateRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.project.questapp.repositories.CommentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final UserService userService;
    private final PostService postService;

    @Autowired
    public CommentService(CommentRepository commentRepository, UserService userService, PostService postService) {
        this.commentRepository = commentRepository;
        this.userService = userService;
        this.postService = postService;
    }

    public Comment createComment(CommentCreateRequest comment) {
        User user = userService.getUserById(comment.getUserId()).get();
        Post post = postService.getPostById(comment.getPostId()).get();
        if (user != null && post != null) {
            Comment newComment = new Comment();
            newComment.setId(comment.getId());
            newComment.setUser(user);
            newComment.setPost(post);
            newComment.setText(comment.getText());
            return commentRepository.save(newComment);
        }
        else {
            return null;
        }
    }

    public Optional<Comment> getCommentById(Long id) {
        return commentRepository.findById(id);
    }

    public List<Comment> getAllComments(Optional<Long> userId, Optional<Long> postId) {
        if (userId.isPresent() && postId.isPresent()) {
            return commentRepository.findByUserIdAndPostId(userId.get(), postId.get());
        }
        else if (userId.isPresent()) {
            return commentRepository.findByUserId(userId.get());
        }
        else if (postId.isPresent()) {
            return commentRepository.findByPostId(postId.get());

        }
        else {
            return commentRepository.findAll();
        }
    }

    @Transactional
    public Comment updateComment(Long id, CommentUpdateRequest commentDetails) {
        return commentRepository.findById(id).map(comment -> {
            comment.setText(commentDetails.getText());
            return commentRepository.save(comment);
        }).orElseThrow(() -> new RuntimeException("Comment not found"));
    }


    public void deleteComment(Long id) {
        commentRepository.deleteById(id);
    }
}
