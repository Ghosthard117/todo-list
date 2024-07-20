const inputBox: HTMLInputElement | null = document.getElementById('input-box') as HTMLInputElement | null
const listContainer: HTMLDListElement | null = document.getElementById('list-container') as HTMLDListElement | null
const addButton: HTMLButtonElement | null = document.querySelector('.add-button')

// Add task
addButton?.addEventListener('click', () => {
  if (inputBox?.value === '') {
    alert('Please enter a task')
  } else {
    let liItem: HTMLLIElement = document.createElement('li')
    liItem.innerHTML = inputBox?.value ?? ''
    listContainer?.appendChild(liItem)

    let span: HTMLSpanElement = document.createElement('span')
    span.innerHTML = '\u00d7'
    liItem.appendChild(span)
  }
  inputBox && (inputBox.value = '')
  saveTasks()
})

// delete task
listContainer?.addEventListener('click', (e: MouseEvent) => {
  e.preventDefault()

  if ((e.target as HTMLElement).tagName === 'LI') {
    (e.target as HTMLElement).classList.toggle('checked')
    saveTasks()
  } else if ((e.target as HTMLElement).tagName === 'SPAN') {
    (e.target as HTMLElement).parentElement?.remove()
    saveTasks()
  }
}, false)


// Function to save tasks to localStorage
function saveTasks (): void {
  localStorage.setItem('data', listContainer?.innerHTML || '')
}

(function showTask() {
  if (listContainer) {
    listContainer.innerHTML = localStorage.getItem('data') ?? ''
  }
})()

