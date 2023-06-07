import { theCourses } from "../Courses"
const Basic = ({screen, setScreen}) => {
    return (
        <div>
            This is the new site.
            {/* map through the courses to show what's available, create the cards in map */}
            <div className="g4">
               <p>Thing Here</p>
               <p>Other Object</p>
               <p>Still Thing</p>
            </div>
        </div>
    )
    // {results.length > 0 && results.map((result, index) => <li key={index} onClick={(e) => chooseResult(result)}>{result}</li>)}
}
export default Basic