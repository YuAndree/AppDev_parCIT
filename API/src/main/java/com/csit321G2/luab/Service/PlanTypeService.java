package com.csit321G2.luab.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csit321G2.luab.Entity.PlanTypeEntity;
import com.csit321G2.luab.Repository.PlanTypeRepository;  // Assuming you have a PlanTypeRepository

@Service
public class PlanTypeService {

    @Autowired
    PlanTypeRepository planTypeRepository;  // Assuming you have a PlanTypeRepository

    // C - Create or insert a plan type record
    public PlanTypeEntity insertPlanType(PlanTypeEntity planType) {
        return planTypeRepository.save(planType);
    }

    // R - Read all plan type records
    public List<PlanTypeEntity> getAllPlanTypes() {
        return planTypeRepository.findAll();
    }

    // U - Update a plan type
    public PlanTypeEntity updatePlanType(int planTypeId, PlanTypeEntity newPlanTypeDetails) {
        PlanTypeEntity planType = new PlanTypeEntity();
        try {
            // Search for the plan type by its ID
            planType = planTypeRepository.findById(planTypeId).orElse(null);

            if (planType != null) {
                // Update the record
                planType.setPlanName(newPlanTypeDetails.getPlanName());
                planType.setDataAllowance(newPlanTypeDetails.getDataAllowance());
                planType.setPrice(newPlanTypeDetails.getPrice());
            } else {
                throw new NoSuchElementException("Plan Type " + planTypeId + " does not exist!");
            }
        } catch (NoSuchElementException ex) {
            throw new NoSuchElementException("Plan Type " + planTypeId + " does not exist!");
        }

        return planTypeRepository.save(planType);
    }

    // D - Delete a plan type
    public String deletePlanType(int planTypeId) {
        String msg = "";

        if (planTypeRepository.existsById(planTypeId)) {
            planTypeRepository.deleteById(planTypeId);
            msg = "Plan Type " + planTypeId + " is successfully deleted!";
        } else {
            msg = "Plan Type " + planTypeId + " does not exist";
        }

        return msg;
    }
}
