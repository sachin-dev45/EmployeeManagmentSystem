package com.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.Entity.Employee;
import com.Service.EmployeeService;

@RestController
@CrossOrigin
public class EmployeeController {
	
	@Autowired
	EmployeeService service;
	
	
	@PostMapping("/addemp")
	public String addEmployee(@RequestBody Employee e)
	{
		return service.addemp(e);
	}
	
	
	@GetMapping("/getemplist")
	public List<Employee> getemplist()
	{
		return service.findemplist();
	}
	
	
	@GetMapping("/getempbyid")
	public Employee getemp(@RequestParam int empid)
	{
		return service.findempid(empid);
	}
	
	
	@GetMapping("/getempbyfname")
	public List<Employee> getempbyfname(@RequestParam String firstname)
	{
		return service.getEmpByFirstName(firstname);
	}
	
	
	@GetMapping("/getempbylname")
	public List<Employee> getempbylname(@RequestParam String lastname)
	{
		return service.getEmpByLastName(lastname);
	}
	
	
	@GetMapping("/getempbydesignation")
	public List<Employee> getempbydesignatio(@RequestParam String designation)
	{
		return service.getEmpByDesignation(designation);
	}
	
	
	@GetMapping("/getempbydepartment")
	public List<Employee> getempbydepartment(@RequestParam String department)
	{
		return service.getEmpByDepartment(department);
	}
	
	
	@DeleteMapping("/deleteemp")
	public String deleteemp(@RequestParam int empid)
	{
		return service.deleteid(empid);
	}
	
	
	@PutMapping("/updateemp")
	public String updateemp(@RequestParam int empid,@RequestBody Employee e)
	{
		return service.updateemp(empid, e);
	}
	

}