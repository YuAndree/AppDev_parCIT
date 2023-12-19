package com.csit321G2.luab.Service;

import com.csit321G2.luab.Entity.ParkingSpaceEntity;
import com.csit321G2.luab.Repository.ParkingSpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParkingSpaceService {

    @Autowired
    private ParkingSpaceRepository parkingSpaceRepository;

    public List<ParkingSpaceEntity> getAllParkingSpaces() {
        return parkingSpaceRepository.findAll();
    }

    public Optional<ParkingSpaceEntity> getParkingSpaceById(Long id) {
        return parkingSpaceRepository.findById(id);
    }

    public ParkingSpaceEntity createParkingSpace(ParkingSpaceEntity parkingSpace) {
        return parkingSpaceRepository.save(parkingSpace);
    }

        public ParkingSpaceEntity updateParkingCapacity(Long id, int capacity) {
            try {
                // attempts to find the ID in the repo
                ParkingSpaceEntity parkingSpace = parkingSpaceRepository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Parking space with id " + id + " not found"));
                // if found, Update it's capacity and return save
                parkingSpace.setCapacity(capacity);
                return parkingSpaceRepository.save(parkingSpace);
            //if exception occurs,  wraps in runtime exception and rethrow        
            } catch (Exception e) {
                throw new RuntimeException("Error updating parking capacity", e);
            }
        }

    public void deleteParkingSpace(Long id) {
        if (parkingSpaceRepository.existsById(id)) {
            parkingSpaceRepository.deleteById(id);
        } else {
            throw new RuntimeException("Parking space with id " + id + " not found");
        }
    }
}
