function castleStart(){
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
    var fillClasses;

    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);
    fill.addEventListener("touchstart", handleStart);
    fill.addEventListener("touchend", handleEnd);
    fill.addEventListener("touchcancel", handleCancel);
    fill.addEventListener("touchmove", handleMove);

    for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    //empty.addEventListener("touchmove", handleMove);
    }

    function dragStart() {
    fillClasses = this.closest("td").classList;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
    this.className = 'fill';
    }

    function dragOver(e) {
    e.preventDefault();
    }

    function dragEnter(e) {
    e.preventDefault();
    if (this.classList[1] === fillClasses[1] || this.classList[2] === fillClasses[2]) {
        this.className += ' hovered';
    } 
    }

    function dragLeave() {
    this.classList.remove("hovered")    
    }

    function dragDrop() {
    if (this.classList[1] === fillClasses[1] || this.classList[2] === fillClasses[2]) {
        this.classList.remove("hovered")  
        this.append(fill);
    } 
    }

    function handleStart() {
        fillClasses = fill.closest("td").classList;
        this.className += ' hold';

        if (event.targetTouches.length == 1) {
            var touch=event.targetTouches[0];
            touchOffsetX = touch.pageX - touch.target.offsetLeft;
            touchOffsetY = touch.pageY - touch.target.offsetTop;
            }
        // setTimeout(() => (this.className = 'invisible'), 0);
    }

    function handleEnd(e) {
        fill.style.top = "";
        fill.style.left = "";
        this.className = 'fill';
        var myLocation = event.changedTouches[0];
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        console.log(realTarget.classList);
        if (realTarget.classList[1] === fillClasses[1] || realTarget.classList[2] === fillClasses[2]) {
            realTarget.append(fill);
        }

    }

    function handleCancel() {
        this.className = 'fill';
    }

    function handleMove(e) {
        //fillClasses = fill.closest("td").classList;
        e.preventDefault();
        if (event.targetTouches.length == 1) {
            var touch = event.targetTouches[0];
            fill.style.left = touch.pageX-touchOffsetX + 'px';
            fill.style.top = touch.pageY-touchOffsetY + 'px';
            }
    }



}

castleStart();
