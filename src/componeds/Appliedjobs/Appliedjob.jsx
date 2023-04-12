import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../fakeDB';
import ShowJobs from './ShowJobs';
import ShowAppliedJobs from './ShowAppliedJobs';



const AppliedJobs = () => {

    let [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch("/Featuredjobs.json")
        .then(res => res.json())
        .then(data => setJobs(data));
    } ,[]);

    console.log(jobs)

    let [savedCartItem, setSavedCartItem] = useState([]);
    useEffect(() => {
        let savedCart = [];
        let storedCart = getShoppingCart();

        for (let id in storedCart) {
          let addedProduct = jobs.find((job) => job.id === id);

        //   console.log(addedProduct)
            if(addedProduct){
                savedCart.push(addedProduct);
                // console.log(addedProduct)
            }
          
        }
        setSavedCartItem(savedCart);
      }, [jobs]);



      let [remote, setRemote] = useState(0);
      let [onside, setOnside] = useState(0);
      const remoteBtn = () =>{
        if(onside >0){
            setOnside(0);
        }
        setRemote(remote +1);
        // console.log("remote", remote);
        
      }
      const onsideBtn = () =>{
        if(remote > 0){
            setRemote(0);
        }
          setOnside(onside +1);
        //   console.log("onside", onside);
      }

      let [savedRemote, setSavedRemote] = useState([]);
      useEffect( ()=> {
        let Remote = [];
        Remote = savedCartItem.filter(r => r.remote_or_onsite == "Remote");

        if(remote > 0){
            setSavedRemote(Remote);
        }
      } , [remote])

      let [savedOnside, setSavedOnside] = useState([]);
      useEffect( ()=> {
        let Onside = [];
        Onside = savedCartItem.filter(r => r.remote_or_onsite == "Onsite");

        if(onside > 0){
            setSavedOnside(Onside)
        }
      } , [onside])

    return (
        <>

            <div className=' absolute right-64 my-10 px-4 py-2 rounded-lg'>
                <h4 className='text-center text-3xl font-semibold'>Filter By</h4>
                <button className="m-2 py-1 px-2 text-2xl border-2 rounded bg-blue-300 font-semibold" onClick={remoteBtn}>Remote</button>
                <button className="m-2 py-1 px-2 text-2xl border-2 rounded bg-blue-300 font-semibold" onClick={onsideBtn}>Onsite</button>

            </div>

            <div className='mb-20 mt-40'>
                {/* {savedCartItem.map(job => <ShowJobs job = {job}></ShowJobs>)} */}
                {
                    onside == 0 && remote == 0 ? savedCartItem.map(job => <ShowJobs job = {job}></ShowJobs>) : 
                    
                    (onside > 0 ? savedOnside.map(job => <ShowJobs job = {job}></ShowJobs>) : 
                        savedRemote.map(job => <ShowJobs job = {job}></ShowJobs>))


                //    (onside) && savedOnside.map(job => <ShowJobs job = {job}></ShowJobs>)
                //    (remote) && savedRemote.map(job => <ShowJobs job = {job}></ShowJobs>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;