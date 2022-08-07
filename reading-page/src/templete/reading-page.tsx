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
{/*                     <input 
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
                        
                    /> */}

                    <select 
                        onChange={
                                event => {
                                    const element = event.target
                                    const selectedIndex = element.selectedIndex

                                    console.log(element.options[selectedIndex].value)
                                    setContentFontSize(Number(element.options[selectedIndex].value))
                                
                            }
                        }
                    >
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                    </select>
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