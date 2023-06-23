import React, { useState, useEffect } from "react";
import { getLists } from "../api/galeria.api";
import List from "../components/list";

function Home() {
    const [lists, setLists] = useState([]);
  
     useEffect(() => {
      loadLists();
    }, []);
  
    async function loadLists() {
      const response = await getLists();
      setLists(response.data);
    }
  
    function renderMain() {
      if (lists.length === 0) return <h1>No se tienen usuarios</h1>;
      return lists.map((list) => <List user={list} key={list.id} />);
    }
    return (
        <div>
          <div className="home-container">
            <header>
              <nav className="home-nav">
                <div className="home-logo">
                  <h1>Bienvenidos</h1>
                </div>
              </nav>
            </header>
            <section>
              <div>{renderMain()}</div>
            </section>
          </div>
        </div>
      );
    }
    
    export default Home;
