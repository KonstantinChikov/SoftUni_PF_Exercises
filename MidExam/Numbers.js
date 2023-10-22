// Ex. II

function numbers(input) {
    let sequence = input.shift().split(' ').map(Number);

    for (let line of input) {
        if (line === "Finish") {
            break;
        }

        let [command, arg1, arg2] = line.split(' ');

        if (command === "Add") {
            sequence.push(Number(arg1));
        } else if (command === "Remove") {
            sequence = sequence.filter(num => num !== Number(arg1));
        } else if (command === "Replace") {
            if (sequence.includes(Number(arg1))) {
                let index = sequence.indexOf(Number(arg1));
                sequence[index] = Number(arg2);
            }
        } else if (command === "Collapse") {
            sequence = sequence.filter(num => num >= Number(arg1));
        }
    }

    console.log(sequence.join(' '));
}


numbers(['1 4 5 19', 'Add 1', 'Remove 4', 'Finish'])