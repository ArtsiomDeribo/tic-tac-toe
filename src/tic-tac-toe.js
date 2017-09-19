class TicTacToe {
    constructor() {
        this.gameField = [[null,null,null],[null,null,null],[null,null,null]];
        this.symbol = 'x';
        this.counter = 0;
        this.gameStatus = true;
        this.winner = null;
        this.isEmpty;
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        this.isEmpty = true;

        if (this.gameStatus == false){
            this.gameField = [[null, null, null],[null, null, null],[null, null, null]];
            this.symbol = 'x';
            this.counter = 0;
            this.gameStatus = true;
            this.winner = null;
        } else {
            if (this.gameField[rowIndex][columnIndex] == null){
                this.gameField[rowIndex][columnIndex] = this.symbol;
                this.counter++;
            } else {
                this.isEmpty = false;
            }

if (this.gameField[0][0] == this.gameField[1][0] && this.gameField[1][0] == this.gameField[2][0] && this.gameField[0][0] != null){
    this.gameStatus = false;
    this.winner = this.symbol;
} else 
if (this.gameField[0][1] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[2][1] && this.gameField[0][1] != null){
    this.gameStatus = false;
    this.winner = this.symbol;
} else
if (this.gameField[0][2] == this.gameField[1][2] && this.gameField[1][2] == this.gameField[2][2] && this.gameField[0][2] != null){
    this.gameStatus = false;
    this.winner = this.symbol;
} else
if (this.gameField[0][0] == this.gameField[0][1] && this.gameField[0][1] == this.gameField[0][2] && this.gameField[0][0] != null){
    this.gameStatus = false;
    this.winner = this.symbol;
} else
if (this.gameField[1][0] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[1][2] && this.gameField[1][0] != null){
    this.gameStatus = false;
    this.winner = this.symbol;
} else
if (this.gameField[2][0] == this.gameField[2][1] && this.gameField[2][1] == this.gameField[2][2] && this.gameField[2][0] != null){
    this.gameStatus = false;
    this.winner = this.symbol;
} else
if (this.gameField[0][0] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[2][2] && this.gameField[0][0] != null){
    this.gameStatus = false;
    this.winner = this.symbol;
} else
if (this.gameField[0][2] == this.gameField[1][1] && this.gameField[1][1] == this.gameField[2][0] && this.gameField[0][2] != null){
    this.gameStatus = false;
    this.winner = this.symbol;
} else if (this.counter == 9){
    this.gameStatus = false;
    this.winner = null;
}

        if (this.isEmpty){
            {
                if (this.symbol == 'x'){
                    this.symbol = 'o';
                } else {
                    this.symbol = 'x';
                }
            }
        }
    

    }
}

    isFinished() {
        if (this.gameStatus){
            return false;
        } else {
            return true;
        }
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        var content = 0;

        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
            if (this.gameField[i][j] != null){
                content++;
            } else {
                return false;
            }
            }
        }

        if(content == 9){
            return true;
        }
        
    }

    isDraw() {
        if (this.winner != null || this.gameStatus == true){
            return false;
        } else {
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
