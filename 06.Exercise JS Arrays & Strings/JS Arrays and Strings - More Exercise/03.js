function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let step = 0;

    for (let size = base; size > 0; size -= 2) {
        step++;

        let totalArea = size * size;
        let innerArea = (size - 2) * (size - 2);
        let outerLayer = totalArea - innerArea;

        if (size <= 2) {
            // Top layer – entirely gold
            gold += totalArea * increment;
            break;
        }

        stone += innerArea * increment;

        if (step % 5 === 0) {
            lapis += outerLayer * increment;
        } else {
            marble += outerLayer * increment;
        }
    }

    let height = Math.floor(step * increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${height}`);
}

thePyramidOfKingDjoser(11, 1);