package com.csit321G2.luab.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.csit321G2.luab.Entity.PlanTypeEntity;
import com.csit321G2.luab.Service.PlanTypeService;  // Assuming you have a PlanTypeService

@RestController
@RequestMapping("/plan-type")
public class PlanTypeController {

    @Autowired
    PlanTypeService planTypeService;  // Assuming you have a PlanTypeService

    @GetMapping("/print")
    public String printHello() {
        return "Hello, CHAD LUAB!";
    }

    // C - Create a plan type record
    @PostMapping("/insertPlanType")
    public PlanTypeEntity insertPlanType(@RequestBody PlanTypeEntity planType) {
        return planTypeService.insertPlanType(planType);
    }

    // R - Read all plan type records
    @GetMapping("/getAllPlanTypes")
    public List<PlanTypeEntity> getAllPlanTypes() {
        return planTypeService.getAllPlanTypes();
    }

    // U - Update a plan type record
    @PutMapping("/updatePlanType/{planTypeId}")
    public PlanTypeEntity updatePlanType(@PathVariable int planTypeId, @RequestBody PlanTypeEntity newPlanTypeDetails) {
        return planTypeService.updatePlanType(planTypeId, newPlanTypeDetails);
    }

    // D - Delete a plan type record
    @DeleteMapping("/deletePlanType/{planTypeId}")
    public String deletePlanType(@PathVariable int planTypeId) {
        return planTypeService.deletePlanType(planTypeId);
    }
}
