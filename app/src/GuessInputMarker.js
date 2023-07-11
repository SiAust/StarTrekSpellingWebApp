function GuessInputMarker({blink}) {
    return (
        <div className={`underscoreCursor ${blink ? "blink": ""}`}></div>
    )
}

export default GuessInputMarker;