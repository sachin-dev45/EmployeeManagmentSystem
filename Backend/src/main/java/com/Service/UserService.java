package com.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Entity.User;
import com.Repository.UserRepository;
import com.dto.Userdto;

@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	public String register(User u)
	{
		User existinguser=urepo.findByUsername(u.getUsername());
		User empiduser=urepo.findByEmpid(u.getEmpid());
		
		if(empiduser!=null)
		{
			return "You already registered with this empid";
		}
		else if(existinguser==null)
		{
			urepo.save(u);
			return "Registration sucessfully";
		}
		else
		{
			return "Username is already exist use another one";
		}
	}
	
	public User Login(Userdto udto)
	{
		User existinguser=urepo.findByUsername(udto.getUsername());
		if(existinguser==null)
		{
			return null;
		}
		else
		{
			if(existinguser.getPassword().equals(udto.getPassword()))
			{
				return existinguser;
			}
			else
			{
				return null;
			}
		}
	}
	
	

}
