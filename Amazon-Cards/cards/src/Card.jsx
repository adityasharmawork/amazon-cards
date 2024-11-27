function Card({title, description}) {
    <div>
        <h2>{title}</h2>
        {description.map((ele) => <p>{ele}</p>)}
    </div>
}

export default Card