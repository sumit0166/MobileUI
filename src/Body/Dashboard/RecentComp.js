import './RecentComp.css'

function RecentComp({ Icon, color, Head, subHead, State }) {
    const StateColor = {
        Active: '#68ae73',
        Deactive: '#BF7480',
        Draft: '#9CC9D4'
    }
    return (
        <div className="RecentComp" >
            <div className="icon" style={{ background: color + '3b' }}>
                <Icon size="29" color={color} variant="Bold" />
            </div>
            <div className='details'>
                <div className="det-cont">
                    <span className="det-heading">{Head}</span>
                    <span className="det-subHead">{subHead}</span>
                </div>
            </div>
            <div className="state">
                <span style={{ color: StateColor[State] }}>{State}</span>
            </div>
        </div>
    )
}

export default RecentComp;