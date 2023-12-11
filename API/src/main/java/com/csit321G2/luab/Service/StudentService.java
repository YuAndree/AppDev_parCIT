package com.csit321G2.luab.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321G2.luab.Entity.StudentEntity;
import com.csit321G2.luab.Repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository srepo;
	//C - Create or insert student record in tblstudent
	public StudentEntity insertStudent(StudentEntity student) {
		return srepo.save(student);
	}
	//R - read all records in tblstudent
	public List<StudentEntity> getAllStudents(){
		return srepo.findAll();
	}
	
	//U - update a student
	@SuppressWarnings("finally")
	public StudentEntity updateStudent(int sid, StudentEntity newStudentDetails) {
		StudentEntity student = new StudentEntity();
		try {
			//search the id of the student that will be updated
			student = srepo.findById(sid).get();
			//Update the record
			student.setFname(newStudentDetails.getFname());
			student.setLname(newStudentDetails.getLname());
			student.setGender(newStudentDetails.getGender());
		}catch(NoSuchElementException ex) {
			throw new NoSuchElementException("Student "+ sid + "does not exist!");	
		}finally {
			return srepo.save(student);
		}
	}
	
	//D - Delete a student
	public String deleteStudent(int sid) {
		String msg = "";
		
		if(srepo.findById(sid) != null){
			srepo.deleteById(sid);
			msg = "Student "+ sid+ " is successfully deleted!";
			
		}else
			msg = "Student "+ sid+ " does not exist";
		return msg;
	}
	
	

}
