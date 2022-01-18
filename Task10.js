function intersect(a, b) 
{
    let setA = new Set(a);
    let setB = new Set(b);
    let intersection = new Set([...setA].filter(x => setB.has(x)));
    console.log(Array.from(intersection)); 
}
//---------------------------------------------
intersect("house", "computers");
