package com.csit321G2.luab.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_parking_space")
public class ParkingSpaceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parking_space_id")
    private Long parkingSpaceId;

    @Column(name = "parkingSpaceName")
    private String parkingSpaceName;

    @Column(name = "user_type")
    private String userType;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "location")
    private String location;

    @Column(name = "vehicle_type")
    private String vehicleType;

    public ParkingSpaceEntity() {
        super();
    }

    public ParkingSpaceEntity(String userType, int capacity, String location, String vehicleType, String parkingSpaceName) {
        this.userType = userType;
        this.capacity = capacity;
        this.location = location;
        this.vehicleType = vehicleType;
        this.parkingSpaceName = parkingSpaceName;

    }

    public Long getParkingSpaceId() {
        return parkingSpaceId;
    }

    public void setParkingSpaceId(Long parkingSpaceId) {
        this.parkingSpaceId = parkingSpaceId;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    
    public String getParkingSpaceName() {
        return parkingSpaceName;
    }

    public void setParkingSpaceName(String parkingSpaceName) {
        this.parkingSpaceName = parkingSpaceName;
    }
}
