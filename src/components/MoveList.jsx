function MoveList({ moves, moveIndex, onJump }) {
  const pairs = []
  for (let i = 0; i < moves.length; i += 2) {
    pairs.push({
      number: i / 2 + 1,
      white: moves[i],
      black: moves[i + 1],
    })
  }

  return (
    <ol className="move-list">
      {pairs.map((pair) => (
        <li key={pair.number}>
          <span className="move-number">{pair.number}.</span>
          <button
            type="button"
            className={moveIndex === pair.number * 2 - 1 ? 'active' : ''}
            onClick={() => onJump(pair.number * 2 - 1)}
          >
            {pair.white.san}
          </button>
          {pair.black && (
            <button
              type="button"
              className={moveIndex === pair.number * 2 ? 'active' : ''}
              onClick={() => onJump(pair.number * 2)}
            >
              {pair.black.san}
            </button>
          )}
        </li>
      ))}
    </ol>
  )
}

export default MoveList
