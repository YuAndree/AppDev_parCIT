export const getParkingDetails = async () => {
    try {
      const response = await fetch('http://localhost:8080/parking/parkingDetails', {
        method: "GET",
      });
      const result = await response.json();
      return result;
    } catch(error) {
        console.log('par ka atay sa error par!!!! ', error);
    };
}

export const createParkingDetails = async (data) => {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data),
      };
      fetch('http://localhost:8080/parking/createParkingSpace', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

export const updateParkingDetails = async (id, data) => {
    const options = {
        method: 'PUT',  // Use 'PUT' for update requests
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data),
    };

    // Assuming the endpoint for updating is 'http://localhost:8080/parking/updateParkingSpace/{id}'
    const url = `http://localhost:8080/parking/updateParkingSpace/${id}`;

    try {
        const response = await fetch(url, options);
        const updatedData = await response.json();
        console.log(updatedData);
    } catch (error) {
        console.error(error);
    }
}
export const deleteParkingDetails = async (id) => {
    const options = {
        method: 'DELETE',  // Use 'DELETE' for delete requests
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
    };

    // Assuming the endpoint for deleting is 'http://localhost:8080/parking/deleteParkingSpace/{id}'
    const url = `http://localhost:8080/parking/deleteParkingSpace/${id}`;

    try {
        const response = await fetch(url, options);
        
        // Check if the deletion was successful
        if (response.status === 200) {
            console.log(`Parking space with ID ${id} deleted successfully.`);
        } else {
            console.error(`Failed  to delete parking space with ID ${id}.`);
        }
    } catch (error) {
        console.error(error);
    }
}

