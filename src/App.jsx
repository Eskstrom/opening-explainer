import { useMemo, useState } from 'react'
import { Chess } from 'chess.js'
import { Chessboard } from 'react-chessboard'
import openings from './data/openings.json'
import OpeningSelector from './components/OpeningSelector'
import MoveList from './components/MoveList'
import ExplanationPanel from './components/ExplanationPanel'
import './App.css'

function App() {
  const [selectedId, setSelectedId] = useState(openings[0].id)
  const [moveIndex, setMoveIndex] = useState(0)

  const opening = useMemo(
    () => openings.find((o) => o.id === selectedId),
    [selectedId],
  )

  const fen = useMemo(() => {
    const chess = new Chess()
    for (let i = 0; i < moveIndex; i += 1) {
      chess.move(opening.moves[i].san)
    }
    return chess.fen()
  }, [opening, moveIndex])

  const handleSelectOpening = (id) => {
    setSelectedId(id)
    setMoveIndex(0)
  }

  const goNext = () =>
    setMoveIndex((i) => Math.min(i + 1, opening.moves.length))
  const goPrev = () => setMoveIndex((i) => Math.max(i - 1, 0))
  const goStart = () => setMoveIndex(0)

  const currentMove = moveIndex > 0 ? opening.moves[moveIndex - 1] : null

  return (
    <div className="app">
      <header>
        <h1>Opening Explainer</h1>
        <p className="tagline">
          Learn chess openings by understanding the idea behind every move,
          not just memorizing the moves themselves.
        </p>
      </header>

      <OpeningSelector
        openings={openings}
        selectedId={selectedId}
        onSelect={handleSelectOpening}
      />

      <main className="layout">
        <div className="board-column">
          <div className="board-wrapper">
            <Chessboard
              options={{
                position: fen,
                allowDragging: false,
                showNotation: true,
              }}
            />
          </div>

          <div className="controls">
            <button type="button" onClick={goStart} disabled={moveIndex === 0}>
              ⏮ Start
            </button>
            <button type="button" onClick={goPrev} disabled={moveIndex === 0}>
              ← Previous
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={moveIndex === opening.moves.length}
            >
              Next →
            </button>
          </div>

          <MoveList
            moves={opening.moves}
            moveIndex={moveIndex}
            onJump={setMoveIndex}
          />
        </div>

        <ExplanationPanel
          opening={opening}
          moveIndex={moveIndex}
          currentMove={currentMove}
        />
      </main>
    </div>
  )
}

export default App
