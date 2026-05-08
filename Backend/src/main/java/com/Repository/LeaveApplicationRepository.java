package com.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Entity.LeaveApplication;

@Repository
public interface LeaveApplicationRepository extends JpaRepository<LeaveApplication,Integer>
{
    @Query(value="SELECT * FROM leave_application WHERE employee_id = :empid", nativeQuery=true)
    public List<LeaveApplication> findleavebyempid(int empid);
}