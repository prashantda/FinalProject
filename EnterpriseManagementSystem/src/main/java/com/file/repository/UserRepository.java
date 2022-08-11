package com.file.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.file.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

	
	public User findByUsername(String username);
	public User findByMobile(String mobile);

	public List<User> findByEnabled(boolean isEnabled);
	
	@Query(value = "update user set password= :password where username= :email",nativeQuery = true)
	void changePassword(@Param("email") String email,@Param("password") String password);

}
