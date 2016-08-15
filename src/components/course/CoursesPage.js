import React , {PropTypes} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
  constructor(context,props){
    super(context,props);
    this.redirectToAddCoursePage=this.redirectToAddCoursePage.bind(this);
    // this.state={
    //   course:{title:"null"}
    // };
    // this.onTitleChange=this.onTitleChange.bind(this);
    // this.onClickSave=this.onClickSave.bind(this);
  }

  // onTitleChange(event){
  //   const course=this.state.course;
  //   course.title=event.target.value;
  //   this.setState({course:course});
  // }
  //
  // onClickSave(){
  //   this.props.actions.createCourse(this.state.course);
  // }

  courseRow(course,index){
    return (
      <div key={index}>{course.title}</div>
    );
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render(){
    const {courses} = this.props;

    return(
      <div>
        <h1>CoursesPage</h1>
          <input type="submit"
                  value="Add Course"
                  className="btn btn-primary"
                  onClick={this.redirectToAddCoursePage}/>
          <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes={
  actions:PropTypes.object.isRequired,
  courses:PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
  return {
    courses:state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
      actions:bindActionCreators(courseActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
