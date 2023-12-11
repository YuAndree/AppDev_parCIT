package com.csit321G2.luab.Repository;

import com.csit321G2.luab.Entity.ParkingSpaceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingSpaceRepository extends JpaRepository<ParkingSpaceEntity, Long> {
}
