const mouseDrag = (()=>{

    function setAsDropZone(element, ...method){

    }

    function setAsDraggable(element, ...method){
        element.setAttribute('draggable', true);
        
    }

    return{setAsDropZone, setAsDraggable};
})()