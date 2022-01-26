import "../styles/SearchBar.scss"

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="left-side-search-bar">
            <label>
                <i className="fas fa-search"></i>
                <input type= "text" placeholder="living room"></input>
            </label>
            </div>
            <div className="right-side-search-bar">
               <select>
                   <option value="best-match">Best match</option>
                </select> 
            </div>
      

            

        </div>
    )
}

export default SearchBar;