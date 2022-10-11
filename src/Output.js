export default function Output (props) {//Объявление и экспорт компоненты вывода данных через props
    return (
        <div>
            {/*Создание шаблона вставки, для последующего вывода переданных данных*/}
            <h2>{props.tense}</h2>
            <h3>{props.simple}</h3>
            <h3>{props.continuous}</h3>
            <h3>{props.perfect}</h3>
            <h3>{props.perfect_continuous}</h3>
            <hr/>
        </div>
    )
}