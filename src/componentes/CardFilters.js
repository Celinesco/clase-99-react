import "../styles/CardFilters.scss"

const CardFilters = () => {
    return (
        <aside className="filter-search">
            <h3>FILTER BY</h3>
            <select>
                <option value="Collection">Collection</option>
            </select>
            <select>
                <option value="Collection">Color</option>
            </select>
            <select>
                <option value="Collection">Category</option>
            </select>
            <label> Prince Range
                <input type="range"></input>
                <div className="space-between">
                    <p>$0</p>
                    <p>$10,000+</p>
                </div>
            </label>
           
        </aside>
    )
}

export default CardFilters;