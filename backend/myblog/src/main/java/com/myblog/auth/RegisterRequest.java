package com.myblog.auth;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String name;
    private String username;
    private String email;
    private String password;
    private String phone;
    private boolean active;
    private String image;
    private String gender;
}
