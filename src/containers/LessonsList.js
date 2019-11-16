import React, { Component } from 'react'
// import { getLessons } from '../actions/lessons'
import { connect } from 'react-redux'
import Lesson from '../components/LessonPage'
import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom';

class LessonsList extends Component {

    // componentDidMount() {
    //     this.props.getLessons()
    // }

    render() {
        if (this.props.lessons.length === 0) {
            // Possible loading bar/cycle
            return <h1> Loading... </h1>
        }
        return (
            //TODO: Times & Date
            <div>
                <h1> Lessons List </h1>

                {this.props.lessons.map( lesson => 
                    <div>
                        <a href={`/lessons/${lesson.id}`}><h2>{lesson.title}</h2></a>
                        <Link to={`/lessons/${lesson.id}`}>Testing </Link>
                        {/* <Route path={`${match.url}/:lessonId`} component={LessonShow}/> */}
                        {/* <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link> */}
                        <p>{lesson.description}</p>
                        <p>{lesson.date}</p>
                        <p>{lesson.start_time}</p>
                        <p>{lesson.end_time}</p>.
                        <hr />

                    {/* <Route exact path={`/lessons/:lesson.id`} component={Lesson} /> */}
                    </div>
                )}
            </div>
        )
    }

}


export default connect(state => ({ lessons: state.lessons }))(LessonsList)

// export default connect(mapStateToProps, { getLessons })(LessonsList)