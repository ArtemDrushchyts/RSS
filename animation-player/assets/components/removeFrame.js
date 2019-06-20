function removeFrameModul() {
    const frameWrap = document.getElementsByClassName('canvas__wrapper')[0];
    frameWrap.addEventListener('click', e => {
        const target = e.target.parentNode.parentNode;
        if (e.target.matches('.canvas__wrapper__del,.fa-trash-alt')) {
            target.remove();
            count -= 1;
        }
        if (e.target.matches('.canvas__wrapper__copy,.fa-copy')) {
            const clone = target.cloneNode(true);
            target.parentNode.insertBefore(clone, target.nextSibling);
            count += 1;
        }
    });
}

module.exports = removeFrameModul;
