import { useState } from "react"

interface readingProps {
    content?: any
}

export function ReadingPage(props:readingProps) {
    const [sepiaLevel, setSepiaLevel] = useState(0.5)
    const [contentFontSize, setContentFontSize] = useState(1)
    return (
        <div style={{filter: `sepia(${sepiaLevel})`, color: 'white'}}>
            <div 
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem'
                }}
            >
                <label>
                    <input 
                        type="range" 
                        min="0" max="100" 
                        onInput={
                            event => {
                                const inputValue = event.target.value
                                setSepiaLevel(Number(inputValue)/100)
                            }
                        }
                    />
                    Sepia
                </label>
                    
                <label>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        onInput={
                            event => {
                                const inputValue = event.target.value
                                setContentFontSize(Number(inputValue)/100 +1)
                                console.log(contentFontSize)
                            }
                        }
                        
                    />
                    Tamanho da fonte
                </label>

            </div>
            <div 
                style={{
                    fontSize: `${contentFontSize}em`,
                    margin: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    padding: '1rem',
                    borderRadius: '1rem'
                }}
            >
                {props.content}
            </div>
        </div>
    )
}