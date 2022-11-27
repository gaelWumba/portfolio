if (typeof window === 'object') {
    let innerCursor = document.querySelector('.inner-cursor');
    let outerCursor = document.querySelector('.outer-cursor');

    document.addEventListener('mousemove', moveCursor);
    function moveCursor(e){
        let x = e.clientX;
        let y = e.clientY;

        innerCursor.style.top = `${x}px`;
        innerCursor.style.left = `${y}px`;
        outerCursor.style.top = `${x}px`;
        outerCursor.style.left = `${y}px`;
    }
}
    