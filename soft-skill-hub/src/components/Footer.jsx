import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Soft Skill Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;