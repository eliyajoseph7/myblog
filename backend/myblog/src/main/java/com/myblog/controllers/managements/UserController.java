package com.myblog.controllers.managements;

import com.myblog.models.User;
import com.myblog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/users")
public class UserController {

    final private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping(path = "/register")
    public User registerUser(@RequestBody User user) {
        return userService.register(user);
    }

//    @PostMapping(path = "/login-user")
//    public User loginUser(@RequestBody String email, String password) {
//
//    }
}
