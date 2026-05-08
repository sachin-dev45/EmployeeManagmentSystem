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

import com.Entity.LeaveApplication;
import com.Service.LeaveApplicationServise;

@RestController
@CrossOrigin
public class LeaveApplicationController {

    @Autowired
    LeaveApplicationServise service;

    @PostMapping("/applyforleave")
    public String applyforleave(@RequestBody LeaveApplication l)
    {
        return service.applyforleave(l);
    }

    @GetMapping("/findallleaves")
    public List<LeaveApplication> findallleaves()
    {
        return service.findallleaves();
    }

    @DeleteMapping("/cancelleave")
    public String cancelleave(@RequestParam int leaveid) 
    {
        return service.cancelleave(leaveid);
    }

    @PutMapping("/updateleave")
    public String updateleave(@RequestParam int leaveid, @RequestBody LeaveApplication newl)
    {
        return service.updateleave(leaveid, newl);
    }

    @PutMapping("/updateleavestatus")
	 public String updateleavestatus(@RequestParam int leaveid, @RequestParam String action) {
		 return service.updateleavestatus(leaveid, action);
	 }

    @GetMapping("/findleavebyempid")
    public List<LeaveApplication> findleavebyempid(@RequestParam int empid)  
    {
        return service.findleavebyempid(empid);
    }
}