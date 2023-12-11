package com.csit321G2.luab.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.csit321G2.luab.Entity.PlanTypeEntity;

@Repository
public interface PlanTypeRepository extends JpaRepository<PlanTypeEntity, Integer> {
}
