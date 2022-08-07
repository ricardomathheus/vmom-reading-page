import { useState } from "react"

interface readingProps {
    content?: any
}

export function ReadingPage(props:readingProps) {
    const [sepiaLevel, setSepiaLevel] = useState(0.5)
    const [contentFontSize, setContentFontSize] = useState(1)
    const [themeColor, setThemeColor] = useState({backgroundColor: '#242424', textColor: 'white'})
    return (
        <div 
            style={{
                filter: `sepia(${sepiaLevel})`,
                backgroundColor: themeColor.backgroundColor,
                color: themeColor.textColor,
                padding: '1rem',
                minHeight: 'calc(100vh - 2rem )'
            }}
        >
            <div 
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '1rem'
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
                        <option value="0.5">0.5x</option>
                        <option value="1" selected>1x</option>
                        <option value="1.5">1.5x</option>
                        <option value="2">2x</option>
                    </select>
                    Tamanho da fonte
                </label>

                <label>
                    <input type="checkbox"
                        onInput={
                            event => {
                                event.target.checked 
                                ? setThemeColor({backgroundColor: 'white', textColor: 'black'}) 
                                : setThemeColor({backgroundColor: '#242424', textColor: 'white'})
                            }
                        }
                    />
                    tema claro
                </label>

            </div>
            <div 
                style={{
                    fontSize: `${contentFontSize}em`,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    padding: '1rem',
                    borderRadius: '1rem',
                }}
            >
                {props.content}
            </div>
        </div>
    )
}