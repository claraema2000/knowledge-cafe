import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between text-6xl font-bold mt-10 bg-cyan-100 p-4 mx-10'>
            <h1>Knowledge Cafe</h1>
            <img src={profile} alt="Profile Picture" />
        </header>
        
        
    );
};

export default Header;