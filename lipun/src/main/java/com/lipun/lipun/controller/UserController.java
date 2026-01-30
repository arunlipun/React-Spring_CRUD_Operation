package com.lipun.lipun.controller;

import com.lipun.lipun.exception.UserNotFoundException;
import com.lipun.lipun.model.User;
import com.lipun.lipun.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newuser(@RequestBody User newuser) {
        return userRepository.save(newuser);
    }
    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/user/{id}")
    User updateUser(@PathVariable Long id, @RequestBody User newuser) {
        return userRepository.findById(id)
                .map(user ->{
                    user.setUsername(newuser.getUsername());
                    user.setName(newuser.getName());
                    user.setEmail(newuser.getEmail());
                    return userRepository.save(user);
                } )

                .orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User "+id+" has been deleted";
    }
}
