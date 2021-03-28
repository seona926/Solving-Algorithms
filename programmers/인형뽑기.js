function pickDolls(board, moves) {
    let count = 0;
    let bucket = [];
    let choiceCount = 0; // 가장 위의 숫자(인형)만 push 하기 위해 쓰이는 count

    for (let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {
            // 0이 아닌 가장 위의 숫자(인형)일 때만
            if (board[j][moves[i] - 1] !== 0 && choiceCount === i) {
                // 다음 loop때는 두 번째 숫자(인형) push 하기 위해 ++
                choiceCount++;
                // bucket의 마지막 숫자와 같을 경우 pop
                if (bucket[bucket.length - 1] === board[j][moves[i] - 1]) {
                    bucket.pop();
                    // 한 번에 두 숫자(인형)가 없어졌으므로 2 count
                    count += 2;
                // 아니면 bucket에 push
                } else bucket.push(board[j][moves[i] - 1]);

                // push해준 숫자(인형) 자리를 0으로 만들어줌
                board[j][moves[i] - 1] = 0;
            }
        }
    }

    return count;
};