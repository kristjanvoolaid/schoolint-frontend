import React from 'react'
import StudentCard from './StudentCard';

const StudentCardList = ({ students }) => {
    return (
        <div>
            {
                students.map((student, i) => {
                    return (
                        <StudentCard 
                            key={i}
                            name={students[i].Name}
                            score={students[i].Score}
                            email={students[i].Email}
                            active={students[i].Active}
                        />
                    )
                })
            }
        </div>
    );
}

export default StudentCardList;
