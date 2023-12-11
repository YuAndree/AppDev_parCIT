package com.csit321G2.luab.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.csit321G2.luab.Entity.StudentEntity;
import com.csit321G2.luab.Service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {
	@Autowired
	StudentService sserv;
	@GetMapping("/print")
	public String printHello() {
		return "Hello, CHAD LUAB!";
	}
	//C - Create a student record
	@PostMapping("/insertStudent")
	public StudentEntity insertStudent(@RequestBody StudentEntity student) {
		return sserv.insertStudent(student);
	}
	//R - read all student records in tblstudent
	@GetMapping("/getAllStudents")
	public List<StudentEntity> getAllStudents(){
		return sserv.getAllStudents();
	}
	
	//U - Update a student record
	@PutMapping("/updateStudent")
	public StudentEntity updateStudent(@RequestParam int sid, @RequestBody StudentEntity newStudentDetails){
		return sserv.updateStudent(sid, newStudentDetails);
	}
	//D - Delete a student record
	@DeleteMapping("/deleteStudent/{sid}")
	public String deleteStudent(@PathVariable int sid) {
		return sserv.deleteStudent(sid);
		
	}

}
