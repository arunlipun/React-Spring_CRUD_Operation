package com.lipun.lipun.repository;

import com.lipun.lipun.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
