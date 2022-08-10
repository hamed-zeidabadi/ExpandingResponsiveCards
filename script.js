const planes = document.querySelectorAll('.plan');

const removeActiveClass = () => {
    planes.forEach(plan => {
        plan.classList.remove('active')
    })
}
planes.forEach(plan => {
    plan.addEventListener('click', () => {
        removeActiveClass()
        plan.classList.add('active')

    })
})