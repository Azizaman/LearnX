// Importing necessary components
import CourseList from "../_components/CourseList";
import WelcomeBanner from "../_components/WelcomeBanner";

function Courses() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 p-5"> 
            {/* Left container */}
            <div className="col-span-3">
                {/* Banner */}
                <WelcomeBanner />

                {/* Course list section */}
                <CourseList />
            </div>

            {/* Right container */}
            <div>
                Right section
            </div>
        </div>
    );
}

export default Courses;
