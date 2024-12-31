const fibonacci = function(member, memberCount = member, sequence = [1]) {
    if (member == 0)
        return 0
    else if (member < 0)
        return "OOPS";
    
    if (memberCount == 1)
        return sequence[member - 1];

    let nextmember;
    let workingSequence = (sequence.length > 2) ? sequence.slice(sequence.length - 2) : sequence;
    
    nextmember = workingSequence.reduce((total, current) => total + current, 0);
    sequence.push(nextmember);
    return fibonacci(member, memberCount - 1, sequence);
};

// Do not edit below this line
module.exports = fibonacci;
