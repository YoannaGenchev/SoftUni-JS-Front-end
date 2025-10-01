function printDNA(length) {
    const sequence = 'ATCGTTAGGG';
    let seqIndex = 0;

    for (let i = 0; i < length; i++) {
        let char1 = sequence[seqIndex % sequence.length];
        let char2 = sequence[(seqIndex + 1) % sequence.length];
        seqIndex += 2;

        let line = '';

        let mod = i % 4;
        if (mod === 0) {
            line = `**${char1}${char2}**`;
        } else if (mod === 1 || mod === 3) {
            line = `*${char1}--${char2}*`;
        } else if (mod === 2) {
            line = `${char1}----${char2}`;
        }

        console.log(line);
    }
}

printDNA(4);