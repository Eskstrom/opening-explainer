function ExplanationPanel({ opening, moveIndex, currentMove }) {
  return (
    <div className="explanation-panel">
      <h2>{opening.name}</h2>
      <p className="opening-summary">{opening.summary}</p>

      <div className="current-explanation">
        {moveIndex === 0 ? (
          <p className="prompt">
            Press <strong>Next</strong> to step through the line, move by move.
          </p>
        ) : (
          <>
            <p className="move-label">
              Move {Math.ceil(moveIndex / 2)}
              {moveIndex % 2 === 1 ? ' (White)' : ' (Black)'}:{' '}
              <span className="san">{currentMove.san}</span>
            </p>
            <p className="why">{currentMove.explanation}</p>
          </>
        )}
      </div>

      <p className="progress">
        {moveIndex} / {opening.moves.length} moves
      </p>
    </div>
  )
}

export default ExplanationPanel
