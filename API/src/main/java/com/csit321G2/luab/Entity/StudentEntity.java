package com.csit321G2.luab.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tblstudent")
public class StudentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid;	
	
	@Column(name="firstname")
	private String fname;
	
	@Column(name="lastname")
	private String lname;
	
	private String gender;

	public StudentEntity() {
		super();
	}

	public StudentEntity(int sid, String fname, String lname, String gender) {
		super();
		this.sid = sid;
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	

	
	
}
