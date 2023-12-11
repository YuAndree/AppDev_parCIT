package com.csit321G2.luab.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_plan_type")
public class PlanTypeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "plan_type_id")
    private int planTypeId;

    @Column(name = "plan_name")
    private String planName;

    @Column(name = "data_allowance")
    private int dataAllowance;

    @Column(name = "price")
    private double price;

    public PlanTypeEntity() {
        super();
    }

    public PlanTypeEntity(int planTypeId, String planName, int dataAllowance, double price) {
        super();
        this.planTypeId = planTypeId;
        this.planName = planName;
        this.dataAllowance = dataAllowance;
        this.price = price;
    }

    public int getPlanTypeId() {
        return planTypeId;
    }

    public void setPlanTypeId(int planTypeId) {
        this.planTypeId = planTypeId;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public int getDataAllowance() {
        return dataAllowance;
    }

    public void setDataAllowance(int dataAllowance) {
        this.dataAllowance = dataAllowance;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}

	