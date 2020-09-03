import styles from "./NavBar.module.scss";
import ActiveLink from "./ActiveLink";
const leafLogo =  require("../../images/NavBar/leafLogo.svg");


/* const NavBar=()=>
  
   
    <div  className={styles.NavBar}>
   
        <div className = {styles.technolgap}> 
        <img src = {leafLogo} className = {styles.logo}></img>
        technolgap
        </div>
  
        <ActiveLink href = {`/`}>
            <h4>home</h4>
        </ActiveLink >

        <ActiveLink  href = "/about">
            <h4>about</h4>
        </ActiveLink >
        
    </div>;

export default NavBar; */
 


const NavBar=()=>
  
   <div>
   <div className = {styles.hamburgerContainer}>
           <div className = {styles.bar1}></div>
           <div className = {styles.bar2}></div>
           <div className = {styles.bar3}></div>
    </div>
    <nav className = {styles.NavBar}>
    <ul className = {styles.navList}>
        
        <div className = {styles.technolgap}> 
            <img src = {leafLogo} className = {styles.logo}></img>
            technolgap
        </div>

        <ActiveLink href = {`/`}>
                home
        </ActiveLink>

        <ActiveLink href = "/about">
            about
        </ActiveLink>
    


    </ul>
    
    </nav>   
      
    </div>
export default NavBar;   


