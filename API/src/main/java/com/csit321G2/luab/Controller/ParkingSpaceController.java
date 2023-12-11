package com.csit321G2.luab.Controller;

import com.csit321G2.luab.Entity.ParkingSpaceEntity;
import com.csit321G2.luab.Service.ParkingSpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    // R - Parking Details
    @GetMapping("/parkingDetails")
    public ResponseEntity<List<ParkingSpaceEntity>> parkingDetails() {
        List<ParkingSpaceEntity> parkingSpaces = parkingSpaceService.getAllParkingSpaces();
        return ResponseEntity.ok(parkingSpaces);
    }

    // U - Update parking capacity
    @PutMapping("/updateParkingCapacity/{id}")
    public ResponseEntity<ParkingSpaceEntity> updateParkingCapacity(
            @PathVariable Long id,
            @RequestParam int capacity
    ) {
        ParkingSpaceEntity updatedParkingSpace = parkingSpaceService.updateParkingCapacity(id, capacity);

        if (updatedParkingSpace != null) {
            return ResponseEntity.ok(updatedParkingSpace);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // D - Delete parking area
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
