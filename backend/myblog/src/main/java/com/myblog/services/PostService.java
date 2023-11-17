package com.myblog.services;

import com.myblog.models.Post;
import com.myblog.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post addNewPost(Post post) {
        var data = postRepository.save(post);
        System.out.println(data);

        return data;
    }
}
