/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
function CampusName(props) {
	const campusName = props.campusName
	const student = props.student
	if(campusName != null) {
		return <h3>{student.campus.name}</h3>;
	}
	return <h3>{"Not enrolled in a campus"}</h3>;
}
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <CampusName campusName={student.campusId} student={student} />
    </div>
  );

};
//<h3>{student.campus.name}</h3>
export default StudentView;