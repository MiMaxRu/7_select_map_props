import Output from "./Output"//Подключение компоненты вывода Output

import TenseData from "./TenseData"//Подключение массива данных
function App() {
  const tenseComponents = TenseData.map(tense => <Output tense={tense.tense} simple={tense.simple} continuous={tense.continuous} perfect={tense.perfect} perfect_continuous={tense.perfect_continuous} />)
  return (
    <div>
      {tenseComponents}
    </div>
  )
}
export default App