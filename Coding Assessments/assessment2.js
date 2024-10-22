module.exports = {
    loadBalancer: loadBalancer,
    optimizedLoadBalancer: optimizedLoadBalancer,
};


/*
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
    
}
function optimizedLoadBalancer(servers, request) {
    
}