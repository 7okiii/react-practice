const Mate_creator = (props) => {
    return <li>{props.name}</li>
}
const Mate_list_creator = (props) => {
    const mates = ['Yuya','Juan','Zac'];
    return (
        <>
            <h2>My {props.course} classmates</h2>
            <ul>
                {mates.map((x)=><Mate_creator name={x}/>)}
            </ul>
        </>
    )
}
export default Mate_list_creator;