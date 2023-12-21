export const getParkingDetails = async () => {
  try {
    const response = await fetch(
      "http://localhost:8080/parking/parkingDetails",
      {
        method: "GET",
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("par ka atay sa error par!!!! ", error);
  }
};

export const getParkingDetailsById = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8080/parking/parkingDetails/${id}`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("par ka atay sa error par!!!! ", error);
  }
};

export const createParkingDetails = async (data) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  };
  fetch("http://localhost:8080/parking/createParkingSpace", options)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

export const updateParkingDetails = async (id, data) => {
  const options = {
    method: "PUT", // Use 'PUT' for update requests
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  };
  const requestUrl = new URLSearchParams(data).toString();

  // Assuming the endpoint for updating is 'http://localhost:8080/parking/updateParking/{id}'
  const url = `http://localhost:8080/parking/updateParking/${id}?${requestUrl}`;

  try {
    const response = await fetch(url, options);
    const updatedData = await response.json();
    console.log("updatedData", updatedData);
    return updatedData;
  } catch (error) {
    console.error(error);
  }
};

export const updateOccupiedSpaces = async (id, data) => {
  const options = {
    method: "PUT", // Use 'PUT' for update requests
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  };
  const requestUrl = new URLSearchParams(data).toString();

  // Assuming the endpoint for updating is 'http://localhost:8080/parking/updateParkingOccupiedSpaces/{id}'
  const url = `http://localhost:8080/parking/updateParkingOccupiedSpaces/${id}?${requestUrl}`;

  try {
    const response = await fetch(url, options);
    const updatedData = await response.json();
    console.log("updatedData", updatedData);
    return updatedData;
  } catch (error) {
    console.error(error);
  }
};

export const deleteParkingDetails = async (id) => {
  const options = {
    method: "DELETE", // Use 'DELETE' for delete requests
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  // Assuming the endpoint for deleting is 'http://localhost:8080/parking/deleteParkingSpace/{id}'
  const url = `http://localhost:8080/parking/deleteParkingArea/${id}`;

  try {
    const response = await fetch(url, options);

    // Check if the deletion was successful
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
  }
};
