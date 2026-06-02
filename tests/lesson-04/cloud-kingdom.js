const playerName = "Mario";
const currentLives = 3;

function calcularCoins (level1, level2, level3) {

    // Tổng điểm của 3 level
    const total = level1 + level2 + level3;
    //  Tính trung bình 
    const average = total / 3;
    // Phần dư khi chia hết cho 3
    const remainder = total % 3;

    console.log(`Totalation coins is: ${total}`);
    console.log(`Average coins is: ${average}`);
    console.log(`Remainder coins is: ${remainder}`);
}

calcularRemainder (25, 30, 45);
