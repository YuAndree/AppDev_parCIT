package com.csit321G2.luab.Controller;

import com.csit321G2.luab.Entity.ParkingSpaceEntity;
import com.csit321G2.luab.Service.ParkingSpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/parking")
@CrossOrigin(origins = {"http://localhost:3000"})
public class ParkingSpaceController {

    @Autowired
    private ParkingSpaceService parkingSpaceService;

    @GetMapping("/print")
    public ResponseEntity<String> printHello() {
        return ResponseEntity.ok("Hello, CHAD LUAB!");
    }

    // C - Create parking space
    @PostMapping("/createParkingSpace")
    public ResponseEntity<ParkingSpaceEntity> createParkingSpace(@RequestBody ParkingSpaceEntity parkingSpace) {
        ParkingSpaceEntity createdParkingSpace = parkingSpaceService.createParkingSpace(parkingSpace);
        return ResponseEntity.ok(createdParkingSpace);
    }

    @PutMapping("/updateParking/{id}")
    public ResponseEntity<ParkingSpaceEntity> updateParking(
            @PathVariable Long id,
            @RequestParam int capacity,
            @RequestParam String parkingSpaceName,
            @RequestParam String userType,
            @RequestParam String location,
            @RequestParam String vehicleType,
            @RequestParam int occupiedSpaces
    ) {
        ParkingSpaceEntity updatedParkingSpace = parkingSpaceService.updateParking(id, capacity, parkingSpaceName, userType, location, vehicleType, occupiedSpaces);
        // Check if the update was successful
        if (updatedParkingSpace != null) {
            return ResponseEntity.ok(updatedParkingSpace);
        } else {
         // if parking space is not found return 404 response
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/updateParkingOccupiedSpaces/{id}")
    public ResponseEntity<ParkingSpaceEntity> updateParkingOccupiedSpaces(
            @PathVariable Long id,
            @RequestParam int occupiedSpaces
    ) {
        ParkingSpaceEntity updatedParkingSpace = parkingSpaceService.updateParkingOccupiedSpaces(id, occupiedSpaces);
        // Check if the update was successful
        if (updatedParkingSpace != null) {
            return ResponseEntity.ok(updatedParkingSpace);
        } else {
        // if parking space is not found return 404 response
            return ResponseEntity.notFound().build();
        }
    }

    // R - Parking Details
    @GetMapping("/parkingDetails")
    public ResponseEntity<List<ParkingSpaceEntity>> parkingDetails() {
        List<ParkingSpaceEntity> parkingSpaces = parkingSpaceService.getAllParkingSpaces();
        return ResponseEntity.ok(parkingSpaces);
    }

    // R - Parking Details
    @GetMapping("/parkingDetails/{id}")
    public ResponseEntity<Optional<ParkingSpaceEntity>> parkingDetailsById(
        @PathVariable Long id
    ) {
        Optional<ParkingSpaceEntity> parkingSpace = parkingSpaceService.getParkingSpaceById(id);
        return ResponseEntity.ok(parkingSpace);
    }
        // U - Update parking capacity
//This annotation maps HTTP PUT requests to the specified endpoint 
//("/updateParkingCapacity/{id}"). It means this method will be invoked when a PUT request is 
//made to this endpoint.
    @PutMapping("/updateParkingCapacity/{id}")
    public ResponseEntity<ParkingSpaceEntity> updateParkingCapacity(
            @PathVariable Long id,
            @RequestParam int capacity
    ) {
        ParkingSpaceEntity updatedParkingSpace = parkingSpaceService.updateParkingCapacity(id, capacity);
   // Check if the update was successful
        if (updatedParkingSpace != null) {
            return ResponseEntity.ok(updatedParkingSpace);
        } else {
    // if parking space is not found return 404 response
            return ResponseEntity.notFound().build();
        }
    }

    // D - Delete parking area
    // It means this method will be invoked when a DELETE request is made to this endpoint.
    @DeleteMapping("/deleteParkingArea/{id}")
    public ResponseEntity<Void> deleteParkingArea(@PathVariable Long id) {
        try {
            parkingSpaceService.deleteParkingSpace(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
