package com.project.questapp.services;

import com.project.questapp.entities.Like;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.questapp.repositories.LikeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class LikeService {
    private final LikeRepository likeRepository;

    @Autowired
    public LikeService(LikeRepository likeRepository) {
        this.likeRepository = likeRepository;
    }

    public Like createLike(Like like) {
        return likeRepository.save(like);
    }

    public Optional<Like> getLikeById(Long id) {
        return likeRepository.findById(id);
    }

    public List<Like> getAllLikes() {
        return likeRepository.findAll();
    }

    public void deleteLike(Long id) {
        likeRepository.deleteById(id);
    }
}
