import React, { useEffect, useState } from "react"
import axios from "axios"

const Githubuser =(qu,page,perpage)=>{
    return axios.get(`https://api.github.com/search/repositories?q=${qu}&per_page=${perpage}&page=${page}`,{
            // params:{
            //     q:qu,
                
            // }
        })
    
}

export const GithubUser = ()=>{
    const [Query , setquery]= useState("react");
    const [input, Setinput] = useState("react");

    const [Data, setData] = useState([])
    const [perpage, setperpage] = useState("2")
    const [page , setpage ]= useState(1)
    const [Totalpg, setTotalpg] = useState()

    console.log(Query)
    const Handleclick = () =>{
        setquery(input)
    };
    
    useEffect(()=>{
            Githubuser(Query,page,perpage)
             .then(res=>{
                 setTotalpg(res.data.total_count)
                setData(res.data.items)
              })
            .catch(err=>{
             console.log(err)
            })
     
    },[Query,perpage,page])

console.log(Data)
      
    return <div>
        <input type="text" onChange={(e)=>{
            Setinput(e.target.value)
        }} />
        <button onClick={Handleclick}>Serch</button>
        <input type="text" onChange={(e)=>{
            setperpage(e.target.value)
        }} placeholder="per page repo"/>

        {Data.map((e)=>{
            
            return <div key={e.id}>
            <p key={e.full_name}>{e.full_name}</p>
            <img    style={{
                width: "250px",
                height: "250px"
            }} src={e.owner.avatar_url} alt="" key={e.owner.avatar_url}  />
           <a href={e.git_url} key={e.url}></a>
           {/* {setTotalpg(e.total_count)} */}
           
            </div>

        })}
        <div>
         
        <button disabled={page===1} onClick={()=>{
            setpage((p)=>p-1)
        }}>prev</button>
        <p>{page}</p>
        <button onClick={()=>{
              setpage(page+1)
        }}>next</button>
        <p>Total page: {Math.floor(Totalpg/perpage)} </p>
       
        </div>
        
    </div>
}

// archive_url: "https://api.github.com/repos/mojombo/grit/{archive_format}{/ref}"
// assignees_url: "https://api.github.com/repos/mojombo/grit/assignees{/user}"
// blobs_url: "https://api.github.com/repos/mojombo/grit/git/blobs{/sha}"
// branches_url: "https://api.github.com/repos/mojombo/grit/branches{/branch}"
// collaborators_url: "https://api.github.com/repos/mojombo/grit/collaborators{/collaborator}"
// comments_url: "https://api.github.com/repos/mojombo/grit/comments{/number}"
// commits_url: "https://api.github.com/repos/mojombo/grit/commits{/sha}"
// compare_url: "https://api.github.com/repos/mojombo/grit/compare/{base}...{head}"
// contents_url: "https://api.github.com/repos/mojombo/grit/contents/{+path}"
// contributors_url: "https://api.github.com/repos/mojombo/grit/contributors"
// deployments_url: "https://api.github.com/repos/mojombo/grit/deployments"
// description: "**Grit is no longer maintained. Check out libgit2/rugged.** Grit gives you object oriented read/write access to Git repositories via Ruby."
// downloads_url: "https://api.github.com/repos/mojombo/grit/downloads"
// events_url: "https://api.github.com/repos/mojombo/grit/events"
// fork: false
// forks_url: "https://api.github.com/repos/mojombo/grit/forks"
// full_name: "mojombo/grit"
// git_commits_url: "https://api.github.com/repos/mojombo/grit/git/commits{/sha}"
// git_refs_url: "https://api.github.com/repos/mojombo/grit/git/refs{/sha}"
// git_tags_url: "https://api.github.com/repos/mojombo/grit/git/tags{/sha}"
// hooks_url: "https://api.github.com/repos/mojombo/grit/hooks"
// html_url: "https://github.com/mojombo/grit"
// id: 1
// issue_comment_url: "https://api.github.com/repos/mojombo/grit/issues/comments{/number}"
// issue_events_url: "https://api.github.com/repos/mojombo/grit/issues/events{/number}"
// issues_url: "https://api.github.com/repos/mojombo/grit/issues{/number}"
// keys_url: "https://api.github.com/repos/mojombo/grit/keys{/key_id}"
// labels_url: "https://api.github.com/repos/mojombo/grit/labels{/name}"
// languages_url: "https://api.github.com/repos/mojombo/grit/languages"
// merges_url: "https://api.github.com/repos/mojombo/grit/merges"
// milestones_url: "https://api.github.com/repos/mojombo/grit/milestones{/number}"
// name: "grit"
// node_id: "MDEwOlJlcG9zaXRvcnkx"
// notifications_url: "https://api.github.com/repos/mojombo/grit/notifications{?since,all,participating}"
// owner: {login: 'mojombo', id: 1, node_id: 'MDQ6VXNlcjE=', avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4', gravatar_id: '', …}
// private: false
// pulls_url: "https://api.github.com/repos/mojombo/grit/pulls{/number}"
// releases_url: "https://api.github.com/repos/mojombo/grit/releases{/id}"
// stargazers_url: "https://api.github.com/repos/mojombo/grit/stargazers"
// statuses_url: "https://api.github.com/repos/mojombo/grit/statuses/{sha}"
// subscribers_url: "https://api.github.com/repos/mojombo/grit/subscribers"
// subscription_url: "https://api.github.com/repos/mojombo/grit/subscription"
// tags_url: "https://api.github.com/repos/mojombo/grit/tags"
// teams_url: "https://api.github.com/repos/mojombo/grit/teams"
// trees_url: "https://api.github.com/repos/mojombo/grit/git/trees{/sha}"
// url: "https://api.github.com/repos/mojombo/grit"