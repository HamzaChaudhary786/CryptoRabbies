









import React, { useEffect ,useContext, useState  }  from "react";


const api_url =` http://localhost:3001/apidata`;

const AppContext = React.createContext();

const AppProvider = (({ children }) => {

    const [game , setGame]=useState([]);
    const [breed , setBreed]=useState([]);
    const[coll , setColl]=useState([]);
    const[feed , setFeed]=useState([]);
    const [level , setLevel]=useState([]);
    const [iserror , setIsError]=useState({
        show:false ,
        msg:""
    });

    const getGame = async (url)=>{

        try{
            const res =await fetch(url);
            const data = await res.json()
            console.log(data)

            if(data.Response==="True")
            {
                setGame(data.Search);
                setBreed(data.Breed);
                setColl(data.Colection);
                setFeed(data.Feeding);
                setLevel(data.Levels)

            }
            else
            {
               setIsError(
                {
                    show:true,
                    msg:data.error
                }
               )
            }

        }
        catch(error){
            console.log("Error")
        }

    };


    useEffect(()=>{
        getGame(api_url);
    },[])

    return <AppContext.Provider value={{game , breed  ,coll ,feed ,level}} >
        {children}

    </AppContext.Provider>

});

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export{AppContext , AppProvider , useGlobalContext};