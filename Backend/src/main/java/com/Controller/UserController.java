package com.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Entity.User;
import com.Service.UserService;
import com.dto.Userdto;

@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	UserService user;
	
	@PostMapping("/register")
	public String register(@RequestBody User u)
	
	{
		return user.register(u);
	}

	@PostMapping("/login")
	public ResponseEntity<?>login(@RequestBody Userdto udto)
	{
		User existinguser=user.Login(udto);
		if(existinguser!=null)
		{
			return ResponseEntity.ok(existinguser);
		}
		else
		{
			return ResponseEntity
					.status(HttpStatus.UNAUTHORIZED)
					.body("Invalid username or password");
		}
	}
	
	
}
