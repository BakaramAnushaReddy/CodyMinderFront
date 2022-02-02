import React from 'react';
import { useContext ,useEffect,useRef,useState} from 'react';
import Code_plate from './Code_plate';
import Codecontext from '../context/codes/CodeContext';

export default function Ds_codes() {
  const context = useContext(Codecontext);
  const {fetched_codecpp,LoadNotesCPP,deleteCodecpp,editCodecpp} =context;
  useEffect(() => {
      LoadNotesCPP();
   
    }, []);
  


  
  const [ecodes, setecodes] = useState({ecode:"",etitle:"",edesecription:"",eid:""})

  const ref = useRef(null)
  const closeref = useRef(null)
  const handle_edit=(note)=>{
      ref.current.click();
      setecodes({ecode:note.hlo,etitle:note.title,edescription:note.description,eid:note._id})


  }

  const ehandleonchange =(e)=>{
      setecodes({...ecodes,[e.target.name]: e.target.value})


  }

  const handdleupdateclick =()=>{
    console.log(ecodes)
      
          editCodecpp(ecodes.ecode,ecodes.etitle,ecodes.edescription,ecodes.eid);
          closeref.current.click();
      
  }











    
  return (<>



<button hidden ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        
     
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">


              <div className="mb-3">
            <label htmlFor="etitle" className="form-label">title</label>
            <input value={ecodes.etitle} type="text" name='etitle' minLength={2} className="form-control" id="etitle" onChange={ehandleonchange}/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="edescription" className="form-label">description</label>
            <input value={ecodes.edescription} type="text"  minLength={5} name="edescription" className="form-control" id="edescription" onChange={ehandleonchange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="etag" className="form-label">code</label>
            <textarea name='ecode' className="form-control"  placeholder="Leave a comment here" id="ecode"  style={{"height": "400px"}} value={ecodes.ecode} onChange={ehandleonchange}></textarea>
            
          </div>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={closeref}>Close</button>
                <button type="button" className="btn btn-primary"  onClick={handdleupdateclick}>Update</button>
              </div>
            </div>
          </div>
        </div>














 <div className='container'>

   <h1>CPP Codes</h1>
        
{
  
  fetched_codecpp.map((single_code)=>{
    
  
    return <Code_plate key={single_code.title} single_codes={single_code} code={single_code.hlo} title={single_code.title} description={single_code.description} delete_code={deleteCodecpp} _id={single_code._id} handle_edit={handle_edit}/>
  })
}
</div>
  </>);
}