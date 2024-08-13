package com.project.questapp.services;

import com.project.questapp.entities.Like;
import com.project.questapp.entities.Post;
import com.project.questapp.entities.User;
import com.project.questapp.requests.LikeCreateRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.questapp.repositories.LikeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LikeService {
    private final LikeRepository likeRepository;
    private final PostService postService;
    private final UserService userService;
    @Autowired
    public LikeService(LikeRepository likeRepository, PostService postService, UserService userService) {
        this.likeRepository = likeRepository;
        this.postService = postService;
        this.userService = userService;
    }

    public Like createLike(LikeCreateRequest like) {
        Post post = postService.getPostById(like.getPostId()).get();
        User user = userService.getUserById(like.getUserId()).get();

        if (post != null && user != null) {
            Like newLike = new Like();
            newLike.setId(like.getId());
            newLike.setPost(post);
            newLike.setUser(user);
            return likeRepository.save(newLike);
        }
        else {
            return null;
        }
    }

    public Optional<Like> getLikeById(Long id) {
        return likeRepository.findById(id);
    }

    public List<Like> getAllLikes(Optional<Long> userId, Optional<Long> postId) {
        if(userId.isPresent() && postId.isPresent()) {
            return likeRepository.findByUserIdAndPostId(userId.get(), postId.get());
        }else if(userId.isPresent()) {
            return likeRepository.findByUserId(userId.get());
        }else if(postId.isPresent()) {
            return likeRepository.findByPostId(postId.get());
        }else
            return likeRepository.findAll();
    }

    public void deleteLike(Long id) {
        likeRepository.deleteById(id);
    }
}
