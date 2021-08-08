import "./HealthBar.scss";
//draws a rectangle for current Hp and a boarder for max Hp most of the work is done in the sass file
function HealthBar(props) {

    function max(num, max) {
        let percent = (num / max) * 100;
        return percent;
        // return (num > max) ? max : num;
    };

    return(
        <>
        <div>{props.name}</div>
        <div className="bar" style={{ width: max(props.currentHp, props.maxHp) }}/>
        <div className="barBack" style={{ width: 100 }}/>
        <div className="barText" >{props.currentHp}/{props.maxHp}</div>
        </>
    )
}

export default HealthBar