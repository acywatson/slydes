import * as React from 'react'
import { useState } from 'react'
import './App.css'
import { Slyder } from 'src/components'

function App(): JSX.Element {
  const [value, setValue] = useState<number>(10)

  return (
    <div className="App">
      <div>
        <Slyder
          id={'my-slider'}
          label={'Awesomeness'}
          min={1}
          max={100}
          step={1}
          onChange={(e) => {
            setValue(parseInt(e.target.value))
          }}
          value={value}
          renderValue={(val) => <>{`${val}%`}</>}
        />
      </div>
    </div>
  )
}

export default App
