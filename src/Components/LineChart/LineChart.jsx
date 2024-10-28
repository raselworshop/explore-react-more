import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const mathMarks =[
        { "student_id": 1, "name": "Alice", "marks": { "math": 65, "physics": 70, "chemistry": 68, "biology": 72 } },
        { "student_id": 2, "name": "Bob", "marks": { "math": 67, "physics": 75, "chemistry": 70, "biology": 69 } },
        { "student_id": 3, "name": "Charlie", "marks": { "math": 66, "physics": 72, "chemistry": 65, "biology": 71 } },
        { "student_id": 4, "name": "David", "marks": { "math": 68, "physics": 74, "chemistry": 72, "biology": 73 } },
        { "student_id": 5, "name": "Eva", "marks": { "math": 70, "physics": 78, "chemistry": 75, "biology": 76 } },
        { "student_id": 6, "name": "Frank", "marks": { "math": 72, "physics": 73, "chemistry": 71, "biology": 74 } },
        { "student_id": 7, "name": "Grace", "marks": { "math": 73, "physics": 76, "chemistry": 74, "biology": 78 } },
        { "student_id": 8, "name": "Hannah", "marks": { "math": 75, "physics": 79, "chemistry": 77, "biology": 80 } },
        { "student_id": 9, "name": "Ian", "marks": { "math": 74, "physics": 77, "chemistry": 73, "biology": 76 } },
        { "student_id": 10, "name": "Julia", "marks": { "math": 76, "physics": 80, "chemistry": 79, "biology": 82 } }
    ]
    
    
    return (
        <div>
           <LChart width={500} height={400} data={mathMarks}>
            <XAxis  dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Line dataKey="marks.math" stroke="#8884d8"></Line>
            <Line dataKey={"marks.physics"} stroke="red"></Line>

           </LChart>
        </div>
    );
};

export default LineChart;