import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react";

import '../styles/Repository.scss';

//https://api.github.com/orgs/rocketseat/repos


export function RepositoryList() {

    const [repostories, setRepositories] = useState([])

    useEffect( ()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(res => res.json())
        .then(data => setRepositories(data))
    },[])

    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                {repostories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
            
        </section>
    )
}