import classes from "./MainPage.module.css";







export const MainPage = ({day, yesterday, isVisible,
    isLoading, massiv, selected, setSelected, visible}) => {

  return (
    <div>
   
      { isLoading ? <div class="dropdown">

          <button onClick={() => visible()} className ={ classes.btn}> {isVisible ? 'Спрятать валюту' : 'Выберите валюту' }</button>

            { isVisible ? <div >
   
              {
                massiv.map(item => 
                  <div>
                    <button onClick={() => setSelected(item[0])} className ={ selected === item[0] ?  classes.SelectedValute : classes.valute }>
                      {item[0]} - {item[1]}
                    </button>
    
                    { selected === item[0] ? 
                      <div className ={ classes.data}>
                        <div className ={ classes.name}> 
                         {item[0]} - {item[1]} ({item[2]})
                        </div>
        
                        <div> 
                          {day} - {item[3]}
       
                        </div>
                        <div> 
        
                          {yesterday} - {item[4]}
                        </div>
                      </div> : null

                    }
        </div>
   
     )
   }

 </div> : null

   }

 </div> : null  }
</div>
  );
}


