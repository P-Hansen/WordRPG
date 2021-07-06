import "./HealthBar.scss";

function HealthBar(props) {
    return(
        <>
        <div className="bar" style={{width: props.currentHp }}/>
        <div className="barBack" style={{width: props.maxHp-1 }}/>
        </>
    )
}

export default HealthBar