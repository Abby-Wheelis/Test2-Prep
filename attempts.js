var Promise = d3.json("JSON.json");

Promise.then(
function(data)
    {
        console.log("working promise", data);
        
        counter(data);
    },
function(err)
    {
        console.log("promise done broked", err);
    })

var counter = function(data)
{
    return d3.count(data)
}