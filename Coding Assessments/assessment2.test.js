const assessment2 = require('./assessment2');

test('Unoptimized: servers = [1, 2, 1, 4, 5] t = ["Request", "Failure 1", "Failure 2", "Request", "Request"] target = 4', () => {
    let s       = [1, 2, 1, 4, 5]
    let t       = ["Request", "Failure 1", "Failure 2", "Request", "Request"]
    let target  = 4;
    let res = assessment2.loadBalancer(s,t);
    expect(res).toBe(target);
});
