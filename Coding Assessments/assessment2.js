module.exports = {
    loadBalancer: loadBalancer,
    optimizedLoadBalancer: optimizedLoadBalancer,
};


/*
    Assessment: 52 6F 62 6C 6F 78

    Given 2 lists create a load balancer that distributes request. 

    List 1 is the list of servers with its max capacity
        [1, 2, 1, 1, 3]

    List 2 is the list of Requests and Failures that indicates that server is broken 
        Formatted
            Request
            Failure <i>
        
    After every iteration of the load balancer, will reset the failures
    
*/


function loadBalancer(servers, request) {
    /*
    Time Complexity - 
    Space Complexity - 

    * @param {string[], string[]} server, request 
    * @return {string}
    * 
    * NOT WORKING AS INTENDED (WIP)
    */
    
    let serverFails = new Set();
    let serverPointer = 0;
    let serverCapacity = new Array(servers.length).fill(0);
    let largestCapacityIndex = servers.length-1;


    for (const req of request) {
        while (serverFails.has(serverPointer)) {
            serverPointer++;
            if (serverPointer >= servers.length) {
                serverFails.clear();
                serverPointer = 0;
            }
        }

        if (req[0] != "R") {
            serverFails.add(Number(req.split(" ")[1]));
        }
        if (!serverFails.has(serverPointer) && serverCapacity[serverPointer] < servers[serverPointer]) {
            serverCapacity[serverPointer] += 1;
            serverPointer++;
        }
        if (serverPointer >= servers.length) {
            serverFails.clear();
            serverPointer = 0;
        }
    }
    for (let x = serverCapacity.length - 1; x >= 0; x--) {
        if (serverCapacity[largestCapacityIndex] < serverCapacity[x]) {
            largestCapacityIndex = x;
        }
    }
        console.log(serverCapacity)

    return largestCapacityIndex


}
function optimizedLoadBalancer(servers, request) {
       /*
    Time Complexity - 
    Space Complexity - 

    * @param {string[], string[]} server, request 
    * @return {string}
    */
}