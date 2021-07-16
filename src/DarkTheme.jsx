import { useDispatch, useSelector } from "react-redux"

function DarkTheme() {

    const dispatch = useDispatch()
    const dark = useSelector(state => state.dark)

    const handleDarkTheme = () => {
        dispatch({
            type: 'background/inverseStyle'
        })
    }

    return <div>
        <button 
            onClick={handleDarkTheme}
        >
            {dark ? 'Светлая тема' : 'Темная тема'}
        </button>
    </div>
}

export default DarkTheme