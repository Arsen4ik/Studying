// eslint-disable-next-line react/prop-types
export default function Stars({ stars }) {
    return (
        <div>
            {
                // eslint-disable-next-line react/prop-types
                stars.map((isVisible, ind) => <img key={ind} className={(!isVisible && 'notGold') + ' star'} src="./star.svg" alt="" />)
            }
        </div>
    )
}