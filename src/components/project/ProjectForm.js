function ProjectForm(){
    return (
        <form>
            <div>
                <input type="text" placeholder="Enter project name"/>
            </div>
            <div>
                <input type="number" placeholder="Enter the budget"/>
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Select the category</option>
                </select>
            </div>
            <input type="submit" value="Create"/>
        </form>
    )
}

export default ProjectForm