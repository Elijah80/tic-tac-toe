const container = document.querySelector('.container')

// Player Object Factory
const Player = (name, token) => {
	return { name, token }
}

// Gameboard Object
const Gameboard = (() => {
	// Set initial state of the board
	const board = Array(9).fill('')

	const getBoard = () => board

	const makeMove = (index, token) => {
		if (board[index] === '') {
			board[index] = token
			return true // successful move
		}

		return false // invalid move
	}

	// Reset the board
	const resetBoard = () => {
		for (let i = 0; i < board.length; i++) {
			board[i] = ''
		}
	}

	return { getBoard, makeMove, resetBoard }
})()

// Game controller object
const GameController = (() => {
	let currentPlayer
	let winner

	const startGame = (player1, player2) => {
		currentPlayer = player1
		winner = null
	}

	const switchPlayer = () => {
		currentPlayer = currentPlayer === player1 ? player2 : player1
	}

	const checkForWinner = () => {
		// TODO: add logic to check for winner
	}

	const playTurn = index => {
		if (!Gameboard.makeMove(index, currentPlayer.token)) return false

		if (checkForWinner()) {
			winner = currentPlayer
		} else {
			switchPlayer()
		}

		return true
	}

	const getWinner = () => winner

	return { startGame, playTurn, getWinner }
})()

// Example usage
const player1 = Player('John', 'X')
const player2 = Player('Steve', 'O')

GameController.startGame(player1, player2)

// Example turns
GameController.playTurn(0)
GameController.playTurn(4)
GameController.playTurn(1)

console.log(Gameboard.getBoard())
console.log(GameController.getWinner())
console.log(`${player1.name} or ${player2.name} could be the winner`)
console.log({player1, player2})
