import React from 'react';

class AttendanceBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // 꼭 id 키 값이 있어야됨, 안그러면 개발자도구에서 쎄게 warning 뜸
            students: [
                { id: 1, name: 'Mike'}
                ,{ id: 2, name: 'Jane'}
                ,{ id: 3, name: 'Susan'}
                ,{ id: 4, name: 'Steve'}
                ,{ id: 5, name: 'Brad'}
                ,{ id: 6, name: 'Leo'}
                ,{ id: 7, name: 'John'}
                ,{ id: 8, name: 'Sam'}
                ,{ id: 9, name: 'Kate'}
            ]
        }
    }

    render() {
        // 배열을 받아와서
        var { students } = this.state;
        // 방법1: 화살표 함수로 만들어서 return에다가 집어넣는 방법
        // const studentList = students.map((student) => 
        //     <li key = {student.id}>{student.name}</li>
        // );

        // element variable형태
        return (
            // 방법1
            // <ul>
            //     {studentList}
            // </ul>
            
            // 방법2: JSX안에 집에넣는 방법, 코드가 간결해짐 
            <ul>
                {students.map((student) => 
                    <li key = {student.id}>{student.name}</li>
                )}
            </ul>
        )
    }
}

export default AttendanceBook;