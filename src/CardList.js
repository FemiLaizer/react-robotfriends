import Card from './Card'

const CardList = ({ robots }) => {
    // const CardItem = robots.map((user, i) => {
    //     return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    // })
    return (
        <div>
            {robots.map(robot => (
                <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
            ))}
            {/* {CardItem} */}
        </div>
    )
}

export default CardList;