
export const getData = (cb) => {
    const vehicles = new XMLHttpRequest();
    vehicles.open('GET', 'http://localhost:9988/api/vehicle');

    vehicles.onreadystatechange = function() {
        if(vehicles.readyState === 4) {
 		    if(vehicles.status === 200) {
 			    cb(vehicles.responseText);
		    }
		}
	};

	vehicles.send();
};


export const getXeData = (cb) => {
    const vehicle = new XMLHttpRequest();
	vehicle.open('GET', 'http://localhost:9988/api/vehicle/xe');

    vehicle.onreadystatechange = function() {
        if(vehicle.readyState === 4) {
 		    if(vehicle.status === 200) {
 			    cb(JSON.parse(vehicle.responseText));
		    }
		}
	};
	vehicle.send();
};

export const getXfData = (cb) => {
    const vehicle = new XMLHttpRequest();
	vehicle.open('GET', 'http://localhost:9988/api/vehicle/xf');

    vehicle.onreadystatechange = function() {
        if(vehicle.readyState === 4) {
 		    if(vehicle.status === 200) {
 			    cb(JSON.parse(vehicle.responseText));
		    }
		}
	};
	vehicle.send();
};

export const getXjData = (cb) => {
    const vehicle = new XMLHttpRequest();
	vehicle.open('GET', 'http://localhost:9988/api/vehicle/xj');

    vehicle.onreadystatechange = function() {
        if(vehicle.readyState === 4) {
 		    if(vehicle.status === 200) {
 			    cb(JSON.parse(vehicle.responseText));
		    }
		}
	};
	vehicle.send();
};

export const getFpaceData = (cb) => {
    const vehicle = new XMLHttpRequest();
	vehicle.open('GET', 'http://localhost:9988/api/vehicle/fpace');

    vehicle.onreadystatechange = function() {
        if(vehicle.readyState === 4) {
 		    if(vehicle.status === 200) {
 			    cb(JSON.parse(vehicle.responseText));
		    }
		}
	};
	vehicle.send();
};

export const getFtypeData = (cb) => {
    const vehicle = new XMLHttpRequest();
	vehicle.open('GET', 'http://localhost:9988/api/vehicle/ftype');

    vehicle.onreadystatechange = function() {
        if(vehicle.readyState === 4) {
 		    if(vehicle.status === 200) {
 			    cb(JSON.parse(vehicle.responseText));
		    }
		}
	};
	vehicle.send();
};