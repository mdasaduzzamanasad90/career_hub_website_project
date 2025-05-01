const getelement = ()=>{
    const item = localStorage.getItem('job');
    if (item) {
        return JSON.parse(item)
    }
    return [];
};

const getdataonlocalstorage = id =>{
    const data = getelement();
    const exgestdata = data.find(jobs =>jobs === id);
    if (!exgestdata) {
        data.push(id);
        localStorage.setItem('job',JSON.stringify(data));
    }

};

export{getelement,getdataonlocalstorage};