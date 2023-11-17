package com.myblog.models;


import jakarta.persistence.*;
import lombok.Getter;

import java.util.Date;
import java.util.Objects;

@Getter
@Entity
@Table(name = "posts")
public class Post extends BaseEntity {

    @Id
    @SequenceGenerator(
            name = "post_sequence",
            sequenceName = "post_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE
    )
    private Long id;
    private String title;
    private String description;
    private String body;
    private String image;

    public Post() {
    }

    public Post(String title, String description, String body, String image) {
        this.title = title;
        this.description = description;
        this.body = body;
        this.image = image;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void setImage(String image) {
        this.image = image;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(id, post.id) && Objects.equals(title, post.title) && Objects.equals(description, post.description) && Objects.equals(body, post.body) && Objects.equals(image, post.image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, body, image);
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", body='" + body + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
