const Fav_food_creator = (props) => {
    return <li>I love {props.details.name} from {props.details.country}</li>
}
const Food_list_creator = (props) => {
    const fav_food = [
        {id:1,det:{name:'sushi',country:'Japan'}},
        {id:2,det:{name:'pizza',country:'Italy'}},
        {id:3,det:{name:'pho',country:'Vietnam'}}
    ];
    return (
        <>
            <h2>My favorite {props.title}</h2>
            <ul>
                {fav_food.map((x)=><Fav_food_creator key={x.id} details={x.det}/>)}
            </ul>        
        </>
    );
}
export default Food_list_creator;