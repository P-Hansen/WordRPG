import "./HealthBar.scss";
//draws a rectangle for current Hp and a boarder for max Hp most of the work is done in the sass file
function HealthBar(props) {
    return(
        <>
        <div className="bar" style={{ width: props.currentHp }}/>
        <div className="barBack" style={{ width: props.maxHp-1 }}/>
        </>
    )
}

export default HealthBar