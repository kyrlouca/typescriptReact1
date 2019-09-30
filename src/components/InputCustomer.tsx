import React,{useState,useRef} from 'react'
type InputEvent = React.ChangeEvent<HTMLInputElement>;

  


export default function InputCustomer({fetchData}: {fetchData:(val:string)=>Promise<void>} ) {
    const inpRef = useRef<HTMLInputElement>(null);
    const [customerId, setCustomerId] = useState('');

    const handleChange=(e:InputEvent)=>{
        setCustomerId(e.currentTarget.value.toUpperCase())
      }
    
    const handleClick=()=>{
        alert(customerId)
        fetchData(customerId)
        
      }
    
    return (
        <div>
            <button onClick={handleClick}>Fetch</button>
            <input ref={inpRef} value ={customerId} placeholder={'enter val'}  onChange={handleChange} />
        </div>
    )
}
