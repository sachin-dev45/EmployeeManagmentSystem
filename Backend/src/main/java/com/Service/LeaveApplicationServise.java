package com.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Entity.LeaveApplication;
import com.Repository.LeaveApplicationRepository;

@Service
public class LeaveApplicationServise {
	
	@Autowired
	LeaveApplicationRepository lrepo;
	
	public String applyforleave(LeaveApplication l)
	{
		l.setStatus("pending");
		lrepo.save(l);
		return "Applied for leave sucessfully";
	}
	
	public List<LeaveApplication> findallleaves()
	{
		return lrepo.findAll();
	}
	
	public String cancelleave(int leaveid)
	{
		LeaveApplication existleave=lrepo.findById(leaveid).orElse(null);
		if(existleave!=null)
		{
			lrepo.deleteById(leaveid);
			return "Leave cancelled sucessfully";
		}
		else
		{
			return "No record found for given id ";
		}
	}
	
	public String updateleave(int leaveid,LeaveApplication newl)
	{
		LeaveApplication existleave=lrepo.findById(leaveid).orElse(null);
		if(existleave==null)
		{
			return "No matching record found for given id ";
		}
		
		if(newl.getReason()==null&&newl.getFromdate()==null&&newl.getTodate()==null)
		{
			return "No data provided for updation";
		}
		
		if(newl.getReason()!=null)
		{
			existleave.setReason(newl.getReason());
		}
		
		if(newl.getFromdate()!=null)
		{
			existleave.setFromdate(newl.getFromdate());
		}
		
		if(newl.getTodate()!=null)
		{
			existleave.setTodate(newl.getTodate());
		}
		
		lrepo.save(existleave);
		return "Leave application details update sucessfully";
	}
	
	public String updateleavestatus(int leaveid, String action) {
	    LeaveApplication existingleave = lrepo.findById(leaveid).orElse(null);

	    if (existingleave != null) {
	        existingleave.setStatus(action);
	        lrepo.save(existingleave);   
	        return "Leave Status updated successfully";
	    } else {
	        return "No matching record found for given leaveid";
	    }
	}
	
	public List<LeaveApplication>findleavebyempid(int empid)
	{
		return lrepo.findleavebyempid(empid);
	}

}
