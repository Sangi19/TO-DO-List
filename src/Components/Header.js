import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick= {onAdd} color={showAdd ? 'red' : 'green'} 
            text={ showAdd ? 'close' : 'add'} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

    // CSS styling 
    // const headingStyle= {
    //     color: 'red',
    //     backgroundColor: 'black'
    // }

export default Header;