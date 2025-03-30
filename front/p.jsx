.sidebar {
    width: 250px;
    height: calc(100vh - 60px); /* Resta la altura del header */
    background: #242628;
    color: white;
    padding: 20px;
    position: fixed;
    left: 0;
    top: 60px; /* Mueve la Sidebar hacia abajo para dejar espacio al Header */
    display: flex;
    flex-direction: column;
    transition: width 0.3s;
  }
  
  .sidebar.closed {
    width: 60px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar ul li {
    margin: 15px 0;
  }
  
  .sidebar ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.3s;
  }
  
  .sidebar ul li a:hover {
    color: var(--green-color);
  }
  
  .icon {
    font-size: 20px;
  }
  
  /* Botón para ocultar/mostrar */
  .toggle-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;y
    position: absolute;
    top: 20px;
    right: -15px;
    background: #333;
    border-radius: 50%;
    padding: 5px;
    transition: 0.3s;
  }
  
  .toggle-btn:hover {
    background: var(--green-color);
  }
  