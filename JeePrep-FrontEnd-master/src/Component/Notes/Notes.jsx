// import React, { useState } from 'react'
// import './practice.css'
// import FontAwesomeIcon from "@fortawesome/fontawesome-free"
// const Practice = () => {
//     const [isSidebarClosed, setSidebarClosed] = useState(false);
//     const [physicsSubMenuVisible, setPhysicsSubMenuVisible] = useState(false);
//     const [chemistrySubMenuVisible, setChemistrySubMenuVisible] = useState(false);
//     const [mathSubMenuVisible, setMathSubMenuVisible] = useState(false);

//     const toggleSidebar = () => {
//       setSidebarClosed(!isSidebarClosed);
//     };
  
//     const togglePhysicsSubMenu = () => {
//       setPhysicsSubMenuVisible(!physicsSubMenuVisible);
//     };
  
//     const toggleChemistrySubMenu = () => {
//       setChemistrySubMenuVisible(!chemistrySubMenuVisible);
//     };
  
//     const toggleMathSubMenu = () => {
//       setMathSubMenuVisible(!mathSubMenuVisible);
//     };
  
//     return (
//       <div>
//         <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
//           <a href="#" className="logo">
//             JeePrep
//           </a>
//           <div className="menu-content">
//             <ul className="menu-items">
//               <div className="menu-title"> Notes Page</div>
//               <li className="item">
//                 <a href="#">Chapter Wise notes</a>
//               </li>
//               <li className="item" onClick={togglePhysicsSubMenu}>
//                 <div className="submenu-item">
//                   <span>Class 11th</span>
//                   <FontAwesomeIcon icon={['fas', 'chevron-right']} />
//                 </div>
//                 {physicsSubMenuVisible && (
//                   <ul className="menu-items submenu">
//                     <div className="menu-title">
//                       <FontAwesomeIcon icon={['fas', 'chevron-left']} />
//                       Class 11th Notes
//                     </div>
//                     <li className="item">
//                       <a className="physics" href="#">
//                         Physics
//                       </a>
//                     </li>
//                     {/* Add more physics submenu items as needed */}
//                   </ul>
//                 )}
//               </li>
//               {/* Repeat similar structure for Chemistry and Math submenus */}
//               {/* Add event handlers and state for other menu items */}
//               <li className="item">
//                 <a href="#">Take A Quiz</a>
//               </li>
//               <li className="item">
//                 <a href="#">Performance</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <nav className="navbar">
//           <FontAwesomeIcon icon={['fas', 'bars']} id="sidebar-close" onClick={toggleSidebar} />
//         </nav>
//         <main className="main">
//           <h1>Dashboard Content</h1>
//         </main>
//       </div>
//     );
  
// }

// export default Practice



import React, { useState } from 'react';
// import './notes.css'; // Import your CSS file

const Note = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [physicsSubMenuVisible, setPhysicsSubMenuVisible] = useState(false);
  const [chemistrySubMenuVisible, setChemistrySubMenuVisible] = useState(false);
  const [mathSubMenuVisible, setMathSubMenuVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const togglePhysicsSubMenu = () => {
    setPhysicsSubMenuVisible(!physicsSubMenuVisible);
  };

  const toggleChemistrySubMenu = () => {
    setChemistrySubMenuVisible(!chemistrySubMenuVisible);
  };

  const toggleMathSubMenu = () => {
    setMathSubMenuVisible(!mathSubMenuVisible);
  };

  return (
    <section>
      <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
        <a href="#" className="logo">
          JeePrep
        </a>
        <div className="menu-content">
          <ul className="menu-items">
            <div className="menu-title"> Notes Page</div>
            <li className="item">
              <a href="#">Chapter Wise notes</a>
            </li>
            <li className="item" onClick={togglePhysicsSubMenu}>
              <div className="submenu-item">
                <span>Class 11th</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
              {physicsSubMenuVisible && (
                <ul className="menu-items submenu">
                  <div className="menu-title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    Class 11th Notes
                  </div>
                  <li className="item">
                    <a className="physics" href="#">
                      Physics
                    </a>
                  </li>
                  {/* Add more physics submenu items as needed */}
                </ul>
              )}
            </li>
            {/* Repeat similar structure for Chemistry and Math submenus */}
            {/* Add event handlers and state for other menu items */}
            <li className="item">
              <a href="#">Take A Quiz</a>
            </li>
            <li className="item">
              <a href="#">Performance</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bars" id="sidebar-close" onClick={toggleSidebar}>
          <line x1="3" y1="3" x2="21" y2="3"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="21" x2="21" y2="21"></line>
        </svg>
      </nav>
      <main className="main">
        <h1>Dashboard Content</h1>
      </main>
    </section>
  );
}

export default Note;
