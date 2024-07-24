

export default function Categories () {


    const categories = [ 
           {name:"Food & Drinks"},
          {name:"Shopping"},
          {name:"Housing"},
          {name:"Transportation"},
          {name:"Vehicle"},
          {name:"Life & Entertainment"},
          {name:"Communication, PC"},
          {name:"Financial expenses"},
          {name:"Investments"},
          {name:"Investments"},
          {name:"Others" }
    
      ]

    return(

        <div className="gap-4 p-6">
       {
            categories.map((el, index) => {
                return (

              <div key = {index} >
    
                <div>{el.name}</div>
              
              </div>

                )
            })

          }
        </div>
    )

}