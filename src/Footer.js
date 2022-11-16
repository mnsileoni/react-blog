const Footer = () => {
    const today = new Date();
    return (
        <footer className='Footer'>
            <p>Copyright to MS &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer